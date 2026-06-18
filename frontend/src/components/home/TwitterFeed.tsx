"use client";

import Link from "next/link";
import Script from "next/script";
import { ExternalLink } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement | null) => void;
      };
    };
  }
}

export default function SocialFeed() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [timelineReady, setTimelineReady] = useState(false);

  const loadTimeline = useCallback(() => {
    window.twttr?.widgets?.load(embedRef.current);
  }, []);

  useEffect(() => {
    loadTimeline();

    const checkTimer = window.setInterval(() => {
      const iframe = embedRef.current?.querySelector<HTMLIFrameElement>('iframe[id^="twitter-widget-"]');

      if (!iframe) {
        return;
      }

      const { height, width } = iframe.getBoundingClientRect();
      const isVisible = width > 0 && height > 0 && window.getComputedStyle(iframe).visibility !== "hidden";

      if (isVisible) {
        setTimelineReady(true);
        window.clearInterval(checkTimer);
      }
    }, 500);

    return () => {
      window.clearInterval(checkTimer);
    };
  }, [loadTimeline]);

  return (
    <section className="bg-[#F7F9FC] px-4 py-16 sm:px-6 lg:px-12">
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={loadTimeline}
        onReady={loadTimeline}
      />

      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Social Media</p>
            <h2 className="text-2xl font-black text-slate-900">Latest On X</h2>
            <p className="mt-1 text-sm text-slate-500">Live updates from King Ceasor University on X.</p>
          </div>
          <Link
            href="https://x.com/KingCeasorUni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-full bg-[#0B6232] text-white transition-colors hover:bg-[#FFC66B] hover:text-slate-950"
            aria-label="X"
          >
            <FaXTwitter className="size-4" />
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="relative min-h-[360px] overflow-hidden rounded-xl">
            <div
              ref={embedRef}
              className={`mx-auto max-w-[780px] ${timelineReady ? "" : "min-h-[360px]"} ${
                !timelineReady ? "opacity-0" : ""
              }`}
            >
              <a
                className="twitter-timeline"
                data-height="620"
                data-theme="light"
                data-dnt="true"
                href="https://twitter.com/KingCeasorUni?ref_src=twsrc%5Etfw"
              >
                Posts by @KingCeasorUni
              </a>
            </div>
            {!timelineReady && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl border border-slate-100 bg-[#F7F9FC] px-6 py-10 text-center">
                <div className="mx-auto max-w-md">
                  <div className="mx-auto grid size-12 place-items-center rounded-full bg-slate-950 text-white">
                    <FaXTwitter className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-black text-slate-950">Latest posts are on X</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    The embedded X timeline is unavailable in this browser. Visit the university profile to see current updates.
                  </p>
                  <Link
                    href="https://x.com/KingCeasorUni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B6232] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#FFC66B] hover:text-slate-950"
                  >
                    Open latest posts <ExternalLink className="size-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
