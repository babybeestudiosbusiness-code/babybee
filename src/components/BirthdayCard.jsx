export default function BirthdayCard({ person }) {
  if (!person) return null;

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow">
      <img src={person.img} className="w-16 h-16 mx-auto rounded-lg mb-2" />
      <p className="text-sm">🎉 Happy Birthday</p>
      <h4>{person.name}</h4>
    </div>
  );
}