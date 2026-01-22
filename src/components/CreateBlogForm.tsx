import { useState } from "react";
import { useCreateBlog } from "../hooks/useCreateBlog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function CreateBlogForm() {
  const { mutate, isPending } = useCreateBlog();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({
      title,
      category: category.split(",").map((c) => c.trim()),
      description,
      coverImage,
      content,
      date: new Date().toISOString(),
    });

    // Reset form
    setTitle("");
    setCategory("");
    setDescription("");
    setCoverImage("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-800 bg-[#0f172a] p-5 shadow-md"
    >
      <h2 className="text-lg font-semibold text-sky-400">
        Create New Blog
      </h2>

      <Input
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <Input
        placeholder="Category (comma separated, e.g. TECH, FINANCE)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <Input
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
        required
      />

      <Textarea
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <Textarea
        placeholder="Full Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        required
      />

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Blog"}
      </Button>
    </form>
  );
}
