export default function FolderThumbnailPreview() {
    return (
      <div className="grid grid-cols-2 gap-2 bg-grey-150 rounded-lg p-3">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="bg-grey-50 rounded-md w-15.5 h-15.5"
          />
        ))}
      </div>
    );
}
  