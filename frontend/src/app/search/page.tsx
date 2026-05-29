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
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pb-20 lg:pt-44">
          <div className="absolute inset-0 bg-slate-50" />
          <div className="absolute right-0 top-0 hidden size-96 rounded-full bg-[#0B6232]/5 blur-3xl lg:block" />
          <div className="absolute -left-16 bottom-0 hidden size-80 rounded-full bg-[#FFC66B]/20 blur-3xl lg:block" />
          <section className="relative mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <p className="inline-flex rounded-full border border-[#0B6232]/10 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#0B6232] shadow-sm">Search</p>
              <h1 className="mt-4 font-serif text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Search King Ceasor University
              </h1>
            </div>

            <form action="/search" className="mb-8 flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl shadow-slate-900/10 sm:flex-row">
              <label className="relative flex-1">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                <input
                  name="q"
                  aria-label="Search website"
                  defaultValue={query}
                  placeholder="Search programmes, admissions, schools, library..."
                  className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B6232] focus:bg-white focus:ring-4 focus:ring-[#0B6232]/10"
                />
              </label>
              <button className="h-14 rounded-xl bg-[#0B6232] px-7 text-sm font-black text-white shadow-lg shadow-[#0B6232]/20 transition hover:bg-[#0B6232]" type="submit">
                Search
              </button>
            </form>

            {query ? (
              <div className="mb-5 flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-600">
                  {results.length} result{results.length === 1 ? "" : "s"} for <span className="font-black text-slate-950">&quot;{query}&quot;</span>
                </p>
              </div>
            ) : (
              <p className="rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold leading-6 text-slate-600 shadow-xl shadow-slate-900/5">
                Enter a word or phrase to search pages, programmes, schools, admissions information and news.
              </p>
            )}

            {query && results.length === 0 && (
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5">
                <h2 className="text-lg font-black text-slate-950">No results found</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">Try a shorter search term such as admissions, fees, medicine, library, tourism or programmes.</p>
              </div>
            )}

            <div className="grid gap-4">
              {results.map((result, index) => (
                <Link
                  key={`${result.href}-${result.title}`}
                  href={result.href}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-[#FFC66B] hover:shadow-2xl hover:shadow-slate-900/10"
                >
                  <div className="grid gap-4 p-5 sm:grid-cols-[64px_1fr_auto] sm:items-start sm:p-6">
                    <span className="grid size-14 place-items-center rounded-2xl bg-[#0B6232] text-sm font-black text-[#FFC66B] shadow-lg shadow-[#0B6232]/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="inline-flex rounded-full bg-[#FFC66B]/25 px-3 py-1 text-xs font-black text-[#0B6232]">{result.category}</span>
                      <h2 className="mt-3 text-lg font-black leading-tight text-slate-950 sm:text-xl">{result.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{result.description}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-[#0B6232]">
                      Open <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
