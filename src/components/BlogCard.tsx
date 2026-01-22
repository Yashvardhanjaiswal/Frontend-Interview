import { Card } from "./ui/card";

interface Props {
  blog: any;
  onSelect: (id: number) => void;
}

export default function BlogCard({ blog, onSelect }: Props) {
  return (
    <Card
      onClick={() => onSelect(blog.id)}
      className="group cursor-pointer rounded-xl border border-slate-800 bg-[#0f172a] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#22d3ee] hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-xs font-medium text-[#22d3ee]">
          {blog.category.join(", ")}
        </span>
        <span className="text-xs text-slate-400">
          {new Date(blog.date).toDateString()}
        </span>
      </div>

      <h3 className="text-base font-semibold text-slate-100 group-hover:text-[#22d3ee] transition">
        {blog.title}
      </h3>

      <p className="mt-1 text-sm text-slate-400 line-clamp-2">
        {blog.description}
      </p>
    </Card>
  );
}
