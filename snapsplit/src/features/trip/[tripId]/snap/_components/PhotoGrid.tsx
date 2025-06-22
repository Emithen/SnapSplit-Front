import Image from 'next/image';
import { UploadedImage } from '../type';

interface PhotoGridProps {
  images: UploadedImage[];
}

export default function PhotoGrid({ images }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-3 gap-2 flex-1 overflow-y-auto">
      {images.length > 0 ? (
        images.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            alt="uploaded"
            width={100}
            height={100}
            className="aspect-square rounded-md border border-grey-250"
            />
        ))
      ) : (
        <>
          {/* TODO: 빈 이미지 추가 */}
          {Array.from({ length: 15 }).map((_, idx) => (
            <div key={idx} className="aspect-square bg-grey-250 rounded-md border border-grey-250" />
          ))}
        </>
      )}
    </div>
  );
}
