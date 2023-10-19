import Image from "next/image";
import React from "react";

function ImageItem({ image }) {
  // console.log('image being received: ', image)
  return (
    <div className="grid grid-cols-1">
      <Image
      src={image.src.large2x}
      height={250}
      width={250}
      alt={image.alt}
      // style={{ aspectRatio: "1/1" }}
      className="h-auto border-2 shadow-xl md:w-[300px] rounded-2xl place-self-center"
    />
    <span className="mt-2 text-sm text-orange-500 place-self-center">{image.alt}</span>
    </div>
  );
}

export default ImageItem;
