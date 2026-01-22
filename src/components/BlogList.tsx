import BlogCard from "./BlogCard";
import { useBlogs } from "../hooks/useBlogs";

interface Props {
  onSelect: (id: number) => void;
}

export default function BlogList({ onSelect }: Props) {
  const { data, isLoading, error } = useBlogs();

  if (isLoading) return <p className="text-slate-400">Loading blogs...</p>;
  if (error) return <p className="text-red-400">Failed to load blogs</p>;

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onSelect={onSelect} />
      ))}
    </div>
  );
}
