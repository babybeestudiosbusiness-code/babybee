import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";

export default function BlogSection() {
  return (
    <section id="blog" className="py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16">ব্লগ</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <div key={b.id} className="bg-white rounded-2xl shadow overflow-hidden">
              
              <Link to={`/blog/${b.id}`}>
                <img src={b.image} className="w-full h-40 object-cover" />
              </Link>

              <div className="p-4">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-slate-500">{b.desc}</p>

                <Link to={`/blog/${b.id}`} className="text-orange-500 text-sm">
                  পড়ুন →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}