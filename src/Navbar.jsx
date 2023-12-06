import React from "react";
import { Link, Outlet } from "react-router-dom";
import hotel from "./hotel.jpg";
import res2 from "./res2.png";

const Navbar = () => {
  return (
    <section>
      <div className="conatiner">
        <img src={res2} alt={res2} height={"40px"} width={"70px"} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Orders">Orders</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <Outlet />
      </div>
      <div>
        <img src={hotel} alt={hotel} height={"100%"} width={"100%"} />
      </div>
    </section>
  );
};

export default Navbar;
