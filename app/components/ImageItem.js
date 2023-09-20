import Image from "next/image";
import React from "react";

function ImageItem({ image }) {
  // console.log('image being received: ', image)
  return (
    <div>
      <Image
      src={image.src.large2x}
      height={250}
      width={250}
      alt={image.alt}
      className="h-auto border-2 shadow-xl md:w-[300px] rounded-2xl"
    />
    <span>#{image.photographer}</span>
    </div>
  );
}

export default ImageItem;
