import { NavLink } from "react-router-dom";
import "./Navbar.css";

interface Props {
  navList: {
    name: string;
    path: string;
  }[],
  width: string
}

const Navbar = ({ navList, width }: Props) => {
  return (
    <div className="vertical-container h-100" style={{width: width}}>
      <div className="nav flex-column w-100">
        <div className="my-4 heading center-content nav-item">SocialFly</div>
        {navList.map((navItem) => {
          return (
            <div className="center-content nav-item" key={navItem.name}>
              <NavLink className="nav-link" to={navItem.path}>{navItem.name}</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
