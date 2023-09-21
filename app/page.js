"use client"
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Login from "./login/page";
import ImageGallery from "./components/ImageGallery";

function page() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="pt-10 text-white">
        <Login />
      </div>
    </DndProvider>
  );
}

export default page;
