import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const galleryItems = [
  {
    title: "Campus Moment",
    description: "Placeholder for a campus photo with a short description of the scene.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Student Activity",
    description: "Placeholder for student life, clubs, societies, and everyday university experiences.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Academic Session",
    description: "Placeholder for lectures, workshops, seminars, and classroom learning moments.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Graduation Memory",
    description: "Placeholder for graduation photos, ceremonies, and milestone celebrations.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "University Event",
    description: "Placeholder for public lectures, conferences, visits, and official events.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Library & Study",
    description: "Placeholder for library spaces, study sessions, and academic support services.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Laboratory Work",
    description: "Placeholder for practical learning, science labs, computing, and research activity.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sports & Wellness",
    description: "Placeholder for sports, wellness activities, competitions, and student recreation.",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Community Engagement",
    description: "Placeholder for outreach, partnerships, and community service moments.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Leadership Moment",
    description: "Placeholder for student leadership, guild activities, and university governance events.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Culture & Creativity",
    description: "Placeholder for arts, culture, creativity, and student expression on campus.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Campus View",
    description: "Placeholder for buildings, walkways, facilities, and the university environment.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
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
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-base font-black leading-snug text-slate-950">{item.title}</h2>
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
