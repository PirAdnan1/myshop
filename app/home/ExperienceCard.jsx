import React from "react";
import Image from "next/image";

// container
import Container from "../components/Container";
// assest
import HeroImage from "<@>/app/assets/banner.png";

// components
import CircleTime from "./CircleTime";

function ExperienceCard() {
  return (
    <div className="bg-black pb-12 md:pb-0">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-0 justify-between md:px-8">
          <div className="order-2 md:order-1">
            <span className="text-green-600 font-bold">Categories</span>
            <h1 className="text-xl lg:text-6xl font-semibold text-white mt-4">
              Enhance Your Shirt Experience
            </h1>
            <div className="flex items-center gap-2 mt-7">
              <CircleTime hours={"24"} title={"hours"} />
              <CircleTime hours={"05"} title={"days"} />
              <CircleTime hours={"59"} title={"Minuts"} />
              <CircleTime hours={"35"} title={"Seconds"} />
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md mt-5">
              Buy Now
            </button>
          </div>

          <Image src={HeroImage} alt="..." className="order-1 md:order-2" />
        </div>
      </Container>
    </div>
  );
}

export default ExperienceCard;
