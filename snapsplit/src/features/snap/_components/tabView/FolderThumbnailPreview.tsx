export default function FolderThumbnailPreview() {
    return (
      <div className="grid grid-cols-2 gap-1 aspect-square bg-gray-100 rounded-lg p-1">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="bg-gray-300 rounded-md aspect-square w-full"
          />
        ))}
      </div>
    );
}
  