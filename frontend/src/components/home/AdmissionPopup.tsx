"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export default function AdmissionPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("admissionPopupSeen")) return;

    let triggered = false;

    const show = () => {
      if (triggered) return;
      triggered = true;
      setVisible(true);
      sessionStorage.setItem("admissionPopupSeen", "1");
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      const mid = document.documentElement.scrollHeight / 2;
      if (window.scrollY + window.innerHeight >= mid) show();
    };

    // Fallback: show after 4s even without scrolling
    const timer = setTimeout(show, 4000);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
            onClick={(e) => e.stopPropagation()}
          >
          {/* Image */}
          <div className="relative h-40">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=640&q=80"
              alt="Apply to KCU"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B6232]/90 to-transparent" />
            <p className="absolute bottom-3 left-4 text-white font-black text-lg leading-tight">
              August 2026<br />Intake is Open
            </p>
          </div>

          {/* Body */}
          <div className="bg-white px-5 py-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Secure your place at King Ceasor University. Limited spaces available across all programmes.
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                href="https://apply.kcu.ac.ug/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-[#0B6232] py-2.5 text-center text-sm font-black text-white hover:bg-[#0B6232]/90 transition-colors"
              >
                Apply Now
              </Link>
              <button
                onClick={() => setVisible(false)}
                className="rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-colors"
              >
                Later
              </button>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-3 right-3 size-7 grid place-items-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
