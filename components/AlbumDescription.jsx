export default function AlbumDescription({ description }) {
  if (!description || !Array.isArray(description)) return null;
  return (
    <div className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
      {description.map((para, idx) => (
        <p key={idx} className="mb-4">
          {para}
        </p>
      ))}
    </div>
  );
}
