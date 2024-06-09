import Banner from "../../Components/HomeComponent/Banner";
import ProductCategories from "../../Components/HomeComponent/CategorySection/ProductCategories";
import Service from "../../Components/HomeComponent/Service";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Service/>
      <ProductCategories/>
    </div>
  );
};

export default Home;

// <div className="flex gap-3 justify-evenly my-3 items-center text-xl">
//     <input type="checkbox" name="" id="" />
//     <div className="w-[150px] h-[150px] bg-black rounded-lg">

//         <img src="" alt="" />
//     </div>
//     <div>
//         <p className="text-2xl">Product Name</p>
//         <p>Brand Name</p>
//     </div>
//     <div >
//         <p>৳ 440</p>
//         <del>৳800 </del>
//         <div>
//             <button className="text-2xl"><GiSelfLove /></button>
//             <button className="text-2xl"><MdOutlineDeleteForever /> </button>
//         </div>
//     </div>
//     <div className="flex ">
//         <button className="text-5xl"><CiSquareMinus /></button>
//         <input type='text' maxLength={1} value={1} readOnly className="text-5xl w-8 outline-none" min="1" max="5" />
//         <button className="text-5xl"> <CiSquarePlus /></button>
//     </div>
//     <div>
//         <button className="text-red-500 btn btn-circle">X</button>
//     </div>

// </div>
