import { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from 'theme-change'


import logo from "../assets/images/chef.png";
import { TbColorSwatch } from "react-icons/tb"

const Navbar = () => {
  useEffect(() => {
    themeChange(false)
  }, [])
  
  return (
    <>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl font-condensed font-[900]">
          <img
            src={logo}
            alt="App Logo"
            style={{
              height: "30px",
              marginRight: "15px",
            }}
          ></img>
          A&M<span className="text-primary uppercase">Recipes</span>
        </Link>
      </div>
      <div className="flex-none gap-0 sm:gap-4 hidden sm:block">
        <Link to="/add-new" className="btn btn-ghost text-xl font-condensed normal-case">
          Add New
        </Link>
        {/* Conditional: if auth then profile, else sign in */}
        <Link to="/profile" className="btn btn-ghost text-xl font-condensed normal-case">
          Profile
        </Link>
        {/* <button className="btn btn-ghost text-xl" data-toggle-theme="dark,light">
          <TbColorSwatch />
        </button> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost m-1 text-xl"><TbColorSwatch /></label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52 gap-2">
            <button className="btn btn-sm text-xl bg-stone-900 hover:bg-stone-700 border-none text-purple-600 hover:text-purple-400" data-set-theme="dark" data-act-class="ACTIVECLASS">Dark</button>
            <button className="btn btn-sm text-xl bg-stone-100 hover:bg-stone-200 border-none text-purple-800" data-set-theme="light" data-act-class="ACTIVECLASS">Light</button>
            <button className="btn btn-sm text-xl bg-stone-100 hover:bg-stone-200 border-none text-emerald-300 hover:text-emerald-400" data-set-theme="emerald" data-act-class="ACTIVECLASS">Emerald</button>
            <button className="btn btn-sm text-xl bg-stone-900 hover:bg-stone-700 border-none text-green-500" data-set-theme="forest" data-act-class="ACTIVECLASS">Forest</button>
          </ul>
        </div>
      </div>


      
    </div>
    </>
  );
};

export default Navbar;
