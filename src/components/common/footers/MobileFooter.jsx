import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { debounceTwo } from "../../../utils/debounceTwo";

export default function MobileFooter() {
  const [scrollY, setScrollY] = useState(0);

  const [active, setActive] = useState(1);

  const [styleNav, setStyleNav] = useState({
    transform: "translateY(0)",
  });

  // const user = useSelector((state) => state.user);
  let scroll = window.addEventListener("scroll", () => {
    debounceTwo(
      () => {
        if (window.scrollY > scrollY) {
          setStyleNav({
            transform: "translateY(77px)",
          });
          setScrollY(window.scrollY - 1);
          // document.querySelector(".scroll-to-top").style.bottom = "16px";
        } else {
          setStyleNav({
            transform: "translateY(0)",
          });
          setScrollY(window.scrollY + 1);
          // document.querySelector(".scroll-to-top").style.bottom = "94px";
        }
      },
      "scrollWindow",
      10
    );
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <div className="mobile-footer" style={{ ...styleNav, transition: "0.3s" }}>
      <ul className="row">
        <Link to="/" onClick={() => setActive(1)} className="col-4">
          <li className={`${active === 1 ? "active" : ""}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                fill="#171717"
              />
            </svg>

            <span>Bosh sahifa</span>
          </li>
        </Link>
        <Link
          className="col-4"
          to="/kitob-olish"
          onClick={() => {
            setActive(2);
          }}
        >
          <li className={`${active === 2 ? "active" : ""}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z"
                fill="#171717"
              />
            </svg>

            <span>Kitob olish</span>
          </li>
        </Link>
        <Link
          // to={user.id ? `/profile` : `/login/check-user-phone`}
          to={`/hissa-qoshish`}
          className=" col-4"
          onClick={() => {
            setActive(3);
          }}
        >
          <li className={`${active === 3 ? "active" : ""}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                fill="#171717"
              />
            </svg>
            <span>Hissa qo'shish</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
