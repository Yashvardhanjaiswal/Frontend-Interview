import { useBlogById } from "../hooks/useBlogById";

interface Props {
  blogId: number | null;
}

export default function BlogDetails({ blogId }: Props) {
  const { data, isLoading } = useBlogById(blogId);

  if (!blogId)
    return <p className="text-slate-400">Select a blog to read</p>;

  if (isLoading) return <p className="text-slate-400">Loading...</p>;

  return (
  <div className="space-y-6">
    <img
      src={data?.coverImage}
      alt="cover"
      className="h-72 w-full rounded-xl object-cover border border-slate-800 shadow-md"
    />

    <h1 className="text-3xl font-bold tracking-tight text-slate-100">
  {data?.title}
</h1>

<div className="flex items-center gap-4 text-sm text-slate-400">
  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-400">
    {data?.category.join(", ")}
  </span>
  <span>{new Date(data!.date).toDateString()}</span>
</div>


    <p className="mt-6 border-l-2 border-[#22d3ee] pl-6 text-slate-300 leading-relaxed">{data?.description}</p>

    <div className="prose prose-invert max-w-none leading-relaxed">
      {data?.content}
    </div>
  </div>
);

}
