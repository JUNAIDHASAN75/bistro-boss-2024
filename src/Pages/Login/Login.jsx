import loginImg from '../../assets/others/authentication2.png';
import bgImg from '../../assets/others/authentication.png';
import { Link } from 'react-router-dom';
import { RiFacebookLine } from "react-icons/ri";
import { RiGoogleLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        console.log(form)
        const email = form.email.value;
        console.log(email)
        const password = form.password.value;
        const user = { email, password }
        console.log(user)
    }
    const handleValidate = () =>{
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
        
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-content flex-col lg:flex-row shadow-2xl  " style={{ backgroundImage: `url(${bgImg})` }}>
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
                        <div className="form-control text-black relative ">
                            <label className="label w-full">
                            <LoadCanvasTemplate className="w-full rounded-sm bg-transparent" />
                            </label>
                            <input type="text" ref={captchaRef}  name="captcha" placeholder="type the text above" className="input input-bordered bg-white text-black " required />
                            <button onClick={handleValidate} className="btn btn-xs btn-outline absolute end-2 bottom-3">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input  disabled={disabled} className=" btn text-center bg-[#D1A054] text-[white] font-semibold  rounded-md  hover:bg-[#0e0d0d] hover:border-[#BB8506] hover:text-[] transition-all px-3 py-2 mt-2" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-[#D1A054] text-center mt-2'>
                        <span>New Here? </span>
                        <Link to="/signup" className='font-semibold'>Create a New Account</Link>
                        <div className='mt-6'>
                        <p className='text-black'>Or sign in with</p>
                        <div className='flex justify-center gap-6 mt-8'>
                            <div  className='tooltip ' data-tip="facebook">
                            <RiFacebookLine className='text-3xl btn btn-circle btn-outline  border-2 text-black'/>
                            </div>
                            <div className='tooltip' data-tip="google">                               
                            <RiGoogleLine   className='text-3xl btn btn-circle btn-outline border-2 text-black' />
                            </div>
                            <div className='tooltip' data-tip="github">                               
                            <FaGithub    className='text-3xl btn btn-circle btn-outline border-2 text-black' />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;