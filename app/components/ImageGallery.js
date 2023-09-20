"use client";
import { useEffect, useState } from "react";
import ImageItem from "./ImageItem";
import axios from "axios";
import Loader from "./Loader";
import SearchImage from "./SearchImage";
import DraggableImageContainer from "./DraggableImageContainer";

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
  // console.log("search query in gallery: ", searchString);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newImages = [...images];
    const [reorderedImage] = newImages.splice(result.source.index, 1);
    newImages.splice(result.destination.index, 0, reorderedImage);
    setImages(newImages);
  };

  return (
    <div className="container mx-auto">
      <SearchImage setSearchString={setSearchString} />
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
        <div className="container pt-10 pb-20 mx-auto">
          {/* <div className="grid items-center justify-center w-full gap-20 px-6 md:px-0 lg:grid-cols-4 md:grid-cols-2 place-content-center">
            {searchResults.length > 0 ? (
              searchResults.map((image, index) => (
                <ImageItem key={image.id} image={image} />
              ))
            ) : images.length > 0 ? (
              images.map((image, index) => (
                <ImageItem key={image.id} image={image} />
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div> */}
          <DraggableImageContainer images={searchString ? searchResults : images} onDragEnd={onDragEnd}/>
        </div>
      )}
    </div>
  );
}
