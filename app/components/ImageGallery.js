import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import SearchImage from "./SearchImage";
import DraggableImageContainer from "./DraggableImageContainer";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let url = `https://api.pexels.com/v1/curated?per_page=20`;

        if (searchString) {
          url = `https://api.pexels.com/v1/search?query=${searchString}&per_page=12`;
        }

        const response = await axios.get(url, {
          headers: {
            Authorization: "QqYnJggmS8c9EK3NN81Y2gQS07Fsk2QdKQGYwfckD2cHRLkl4i6CTqyI",
          },
        });
        
        const responseWithAlt = response.data.photos.filter((image) => image.alt);
        setErrorMessage(false);
        if (searchString) {
          setSearchResults(responseWithAlt);
        } else {
          setImages(responseWithAlt);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Images: ", error);
        setLoading(false);
        setErrorMessage(true);
      }
    };

    fetchImages();
  }, [searchString]);

  const onImageMove = (sourceIndex, targetIndex) => {
    const updatedImages = [...(searchString ? searchResults : images)];
    const [movedImage] = updatedImages.splice(sourceIndex, 1);
    updatedImages.splice(targetIndex, 0, movedImage);

    if (searchString) {
      setSearchResults(updatedImages);
    } else {
      setImages(updatedImages);
    }
  };

  return (
    <div className="container mx-auto">
      <SearchImage setSearchString={setSearchString} />
      {errorMessage && (
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
