import { IPost } from "@Interfaces";
import Post from "./Post";

interface Props {
  postList: IPost[];
}

const PostList = ({ postList }: Props) => {
  return (
    <div className="post-list h-100">
      {postList && postList.length > 0 ? (
        <>
          {postList.map((post) => (
            <div className="post-list-item" key={post.postId}>
              <Post data={post} />
            </div>
          ))}
        </>
      ) : (
        <div>No Post Available</div>
      )}
    </div>
  );
};

export default PostList;
