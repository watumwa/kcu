"use client";

import { MessageCircle } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";

const tawkWidgetSrc =
  "https://embed.tawk.to/6374a39bb0d6371309cf4a30/1ghvpu6kh";

export default function TawkWidget() {
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);

  useEffect(() => {
    if (!shouldLoadWidget) {
      return;
    }

    const openTawkWidget = () => {
      if (typeof window !== "undefined" && (window as any).Tawk_API) {
        try {
          (window as any).Tawk_API.maximize();
        } catch {
          // Tawk API may not be ready immediately
        }
      }
    };

    openTawkWidget();
    const interval = setInterval(openTawkWidget, 500);

    const timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [shouldLoadWidget]);

  return (
    <>
      {!shouldLoadWidget && (
        <button
          type="button"
          onClick={() => setShouldLoadWidget(true)}
          className="fixed bottom-5 right-5 z-[70] inline-flex h-14 items-center gap-3 rounded-full border border-[#FFC66B]/70 bg-[#0B6232] px-5 text-sm font-black text-white shadow-2xl shadow-slate-950/25 transition hover:-translate-y-0.5 hover:bg-[#0B6232] focus:outline-none focus:ring-4 focus:ring-[#FFC66B]/35 sm:bottom-6 sm:right-6 sm:h-16 sm:px-6 sm:text-base"
          aria-label="Open King Ceasor University chat"
        >
          <span className="grid size-9 place-items-center rounded-full bg-[#FFC66B] text-[#0B6232] sm:size-10">
            <MessageCircle className="size-5" />
          </span>
          <span>Chat</span>
        </button>
      )}

      {shouldLoadWidget && (
        <Script id="tawk-to-widget" src={tawkWidgetSrc} strategy="afterInteractive" />
      )}
    </>
  );
}
