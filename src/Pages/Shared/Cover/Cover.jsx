import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[404px]" >
                <div className="hero-overlay bg-black w-3/4 h-[50%] bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase text-white">{title}</h1>
                        <p className="mb-5 uppercase text-white">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;