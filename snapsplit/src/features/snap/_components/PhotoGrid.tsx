import Image from 'next/image';

type UploadedImage = {
  id: string;
  src: string;
  tags: {
    days: number[];
    people: string[];
    locations: string[];
  };
};

interface PhotoGridProps {
  images: UploadedImage[];
}

export default function PhotoGrid({ images }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-3 gap-2 px-2 flex-1 overflow-y-auto">
      {images.length > 0 ? (
        images.map((img) => (
          <div
            key={img.id}
            className="relative w-full aspect-square rounded-md overflow-hidden border border-gray-300 shadow-sm"
          >
            <Image
              src={img.src}
              alt="uploaded"
              fill
              className="object-cover"
            />
          </div>
        ))
      ) : (
        Array.from({ length: 15 }).map((_, idx) => (
          <div key={idx} className="w-full aspect-square bg-gray-200 rounded-md border border-gray-200" />
        ))
      )}
    </div>
  );
}
