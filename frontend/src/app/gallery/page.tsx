import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const galleryItems = [
  {
    title: "KCU Football Team",
    description: "King Ceasor University football team representing the university in competition.",
    image: "/images/hero/1000766229.jpg",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover",
  },
  {
    title: "University Team Photo",
    description: "A campus group photo outside the King Ceasor University offices.",
    image: "/images/hero/1000766232 (1).jpg",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover",
  },
  {
    title: "Match Day Delegation",
    description: "KCU players and university representatives gathered before a football fixture.",
    image: "/images/hero/1000766235.jpg",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover",
  },
  {
    title: "Sports Federation Moment",
    description: "A university sports engagement moment with federation representatives.",
    image: "/images/hero/1000766238.jpg",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover",
  },
  {
    title: "Football Officials",
    description: "KCU football activity with match officials on the pitch.",
    image: "/images/hero/1000766243.jpg",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover",
  },
  {
    title: "Student Group Activity",
    description: "Students participating in a group activity and campus engagement session.",
    image: "/images/hero/1000766245.jpg",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover",
  },
  {
    title: "Environmental Conservation Team",
    description: "KCU students taking part in an environmental conservation activity in partnership with higher education stakeholders.",
    image: "/images/student-activity/conservation-team-1.jpeg",
    frameClassName: "aspect-[3/4]",
    imageClassName: "object-cover object-top",
  },
  {
    title: "Campus Conservation Champions",
    description: "Students representing King Ceasor University during a conservation awareness and community engagement initiative.",
    image: "/images/student-activity/conservation-team-2.jpeg",
    frameClassName: "aspect-[3/4]",
    imageClassName: "object-cover object-top",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8 sm:mb-10">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0B6232]">Gallery</p>
              <h3 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">Review Special Moments</h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {galleryItems.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/5">
                  <div className={`relative overflow-hidden bg-slate-100 ${item.frameClassName}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className={item.imageClassName}
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h2 className="text-[15px] font-black leading-snug text-slate-950 sm:text-base">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
