import RefreshIcon from '@mui/icons-material/Refresh';

import PostList from "./post/PostList";
import { getPosts } from "../../../services/userService";

const Home = () => {
  const { posts: postList, isLoading } = getPosts();
  return (
    <>
      {
        isLoading ? <div style={{display: "flex", justifyContent: "center"}}><RefreshIcon className='home-loader' /></div> : <PostList postList={postList} />
      }
    </>
  );
};

export default Home;
