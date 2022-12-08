import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { themeChange } from "theme-change";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

import { TbColorSwatch } from "react-icons/tb";

const Profile = () => {
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const themes = [
    "emerald",
    "dark",
    "light",
    "night",
    "cupcake",
    "halloween",
    "bumblebee",
    "forest",
    "fantasy",
    "dracula",
    "autumn",
    "business",
    "winter",
    "lofi",
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {
    console.log(auth.currentUser.uid)
    const fetchRecipe = async () => {

      const docRef = doc(db, "admins", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setIsAdmin(true)
      }
    };
    fetchRecipe();
  }, [navigate, auth.currentUser]);

  const onLoggout = () => {
    auth.signOut();
    navigate("/");
  };

  const toggleTheme = () => {
    console.log(document.documentElement.getAttribute("data-theme"))
    if(document.documentElement.getAttribute("data-theme") === "dark"){
      document.documentElement.setAttribute("data-theme", "emerald")
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }

  return (
    <div className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full sm:w-3/4 px-6 sm:px-6 pt-4 items-start">
        <div className="w-full">
          <h1 className="font-title text-4xl mt-10 mb-2">
            Welcome {auth.currentUser.displayName}!
          </h1>
          <div className="flex flex-row gap-2">
            {isAdmin ? 
            <div className="badge badge-success badge-lg rounded-lg text-xs uppercase font-bold">
              Admin
            </div>
            :
            <></>
            }
            <button className="btn btn-xs btn-error mb-10" onClick={onLoggout}>
              Loggout
            </button>
          </div>
        </div>
        <button className="btn btn-outline sm:hidden m-1 text-base gap-2 shadow-sm" onClick={() => toggleTheme()}><TbColorSwatch />Toggle Dark/Light Theme</button>
        <div className="dropdown w-full hidden sm:inline-block">
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
