import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <div className="p-10">Not Found</div>;

  return (
    <section className="pt-28 px-6 max-w-3xl mx-auto">

      <img
        src={blog.image}
        className="w-full h-[300px] object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">
        {blog.title}
      </h1>

      <p className="text-slate-600">
        {blog.desc}
      </p>

    </section>
  );
}