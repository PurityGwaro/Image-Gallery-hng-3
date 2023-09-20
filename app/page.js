"use client"
import React from "react";
import ImageGallery from "./components/ImageGallery";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Footer from "./components/Footer";

function page() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="pt-10 text-white">
        <ImageGallery />
      </div>
      {/* <Footer /> */}
    </DndProvider>
  );
}

export default page;
