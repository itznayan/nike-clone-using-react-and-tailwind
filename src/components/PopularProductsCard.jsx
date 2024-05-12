import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 group flex-col w-full max-sm:w-full hover:shadow-sm hover:scale-105 border-gray-500 duration-500 p-4">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] hover:drop-shadow-md"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" />
        <p className="font-montserrat text-xl leading-normal  text-slate-gray">
          4.5
        </p>
      </div>
      <h3 className="mt-2 text-2xl group-hover:tracking-[1px] duration-300 leading-normal group-hover:font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-coral-red text-2xl leading-normal ">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
