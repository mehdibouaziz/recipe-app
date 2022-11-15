import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { themeChange } from "theme-change";

import { TbColorSwatch } from "react-icons/tb";

const Profile = () => {
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  const onLoggout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full sm:w-3/4 px-6 sm:px-6 pt-4 items-start">
        <div className="w-full">
          <h1 className="font-title text-4xl mt-10 mb-2">
            Welcome {auth.currentUser.displayName}!
          </h1>
          <button className="btn btn-xs btn-error mb-10" onClick={onLoggout}>
            Loggout
          </button>
        </div>
        <div className="dropdown w-full">
          <label tabIndex={0} className="btn btn-outline m-1 text-xl gap-2 shadow-sm">
            <TbColorSwatch />
            <p>PICK A THEME</p>
          </label>
          <div className="dropdown-content menu p-2 shadow bg-base-300 rounded-xl gap-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {themes.map((theme, index) => {
                return (
                  <button
                    className="btn btn-sm text-sm border-none bg-base-100 text-base-content hover:bg-base-300 px-2 w-52"
                    data-set-theme={theme}
                    data-act-class="ACTIVECLASS"
                    data-theme={theme}
                    key={index}
                  >
                    <div className="flex flex-row items-start">
                      <span className="rounded bg-primary px-1 text-primary-content mr-1">
                        {"A"}
                      </span>
                      <span className="rounded bg-secondary px-1 text-secondary-content mr-1">
                        {"A"}
                      </span>
                      <span className="rounded bg-accent px-1 text-accent-content mr-1">
                        {"A"}
                      </span>
                    </div>
                    <p className="flex-1 text-base">{theme.toUpperCase()}</p>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
