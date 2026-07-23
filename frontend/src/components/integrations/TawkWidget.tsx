"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const TAWK_PROPERTY_ID = "6374a39bb0d6371309cf4a30";
const TAWK_CHAT_ID = "1ghvpu6kh";
const TAWK_SRC = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_CHAT_ID}`;

function injectTawkScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("No window"));
      return;
    }

    if ((window as any).Tawk_API) {
      resolve();
      return;
    }

    const existing = document.getElementById("tawk-to-widget");
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "tawk-to-widget";
    script.async = true;
    script.src = TAWK_SRC;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    const timeout = setTimeout(() => {
      reject(new Error("Chat unavailable"));
    }, 12000);

    script.addEventListener("load", () => {
      clearTimeout(timeout);
      resolve();
    });

    script.addEventListener("error", () => {
      clearTimeout(timeout);
      reject(new Error("Chat unavailable"));
    });
  });
}

function waitForTawkApi(timeoutMs = 10000): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("No window"));
      return;
    }

    const start = Date.now();
    const check = () => {
      const api = (window as any).Tawk_API;
      if (api && typeof api.maximize === "function") {
        resolve();
      } else if (Date.now() - start > timeoutMs) {
        reject(new Error("Chat unavailable"));
      } else {
        requestAnimationFrame(() => setTimeout(check, 100));
      }
    };

    check();
  });
}

export default function TawkWidget() {
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!shouldLoadWidget) {
      return;
    }

    let cancelled = false;

    const openTawkWidget = async () => {
      try {
        await injectTawkScript();
        if (cancelled) return;
        await waitForTawkApi();
        if (cancelled) return;
        (window as any).Tawk_API.maximize();
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Chat unavailable");
        }
      }
    };

    openTawkWidget();

    return () => {
      cancelled = true;
    };
  }, [shouldLoadWidget]);

  return (
    <>
      {!shouldLoadWidget && (
        <button
          type="button"
          onClick={() => {
            setError(null);
            setShouldLoadWidget(true);
          }}
          className="fixed bottom-5 right-5 z-[70] inline-flex h-14 items-center gap-3 rounded-full border border-[#FFC66B]/70 bg-[#0B6232] px-5 text-sm font-black text-white shadow-2xl shadow-slate-950/25 transition hover:-translate-y-0.5 hover:bg-[#0B6232] focus:outline-none focus:ring-4 focus:ring-[#FFC66B]/35 sm:bottom-6 sm:right-6 sm:h-16 sm:px-6 sm:text-base"
          aria-label="Open King Ceasor University chat"
        >
          <span className="grid size-9 place-items-center rounded-full bg-[#FFC66B] text-[#0B6232] sm:size-10">
            <MessageCircle className="size-5" />
          </span>
          <span>Chat</span>
        </button>
      )}

      {error && (
        <div className="fixed bottom-5 right-5 z-[70] rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-700 shadow-lg">
          {error}
        </div>
      )}
    </>
  );
}
