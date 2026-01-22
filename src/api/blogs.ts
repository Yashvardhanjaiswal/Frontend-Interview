export interface Blog {
  id?: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}

const BASE_URL = "http://localhost:3001/blogs";

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return response.json();
};

export const getBlogById = async (id: number): Promise<Blog> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }
  return response.json();
};

export const createBlog = async (blog: Blog): Promise<Blog> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  if (!response.ok) {
    throw new Error("Failed to create blog");
  }

  return response.json();
};
