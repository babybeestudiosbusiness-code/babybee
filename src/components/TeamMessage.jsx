export default function TeamMessage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="p-6 rounded-2xl backdrop-blur-xl bg-[var(--color-glass)] border border-[var(--color-border)]">
          <h3 className="mb-3">টিমের পক্ষ থেকে</h3>
          <p className="text-gray-400">
            আমরা প্রতিটি গল্পকে ভিজ্যুয়ালের মাধ্যমে জীবন্ত করতে চাই।
          </p>
        </div>

        <div className="h-[300px] rounded-2xl bg-white/5 border border-[var(--color-border)]"></div>

      </div>
    </section>
  );
}