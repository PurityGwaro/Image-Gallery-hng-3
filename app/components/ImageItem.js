import Image from "next/image";
import React from "react";

function ImageItem({ image }) {
  // console.log('image being received: ', image)
  return (
    <Image
      src={image.src.large2x}
      height={150}
      width={150}
      alt={image.alt}
      className="h-auto border-2 shadow-xl md:w-[300px] rounded-2xl"
    />
  );
}

export default ImageItem;
