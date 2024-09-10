import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const RootLayout = () => {
  const navList = [
    {name: "home", path: "home"},
    {name: "create", path: "create"},
    {name: "reels", path: "reels"},
    {name: "profile", path: "profile"},
  ];

  return (
    <div className="w-100 h-100" style={{display: "flex"}}>
      <Navbar navList={navList} width="15rem" />
      <div className="w-100 root-content">
        <Outlet />
      </div>
    </div>
  );

};

export default RootLayout;
