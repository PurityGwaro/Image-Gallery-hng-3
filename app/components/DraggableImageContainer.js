import React from "react";
import ImageItem from "./ImageItem";

function DraggableImageContainer({ images, onImageMove }) {
  const handleDragStart = (e, index) => {
    e?.dataTransfer?.setData("imageIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = e?.dataTransfer?.getData("imageIndex");
    onImageMove(sourceIndex, targetIndex);
  };

  return (
    <div className="container pt-10 pb-20 mx-auto">
      <ul
        className="grid items-center justify-center w-full h-full gap-20 px-6 md:px-0 lg:grid-cols-4 md:grid-cols-2 place-content-center"
        onTouchStart={(e) => {
          const touch = e.touches[0];
          const li = touch.target.closest("li");
          if (li) {
            const index = Array.from(li.parentNode.children).indexOf(li);
            handleDragStart(e, index);
          }
        }}
      >
        {images.map((image, index) => (
          <li
            key={image.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onTouchStart={(e) => handleDragStart(e, index)}
            onTouchMove={(e) => {
              e.preventDefault();
            }}
            onTouchEnd={(e) => handleDrop(e, index)}
          >
            <ImageItem image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DraggableImageContainer;
