
const CategoryCard = ({ category }) => {
  const { title, img } = category;
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-[280px] h-[300px]" src={img} alt={title} />
        </figure>
        <div className="card-body text-center">
          <div className="card-actions justify-center capitalize">
            {/* <Link to={`/products/categories/${title}`} className="btn btn-primary"> {title}</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
