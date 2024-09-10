import { IPost } from "@Interfaces/";
import { useEffect, useState } from "react";

const imageUrls = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6rPLgWsuGwh6BT3alBGJ-7fBsH1eHz7b5w&usqp=CAU",
  "https://w0.peakpx.com/wallpaper/520/950/HD-wallpaper-cube-dark-amoled-creative.jpg",
];

export const getPosts = () => {
  const [posts, setPosts] = useState<IPost[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((val) => val.json())
        .then((data) => {
          setPosts(
            data.map((post: any, index: any) => ({
              postId: post.id,
              userId: post.userId,
              userName: "user" + post.userId,
              imageUrl: imageUrls[index % 3],
              caption: post.body,
              postDate: Math.random() < 0.5 ? new Date() : new Date(1704648303139),
              likes: Math.random() * 100,
              location: "Udaipur",
            }))
          );
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, [])
  
  return { posts, isLoading };
};