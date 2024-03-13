import loginImg from '../../../assets/others/authentication2.png';
import bgImg from '../../../assets/others/authentication.png';
import { Link } from 'react-router-dom';
import { RiFacebookLine, RiGoogleLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';



const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user) 
            updateUserProfile(name, photoURL)
            .then(() =>{
                console.log('profile is updated')
            })
        })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl  " style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="w-full text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="w-full p-12 ">
                    <h1 className="text-3xl font-semibold text-center text-black">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="">

                        <div className="form-control text-black">
                            <label className="label">
                                <span className="">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered bg-white text-black" required />
                        </div>
                        <div className="form-control text-black">
                            <label className="label">
                                <span className="">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered bg-white text-black" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <input className=" text-center bg-[#D1A054] text-[white] font-semibold  rounded-md  hover:bg-[#0e0d0d] hover:border-[#BB8506] hover:text-[] transition-all px-3 py-2 mt-2" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='text-[#D1A054] text-center mt-2'>
                        <span>Already registered? </span>
                        <Link to="/login" className='font-semibold'>Go to log in</Link>
                        <div className='mt-6'>
                            <p className='text-black'>Or sign up with</p>
                            <div className='flex justify-center gap-6 mt-8'>
                                <div className='tooltip ' data-tip="facebook">
                                    <RiFacebookLine className='text-3xl btn btn-circle btn-outline  border-2 text-black' />
                                </div>
                                <div className='tooltip' data-tip="google">
                                    <RiGoogleLine className='text-3xl btn btn-circle btn-outline border-2 text-black' />
                                </div>
                                <div className='tooltip' data-tip="github">
                                    <FaGithub className='text-3xl btn btn-circle btn-outline border-2 text-black' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;