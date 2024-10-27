import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero md:h-[404px]" >
                <div className="hero-overlay bg-black md:w-3/4 md:h-[50%] bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-serif font-thin uppercase text-white">{title}</h1>
                        <p className="mb-5 font-thin font- uppercase text-white">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};
export default Cover;