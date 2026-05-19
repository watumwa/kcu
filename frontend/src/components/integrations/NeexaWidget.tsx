"use client";

import { MessageCircle } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";

const neexaWidgetClientId =
  process.env.NEXT_PUBLIC_NEEXA_WIDGET_ID ?? "a1d1fe6a-9e65-4794-9233-d95768665231";
const neexaWidgetSrc =
  process.env.NEXT_PUBLIC_NEEXA_WIDGET_SRC ?? "https://chat-widget.neexa.ai/main.js?nonce=1779232984559.197";

export default function NeexaWidget() {
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);

  useEffect(() => {
    if (!shouldLoadWidget) {
      return;
    }

    const longDisclaimer = "Disclaimer: This chat is facilitated by AI and may produce inaccurate information.";
    const shortDisclaimer = "AI assistant. Please confirm important information with the University.";

    const updateDisclaimer = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();

      while (node) {
        if (node.textContent?.includes(longDisclaimer)) {
          node.textContent = shortDisclaimer;

          const container = node.parentElement;
          container
            ?.querySelectorAll("a, button")
            .forEach((item) => {
              if (item.textContent?.trim().toLowerCase() === "learn more") {
                item.remove();
              }
            });
        }

        node = walker.nextNode();
      }
    };

    updateDisclaimer();
    const observer = new MutationObserver(updateDisclaimer);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [shouldLoadWidget]);

  return (
    <>
      {!shouldLoadWidget && (
        <button
          type="button"
          onClick={() => setShouldLoadWidget(true)}
          className="fixed bottom-5 right-5 z-[70] inline-flex h-14 items-center gap-3 rounded-full border border-[#FECB00]/70 bg-[#17351f] px-5 text-sm font-black text-white shadow-2xl shadow-slate-950/25 transition hover:-translate-y-0.5 hover:bg-[#275D38] focus:outline-none focus:ring-4 focus:ring-[#FECB00]/35 sm:bottom-6 sm:right-6 sm:h-16 sm:px-6 sm:text-base"
          aria-label="Open King Ceasor University chat"
        >
          <span className="grid size-9 place-items-center rounded-full bg-[#FECB00] text-[#17351f] sm:size-10">
            <MessageCircle className="size-5" />
          </span>
          <span>Chat</span>
        </button>
      )}

      {shouldLoadWidget && (
        <>
          <Script id="neexa-ai-widget-config" strategy="afterInteractive">
            {`var neexa_xgmx_cc_wpq_ms = "${neexaWidgetClientId}";`}
          </Script>
          <Script id="neexa-ai-widget" src={neexaWidgetSrc} strategy="afterInteractive" />
        </>
      )}
    </>
  );
}
