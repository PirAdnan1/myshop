import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// container
import Container from "../components/Container";

// icons
import Star from "../assets/icons/Star";

// assest
import ShirtOne from "<@>/app/assets/shirtOne.jpg";
import ShirtTwo from "<@>/app/assets/shirtTwo.jpg";
import ShirtThree from "<@>/app/assets/shirtThree.jpg";
import ShirtFour from "<@>/app/assets/shirtFour.jpeg";

// component
import RedIcon from "../components/RedIcon";

function BestSelling() {
  return (
    <Container>
        <div className="flex justify-between items-center md:mx-0 mx-4">
        <RedIcon name={"Best Selling Product"} />
        <Link className="bg-red-700 text-white md:px-6 px-4 py-2 md:py-2 rounded-md" href={"/"}>View All</Link>
      </div>
     
      <div className="my-16">
        <Swiper
          modules={[ Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={1} // Optional: Space between slides
          slidesPerView={3} // Show 3 slides at a time
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides for screens >= 640px (mobile)
            },
            1024: {
              slidesPerView: 3, // 3 slides for screens >= 1024px
            },
          }}
          style={{ paddingBottom: '3rem', margin: "1rem", justifyContent: "center", justifyItems: "center" }}
        >
          <div className="flex justify-center">
            <SwiperSlide className="ml-8">
              <Image
                src={ShirtTwo}
                width={300}
                height={300}
                alt="..."
                className="w-[100px] h-[100px] md:h-[300px] md:w-[300px] object-cover"
              />
              <p>{`${"MEN BLACK DRESS SHIRT IN COTTON STUFF".slice(
                0,
                10
              )}...`}</p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$110</p>
                <p className="text-gray-600">$80</p>
              </div>
              <div className="flex items-center gap-0.5">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ShirtThree}
                width={300}
                height={300}
                alt="..."
                className="w-[100px] h-[100px] md:h-[300px] md:w-[300px] object-cover"
              />
              <p>
                {`${"Mens Solid Color Casual Shirt long sleeves with under white shirt".slice(
                  0,
                  10
                )}...`}
              </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$110</p>
                <p className="text-gray-600">$80</p>
              </div>
              <div className="flex items-center gap-0.5">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ShirtFour}
                width={300}
                height={300}
                alt="..."
                className="w-[100px] h-[100px] md:h-[300px] md:w-[300px] object-cover"
              />
              <p>
                {`${"Mens Solid Color Casual Shirt long sleeves with under white shirt".slice(
                  0,
                  10
                )}...`}
              </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$110</p>
                <p className="text-gray-600">$80</p>
              </div>
              <div className="flex items-center gap-0.5">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ShirtOne}
                width={300}
                height={300}
                alt="..."
                className="w-[100px] h-[100px] md:h-[300px] md:w-[300px] object-cover"
              />
              <p>
                {`${"Mens Solid Color Casual Shirt long sleeves with under white shirt".slice(
                  0,
                  10
                )}...`}
              </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$110</p>
                <p className="text-gray-600">$80</p>
              </div>
              <div className="flex items-center gap-0.5">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </Container>
  );
}

export default BestSelling;
