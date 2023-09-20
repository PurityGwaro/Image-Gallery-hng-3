import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ImageItem from "./ImageItem";

function DraggableImageContainer({ images, onDragEnd }) {
  console.log('images: ', images)
  return (
    <div className="container pt-10 pb-20 mx-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="imageGrid">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid items-center justify-center w-full h-full gap-20 px-6 md:px-0 lg:grid-cols-4 md:grid-cols-2 place-content-center"
            >
              {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ImageItem image={image} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DraggableImageContainer;
