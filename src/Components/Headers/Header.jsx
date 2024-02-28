

const Header = ({subHeading, heading}) => {
    return (
        <div className="text-center my-3 w-2/4 mx-auto">
            <p className="text-[#D99904] text-[20px] italic">---{subHeading}---</p>
            <h2 className="text-[40px] text-black uppercase border-y-4 py-2 border-slate-300">{heading}</h2>
        </div>
    );
};

export default Header;