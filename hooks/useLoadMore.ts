import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useLoadMore = () => {

  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const [page, setPage] = useState(0);

  const IMAGES_PER_PAGE = 2; // Number of images to load per page

  // Load a batch of images for the current page
  const loadMoreImages = async () => {
    const storedImages = await AsyncStorage.getItem('images');
    if (storedImages) {
      const imagesArray = JSON.parse(storedImages);
      const start = page * IMAGES_PER_PAGE;
      const end = start + IMAGES_PER_PAGE;

      // Get only the images needed for the current page
      const nextBatch = imagesArray.slice(start, end);
      setVisibleImages((prev) => [...prev, ...nextBatch]);

      // Increment page to load the next batch next time
      setPage(page + 1);
    }
  };

  // Initial load when the component mounts
  useEffect(() => {
    loadMoreImages();
  }, []);

  return { visibleImages, loadMoreImages };
}

export default useLoadMore;