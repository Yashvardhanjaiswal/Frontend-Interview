import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import CreateBlogForm from "./components/CreateBlogForm";
import Footer from "./components/Footer";

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#020617] px-6 py-4">
        <h1 className="text-xl font-semibold tracking-wide text-[#22d3ee]">CA Monk Blog Portal</h1>
      </header>

      <main className="flex-1 mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 md:grid-cols-3">
        {/* LEFT PANEL */}
        <aside className="md:col-span-1 space-y-6 rounded-xl bg-[#020617] p-4 shadow-lg">
          <CreateBlogForm />
          <div className="space-y-4">
            <BlogList onSelect={setSelectedId} />
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <section className="md:col-span-2 rounded-xl bg-[#0f172a] p-6 border border-slate-800 shadow-lg">
          <BlogDetails blogId={selectedId} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
