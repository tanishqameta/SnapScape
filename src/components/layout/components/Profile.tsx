import { useContext } from "react";
import { userContext } from "../../../App";
import { emptyProfileImage } from "../../../constants";

const Profile = () => {
  const {userData} = useContext(userContext);

  return (
    <div className="profile-page">
      <div style={{width: "100%", borderBottom: "1px solid black"}}>
        <div className="profile-grid">
          <div className="profile-image">
            <img
              style={{width: "8rem"}}
              src={emptyProfileImage}
              alt="profile image"
            />
          </div>
          <div className="grid-data-row">
            <span>{userData.userName}</span>
            <span>
              <button>Edit</button>
            </span>
            <span>
              <button>Logout</button>
            </span>
          </div>
          <div className="grid-data-row">
            <span>{userData.posts.length} Posts</span>
            <span>{userData.connections.length} Connections</span>
          </div>
          <div className="grid-data-row">
            <div className="fullname">{userData.fullName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
