import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Heart, Repeat2, MessageCircle, ExternalLink } from "lucide-react";

const posts = [
  {
    platform: "x",
    handle: "@KingCeasorUni",
    date: "May 30, 2026",
    text: "The Vice Chancellor welcomed and honoured outstanding Law students and their coaches during a courtesy visit — presenting certificates earned from recent regional moot court and legal debate competitions. She commended their dedication and excellence.",
    likes: 48,
    reposts: 12,
    replies: 7,
    url: "https://x.com/KingCeasorUni",
  },
  {
    platform: "x",
    handle: "@KingCeasorUni",
    date: "May 29, 2026",
    text: 'On 23rd May 2026, the Rotaract Club of King Ceasor University proudly attended the 10th Presidential Installation of the Rotary Club of Muyenga Sunset, marking the start of the 2026\u20132027 Rotary Year under the theme \u201cEngage with Impact.\u201d',
    likes: 35,
    reposts: 8,
    replies: 4,
    url: "https://x.com/KingCeasorUni",
  },
  {
    platform: "facebook",
    handle: "KCU Official",
    date: "Jun 2, 2026",
    text: "🎓 August 2026 Intake is NOW OPEN! Apply today for Undergraduate, Diploma and Certificate programmes at King Ceasor University. Limited spaces available — secure your place early. Apply at apply.kcu.ac.ug",
    likes: 124,
    reposts: 56,
    replies: 31,
    url: "https://www.facebook.com/kcu.ac.ug",
  },
  {
    platform: "instagram",
    handle: "@king.ceasor.university",
    date: "May 28, 2026",
    text: "Proud moments from our Guild Leadership Swearing-In Ceremony 🎊 A new generation of student leaders takes the helm at KCU. The future is bright! #KCU #StudentLeadership #IgniteTheFuture",
    likes: 210,
    reposts: 44,
    replies: 18,
    url: "https://www.instagram.com/king.ceasor.university",
  },
];

const platformMeta = {
  x: {
    icon: FaXTwitter,
    label: "X",
    color: "bg-black text-white",
    border: "border-slate-800",
  },
  facebook: {
    icon: FaFacebookF,
    label: "Facebook",
    color: "bg-[#1877F2] text-white",
    border: "border-blue-100",
  },
  instagram: {
    icon: FaInstagram,
    label: "Instagram",
    color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white",
    border: "border-pink-100",
  },
};

export default function SocialFeed() {
  return (
    <section className="bg-[#F7F9FC] py-16 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232] mb-1">Social Media</p>
            <h2 className="text-2xl font-black text-slate-900">Follow Our Journey</h2>
            <p className="text-slate-500 text-sm mt-1">Stay connected with KCU across all platforms.</p>
          </div>
          <div className="flex gap-3">
            {[
              { href: "https://x.com/KingCeasorUni", icon: FaXTwitter, label: "X" },
              { href: "https://www.facebook.com/kcu.ac.ug", icon: FaFacebookF, label: "Facebook" },
              { href: "https://www.instagram.com/king.ceasor.university", icon: FaInstagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="grid size-9 place-items-center rounded-full bg-[#0B6232] text-white hover:bg-[#FFC66B] hover:text-slate-950 transition-colors"
                aria-label={label}
              >
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post, i) => {
            const meta = platformMeta[post.platform as keyof typeof platformMeta];
            const Icon = meta.icon;
            return (
              <Link
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Platform badge + date */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-black ${meta.color}`}>
                    <Icon className="size-3" /> {meta.label}
                  </span>
                  <span className="text-[11px] text-slate-400">{post.date}</span>
                </div>

                {/* Text */}
                <p className="text-sm text-slate-700 leading-relaxed line-clamp-4 flex-1">{post.text}</p>

                {/* Engagement + link */}
                <div className="mt-5 flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Heart className="size-3" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><Repeat2 className="size-3" /> {post.reposts}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="size-3" /> {post.replies}</span>
                  </div>
                  <ExternalLink className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0B6232]" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
