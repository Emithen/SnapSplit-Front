import Image from "next/image";

export default function FolderThumbnailPreview() {
    return (
      <div className="grid grid-cols-2 gap-2 bg-white rounded-lg p-3">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="bg-grey-50 rounded-md aspect-square"
          >
            <Image src="/svg/photo-loading.svg" alt="loading" width={100} height={100} className="object-cover" />
          </div>
        ))}
      </div>
    );
}
  