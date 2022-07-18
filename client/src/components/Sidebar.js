import React from "react";
import { slide as Menu } from "react-burger-menu";


// const toggleMenu = ({ isOpen }) => {
//   const menuWrap = document.querySelector(".bm-menu-wrap");
//   isOpen
//     ? menuWrap.setAttribute("aria-hidden", false)
//     : menuWrap.setAttribute("aria-hidden", true);
// };

const SideBar = () => {
    React.useEffect(() => {
        const menuWrap = document.querySelector(".bm-menu-wrap");
        if (menuWrap) {
          menuWrap.setAttribute("aria-hidden", true);
        }
      }, []);
  return (
    <Menu noOverlay >
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default SideBar;
