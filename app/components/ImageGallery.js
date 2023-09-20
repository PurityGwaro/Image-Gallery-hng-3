"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import SearchImage from "./SearchImage";
import DraggableImageContainer from "./DraggableImageContainer";
import Link from "next/link";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erroMessage, setErrorMessage] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let url = `https://api.pexels.com/v1/curated?per_page=12`;

        const response = await axios.get(
          url,
          {
            headers: {
              Authorization:
                "QqYnJggmS8c9EK3NN81Y2gQS07Fsk2QdKQGYwfckD2cHRLkl4i6CTqyI",
            },
          }
        );
        setErrorMessage(false);
        setImages(response.data.photos);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching Images: ", error);
        setLoading(false);
        setErrorMessage(true);
      }
    };
    fetchImages();

    const searchImages = async (queryString) => {
      try {
        let url = `https://api.pexels.com/v1/search?query=${queryString}&per_page=12`;

        const response = await axios.get(
          url,
          {
            headers: {
              Authorization:
                "QqYnJggmS8c9EK3NN81Y2gQS07Fsk2QdKQGYwfckD2cHRLkl4i6CTqyI",
            },
          }
        );
        setErrorMessage(false);
        setSearchResults(response.data.photos);
        setLoading(false);
        // console.log('search results response', response.data.photos)
      } catch (error) {
        console.log("Error fetching Images: ", error);
        setLoading(false);
        setErrorMessage(true);
      }
    }
    if (searchString) {
      setLoading(true)
      searchImages(searchString);
    }
  }, [searchString]);

  
  const onImageMove = (sourceIndex, targetIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(sourceIndex, 1);
    updatedImages.splice(targetIndex, 0, movedImage);
    setImages(updatedImages);
  };


  return (
    <div className="container mx-auto">
      <SearchImage setSearchString={setSearchString} />
      {/* <Link href='/' className="px-4 py-2 font-bold bg-orange-600 rounded-xl">BACK</Link> */}
      {erroMessage && (
        <div className="grid items-center justify-center place-content-center">
          <p className="items-center px-4 mt-20 text-xl text-red-600 text-semibold place-content-center">
            There was an error loading the images. Kindly check your network
            connection.
          </p>
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
          <DraggableImageContainer 
          images={searchString ? searchResults : images} 
          onImageMove={onImageMove}
          />
      )}
    </div>
  );
}
