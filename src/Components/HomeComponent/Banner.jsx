import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/YpbpCVC/shop.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome To Niyenin</h1>
            <p className="mb-5">A online shop. </p>
            <Link
          to="/shop"
          className="btn bg-pink-600 text-white hover:text-black"
        >
          Continue shopping
        </Link>          </div>
        </div>
      </div>
    );
};

export default Banner;