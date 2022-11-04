import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import { FaEye, FaEyeSlash, FaAt, FaKey, FaIdBadge } from "react-icons/fa"


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    })
    const { email, password, name } = formData

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            // create user in firebase authentication
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredentials.user

            updateProfile(auth.currentUser, {
                displayName: name,
            })

            // add user to firestore database
            const formDataCopy = {
                name: formData.name,
                email: formData.email,
                timestamp: serverTimestamp()
            }

            await setDoc(doc(db, 'users', user.uid), formDataCopy)
            toast.success('Succesfully registered user!')
            navigate('/profile')
            
        } catch (error) {
            toast.error('Wrong went wrong with registration')
        }
    }

    return (
        <div className="flex w-full px-6 sm:px-6 pt-4 justify-center">
            <div className="w-full sm:w-3/4 lg:w-1/2">
                <h1 className="font-title text-4xl my-10">Welcome!</h1>

                <form className="w-full flex flex-col items-center gap-8" onSubmit={onSubmit}>
                    <div className="form-control w-full relative">
                        <FaIdBadge className="absolute top-1/2 left-6 -translate-y-1/2" />
                        <input type="text" placeholder="Name" className="input input-bordered w-full pl-14" id="name" onChange={handleChange} value={name} />
                    </div>
                    <div className="form-control w-full relative">
                        <FaAt className="absolute top-1/2 left-6 -translate-y-1/2" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full pl-14" id="email" onChange={handleChange} value={email} />
                    </div>
                    <div className="form-control w-full relative">
                        <FaKey className="absolute top-1/2 left-6 -translate-y-1/2" />
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered w-full pl-14" id="password" onChange={handleChange} value={password} />
                        <div className="absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</div>
                    </div>
                    
                    <button className="btn btn-primary w-1/2" type="submit">Sign Up</button>

                </form>

                {/* todo: add OAuth with google */}

                <div className="mt-10 pl-12 flex flex-row gap-4 items-center">
                    <h3>Already registered?</h3>
                    <Link to='/sign-in'><button className="btn btn-xs btn-primary">Sign In</button></Link>
                </div>

            </div>
        </div>
    )
}

export default SignIn