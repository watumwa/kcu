"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    window.twttr?.widgets?.load(embedRef.current);
  }, []);

  return (
    <section className="bg-[#F7F9FC] px-4 py-16 sm:px-6 lg:px-12">
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => window.twttr?.widgets?.load(embedRef.current)}
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
          <div ref={embedRef} className="mx-auto max-w-[780px] overflow-hidden rounded-xl">
            <a
              className="twitter-timeline"
              data-height="620"
              data-theme="light"
              data-dnt="true"
              href="https://x.com/KingCeasorUni"
            >
              Posts by @KingCeasorUni
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
