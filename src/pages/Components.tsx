import { Link } from "react-router-dom";
import {
  Search,
  LayoutGrid
} from "lucide-react";

import BorderdButton from "../components/Button/BorderdButton"
import Button from "../components/Button/Button"
import DownloadButton from "../components/Button/DownloadButton"
import BrowsersCard from "../components/Card/BrowsersCard"


const categories = [
  {
    title: "Getting Started",
    items: [
      {
        name: "Introduction",
        href: "/docs",
      },
      {
        name: "Installation",
        href: "/docs",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        name: "Buttons",
        href: "#buttons",
      },
      {
        name: "Cards",
        href: "#cards",
      },
      {
        name: "Inputs",
        href: "#inputs",
      },
      {
        name: "Badges",
        href: "#badges",
      },
    ],
  },
];

const Components = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar */}

        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-neutral-800 bg-neutral-950 lg:block">
          <div className="p-6">

            <Link
              to="/"
              className="mb-8 flex items-center text-xl font-semibold"
            >
              <span className="text-indigo-500">Nexora</span>.ui
            </Link>

            {categories.map((section) => (
              <div key={section.title} className="mb-8">
                <p className="mb-3 text-xs uppercase tracking-widest text-neutral-500">
                  {section.title}
                </p>

                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center rounded-lg px-3 py-2 text-sm text-neutral-400 transition hover:bg-neutral-900 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}

        <main className="flex-1">

          {/* Hero */}

          <section className="border-b border-neutral-800 px-8 py-12">
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400">
              Components
            </span>

            <h1 className="mt-5 text-5xl font-bold">
              Build beautiful interfaces faster.
            </h1>

            <p className="mt-4 max-w-2xl text-neutral-400">
              Beautifully designed, production-ready React components built with
              Motion, Tailwind CSS, and TypeScript.
            </p>

            {/* Search */}

            <div className="relative mt-8 max-w-lg">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />

              <input
                placeholder="Search components..."
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900 py-3 pl-12 pr-4 outline-none transition focus:border-indigo-500"
              />
            </div>
          </section>

          {/* Components */}

          <section className="px-8 py-10">

            <div
              id="buttons"
              className="mb-10 flex items-center gap-3"
            >
              <LayoutGrid className="text-indigo-400" />
              <h2 className="text-2xl font-semibold">Browse Components</h2>
            </div>

              <div
              className="p-5 flex items-center flex-wrap gap-20 "
            >
              <BorderdButton title="Subscribe"
              />
              <Button />
              <DownloadButton />
              <BrowsersCard />
            </div>
            
          </section>
        </main>
      </div>
    </div>
  );
};

export default Components