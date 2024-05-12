import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "./ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className=" flex flex-col justify-center w-full min-h-screen gap-10 p-2 xl:flex-row max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Winter Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="absolute max-lg:relative z-10 pr-10  xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red ">Nike </span>
          <br />
          Shoes
        </h1>
        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals,quality comfort, and innovation for you
          active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex items-start w-full gap-16 mt-20 justify-start-wrap">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative lg:mr-28 pr-96 flex justify-center  items-center xl:min-h-screen max-xl:py-40  rounded-xl bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImg}
          alt="Shoe"
          width={1000}
          height={500}
          className="relative max-lg:size-96 left-48 z-10 object-contain xl:left-40"
        />
        <div className="absolute flex justify-center items-center gap-3 sm:gap-4 bottom-[6%] right-[10%]  sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImage=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
