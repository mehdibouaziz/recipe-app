import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import { FaEye, FaEyeSlash, FaUser, FaKey } from "react-icons/fa"


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData

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
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            if(userCredentials.user){
                navigate('/')
            }
        } catch (error) {
            toast.error('Wrong user credentials')
        }
    }

    return (
        <div className="flex w-full px-6 sm:px-6 pt-4 justify-center">
            <div className="w-full sm:w-3/4 lg:w-1/2">
                <h1 className="font-title text-4xl my-10">Welcome back!</h1>

                <form className="w-full flex flex-col items-center gap-8" onSubmit={onSubmit}>
                    <div className="form-control w-full relative">
                        <FaUser className="absolute top-1/2 left-6 -translate-y-1/2" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full pl-14" id="email" onChange={handleChange} value={email} />
                    </div>
                    <div className="form-control w-full relative">
                        <FaKey className="absolute top-1/2 left-6 -translate-y-1/2" />
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered w-full pl-14" id="password" onChange={handleChange} value={password} />
                        <div className="absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</div>
                    </div>
                    <Link to='/reset-password' className="self-end hidden"><p>
                        Forgot Password?
                    </p></Link>
                    <button className="btn btn-primary w-1/2" type="submit">Sign In</button>

                </form>

                {/* todo: add OAuth with google */}

                <div className="mt-10 pl-12 flex flex-row gap-4 items-center">
                    <h3>New User?</h3>
                    <Link to='/sign-up'><button className="btn btn-xs btn-primary">Sign Up</button></Link>
                </div>

            </div>
        </div>
    )
}

export default SignIn