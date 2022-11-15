import { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from 'theme-change'


import logo from "../assets/images/chef.png";
import { TbColorSwatch } from "react-icons/tb"

const Navbar = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  const themes = ["emerald", 'dark']
  
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
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-64 gap-2">
            {themes.map((theme, index) => {
              return <button className="btn btn-sm text-xl border-none bg-base-100 text-base-content hover:bg-base-300 px-4" data-set-theme={theme} data-act-class="ACTIVECLASS" data-theme={theme} key={index}>
                <div className="flex flex-row items-start">
                  <span className="rounded bg-primary text-sm px-1 text-primary-content mr-1">{'A'}</span>
                  <span className="rounded bg-secondary text-sm px-1 text-secondary-content mr-1">{'A'}</span>
                  <span className="rounded bg-accent text-sm px-1 text-accent-content mr-1">{'A'}</span>
                </div>
                <p className="flex-1">{theme.toUpperCase()}</p>
                </button>
            })}
            <Link to='/profile'><button className="btn btn-sm text-sm border-none w-full">More Themes in Profile</button></Link>
          </ul>
        </div>
      </div>


      
    </div>
    </>
  );
};

export default Navbar;
