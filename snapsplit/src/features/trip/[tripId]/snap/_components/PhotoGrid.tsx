import Image from 'next/image';
import { UploadedImage } from '../type';

type PhotoGridProps = {
  images: UploadedImage[];
};

export default function PhotoGrid({ images }: PhotoGridProps) {
  const totalPhotos = 30;

  return (
    <div className="grid grid-cols-3 gap-2 flex-1 pt-11 pb-15">
      {Array.from({ length: totalPhotos }).map((_, idx) => {
        const image = images[idx];
        return (
          <div key={idx} className="aspect-square rounded-md border border-grey-250">
            {image ? (
              <Image src={image.src} alt="uploaded" width={100} height={100} className="object-cover" />
            ) : (
              <Image src="/svg/photo-loading.svg" alt="loading" width={100} height={100} className="object-cover" />
            )}
          </div>
        );
      })}
    </div>
  );
}
