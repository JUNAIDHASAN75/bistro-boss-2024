import loginImg from '../../assets/others/authentication2.png';
import bgImg from '../../assets/others/authentication.png';
import { Link } from 'react-router-dom';


const Login = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target;
        console.log(form)
        const email = form.email.value;
        console.log(email)
        const password = form.password.value;
        const user = {email,password}
        console.log(user)
    }
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="hero-content flex-col lg:flex-row shadow-2xl  " style={{backgroundImage: `url(${bgImg})`}}>
                <div className="w-full text-center lg:text-left">
                   <img src={loginImg} alt="" />
                </div>
                <div className="w-full p-12 ">
                    <h1 className="text-3xl font-semibold text-center text-black">Login</h1>
                    <form onSubmit={handleSubmit} className="">

                        <div className="form-control text-black">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered bg-white text-black" required />
                        </div>
                        <div className="form-control text-black">
                            <label className="label">
                                <span className="">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered bg-white text-black" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className=" text-center bg-[#D1A054] text-[white] font-semibold  rounded-md  hover:bg-[#0e0d0d] hover:border-[#BB8506] hover:text-[] transition-all px-3 py-2 mt-2" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-[#D1A054] text-center mt-2'>
                    <span>New Here? </span>
                    <Link to="/signup" className='font-semibold'>Create a New Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;