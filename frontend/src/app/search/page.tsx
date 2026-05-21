import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { searchSite } from "@/lib/search";

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params?.q?.trim() ?? "";
  const results = searchSite(query);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F7F8F4] px-4 pb-16 pt-36 sm:px-6 lg:pt-44">
        <section className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#275D38]">Search</p>
            <h1 className="mt-3 font-serif text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Search King Ceasor University
            </h1>
          </div>

          <form action="/search" className="mb-8 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/5 sm:flex-row">
            <label className="relative flex-1">
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                name="q"
                aria-label="Search website"
                defaultValue={query}
                placeholder="Search programmes, admissions, schools, library..."
                className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#275D38] focus:bg-white"
              />
            </label>
            <button className="h-12 rounded-lg bg-[#275D38] px-6 text-sm font-black text-white transition hover:bg-[#17351f]" type="submit">
              Search
            </button>
          </form>

          {query ? (
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-600">
                {results.length} result{results.length === 1 ? "" : "s"} for <span className="font-black text-slate-950">&quot;{query}&quot;</span>
              </p>
            </div>
          ) : (
            <p className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-600 shadow-lg shadow-slate-900/5">
              Enter a word or phrase to search pages, programmes, schools, admissions information and news.
            </p>
          )}

          {query && results.length === 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5">
              <h2 className="text-lg font-black text-slate-950">No results found</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Try a shorter search term such as admissions, fees, medicine, library, tourism or programmes.</p>
            </div>
          )}

          <div className="grid gap-3">
            {results.map((result) => (
              <Link
                key={`${result.href}-${result.title}`}
                href={result.href}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-[#FECB00] hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-[#FECB00]/25 px-3 py-1 text-xs font-black text-[#275D38]">{result.category}</span>
                    <h2 className="mt-3 text-lg font-black leading-tight text-slate-950 sm:text-xl">{result.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{result.description}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-[#275D38]">
                    Open <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
