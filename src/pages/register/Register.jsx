import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/Register-Animation.json'
import { useContext } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleSubmit = e=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-2/5">
                   <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>

                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;