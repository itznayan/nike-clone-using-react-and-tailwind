import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize lg:max-w-lg text-4xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          We Provide You
          <span className=" text-coral-red "> Super </span>
          <span className=" text-coral-red ">Quality </span>
          &nbsp;Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience the epitome of luxury with our premium shoes collection.
          Crafted with meticulous attention to detail and using only the finest
          materials, each pair embodies sophistication, comfort, and style.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our Dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
