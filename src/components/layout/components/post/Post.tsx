import "./Post.css";

import { IPost } from "@Interfaces";
import { emptyProfileImage } from "../../../../constants";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = ({ data }: { data: IPost }) => {
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <div className="profile-photo">
          <img
            className="profile-photo-post"
            src={data.imageUrl || emptyProfileImage}
          />
        </div>
        <div className="header-details">
          <div className="username">{data.creator.username}</div>
          <div style={{fontSize: "13px"}}>
            <span className="post-time">{getDifference(data.createdAt)}</span>
            {!!data.location && (
              <span className="place-tag"> @ {data.location}</span>
            )}
          </div>
        </div>
      </div>
      <div className="post-image-container">
        <img className="post-image" src={data.imageUrl} />
      </div>
      <div className="post-footer">
        <div className="action-button-bar">
          <span><FavoriteBorderIcon /></span>
          <span><TurnedInNotIcon /></span>
          {/* <span><SendOutlinedIcon /></span> */}
        </div>
        <div className="caption">
          <span className="username me-1">{data.creator.username}</span>
          {data.caption}
        </div>
      </div>
    </div>
  );
};

const getDifference = (date: Date): string => {
  const timeDifference = new Date().getTime() - date.getTime();
  let elapsedTime: string = "";

  if (timeDifference / (1000 * 60 * 60 * 24 * 7) > 1) {
    elapsedTime = (timeDifference / (1000 * 60 * 60 * 24 * 7)).toFixed(0) + "w";
  } else if (timeDifference / (1000 * 60 * 60 * 24) > 1) {
    elapsedTime = (timeDifference / (1000 * 60 * 60 * 24)).toFixed(0) + "d";
  } else if (timeDifference / (1000 * 60 * 60) > 1) {
    elapsedTime = (timeDifference / (1000 * 60 * 60)).toFixed(0) + "h";
  } else if (timeDifference / (1000 * 60) > 1) {
    elapsedTime = (timeDifference / (1000 * 60)).toFixed(0) + "m";
  }

  return elapsedTime ? elapsedTime + " ago" : "just now";
};

export default Post;
