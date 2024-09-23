import { TransformOptions } from "@supabase/storage-js/src/lib/types.ts";
import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui-library/skeleton.tsx";
import { BUCKET } from "@/constants";
import { supabase } from "@/lib/supabase.ts";

type ImageProps = {
  imagePath: string;
  transformOptions?: TransformOptions;
  className?: string;
};

export const BucketImage = ({
  className,
  imagePath,
  transformOptions,
}: ImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data } = await supabase.storage
          .from(BUCKET.IMAGES)
          .createSignedUrl(imagePath, 60, { transform: transformOptions });
        setImageUrl(data?.signedUrl ?? null);
      } catch (error) {
        console.error("Failed to fetch image:", error);
      }
    };

    fetchImage();
  }, [imagePath, transformOptions]);

  if (!imageUrl) {
    return <Skeleton className="h-full w-full" />;
  }

  return (
    <img
      alt="image"
      className={className}
      height={transformOptions?.height}
      src={imageUrl}
      width={transformOptions?.width}
    />
  );
};
