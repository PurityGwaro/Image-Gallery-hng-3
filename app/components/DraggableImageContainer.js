import React from "react";
import ImageItem from "./ImageItem";

function DraggableImageContainer({ images, onImageMove }) {

  return (
    <div className="container pt-10 pb-20 mx-auto">
      <ul className="grid items-center justify-center w-full h-full gap-20 px-6 md:px-0 lg:grid-cols-4 md:grid-cols-2 place-content-center">
        {images.map((image, index) => (
          <li
          key={image.id} 
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('imageIndex', index);
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const sourceIndex = e.dataTransfer.getData('imageIndex');
            onImageMove(sourceIndex, index);
          }}
          >
            <ImageItem image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DraggableImageContainer;
