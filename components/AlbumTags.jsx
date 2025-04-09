export default function AlbumTags({ tags }) {
  if (!tags || !Array.isArray(tags)) return null;
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="bg-white/10 text-sm text-white px-3 py-1 rounded-full border border-white/20"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
