import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const handleLiClick=(id)=>{
    var elems = document.getElementsByClassName("active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
  });
  document.getElementById(id).classList.add("active")
  }
  return (
    <li
      className={
        items.title === "Hire Dedicated Developer"
          ? `menu-items mega__menu__wrapper`
          : `menu-items`
      }
      id={items.title}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={()=>handleLiClick(items.title)}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {depthLevel > 0 ? "" : <BiChevronDown className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={items.path}>
          <a
            dangerouslySetInnerHTML={{
              __html: items.title,
            }}
          ></a>
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
