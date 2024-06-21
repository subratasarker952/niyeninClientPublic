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

