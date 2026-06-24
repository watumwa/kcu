"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import { FaXTwitter } from "react-icons/fa6";

const X_PROFILE_URL = "https://x.com/KingCeasorUni";
const X_WIDGET_SCRIPT = "https://platform.twitter.com/widgets.js";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement | null) => void;
      };
    };
  }
}

export default function TwitterFeed() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const loadTimeline = useCallback(() => {
    window.twttr?.widgets?.load(timelineRef.current);
  }, []);

  useEffect(() => {
    loadTimeline();
  }, [loadTimeline]);

  return (
    <section className="bg-[#F7F9FC] px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Social Media</p>
            <h2 className="text-2xl font-black text-slate-900">Latest On X</h2>
            <p className="mt-1 text-sm text-slate-500">Live updates from King Ceasor University on X.</p>
          </div>
          <a
            href={X_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-full bg-[#0B6232] text-white transition hover:bg-[#094f2a]"
            aria-label="Open King Ceasor University on X"
          >
            <FaXTwitter className="size-4" />
          </a>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div ref={timelineRef} className="min-h-[320px] overflow-hidden rounded-xl bg-[#F7F9FC]">
            <a
              className="twitter-timeline flex min-h-[320px] items-center justify-center px-6 py-10 text-center text-sm font-bold text-[#0B6232]"
              data-chrome="noheader nofooter noborders transparent"
              data-dnt="true"
              data-height="360"
              data-theme="light"
              data-tweet-limit="1"
              href={X_PROFILE_URL}
            >
              Latest post from King Ceasor University on X
            </a>
          </div>
        </div>
      </div>

      <Script src={X_WIDGET_SCRIPT} strategy="lazyOnload" onReady={loadTimeline} />
    </section>
  );
}
