import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { themeChange } from 'theme-change'


const Profile = () => {
    const auth = getAuth();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      themeChange(false)
    }, [])

    const onLoggout = () => {
      auth.signOut();
      navigate("/");
    };

  return (
    <div className="flex w-full px-6 sm:px-6 pt-4 justify-center">
        <div className="w-full sm:w-3/4 lg:w-1/2">
            <h1 className="font-title text-4xl mt-10 mb-2">Welcome {auth.currentUser.displayName}!</h1>
            <button className="btn btn-xs btn-error mb-10" onClick={onLoggout}>Loggout</button>

            <label className="label">
              <span className="label-text">Pick a theme</span>
            </label>
            <select data-choose-theme className="select w-full max-w-xs">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="cupcake">Cupcake</option>
              <option value="emerald">Emerald</option>
              <option value="forest">Forest</option>
              <option value="garden">Garden</option>
              <option value="retro">Retro</option>
            </select>

        </div>
        
    </div>
  )
}

export default Profile