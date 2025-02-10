import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
// swipper CSS
import 'swiper/css';
import 'swiper/css/pagination';

// icons
import Star from "../assets/icons/Star";

// assest
import ShirtOne from "<@>/app/assets/shirtOne.jpg";
import ShirtTwo from "<@>/app/assets/shirtTwo.jpg";
import ShirtThree from "<@>/app/assets/shirtThree.jpg";
import ShirtFour from "<@>/app/assets/shirtFour.jpeg";

// container
import Container from "../components/Container";

// components
import RedIcon from "../components/RedIcon";

export default function Slider() {
  return (
    <Container>
      <div className="my-12">
        <RedIcon name={"Today's"} />
      </div>
      <div className="mt-11">
        <Swiper
          modules={[Pagination]}
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
          style={{ paddingBottom: '3rem', margin: "1rem", display: "flex", justifyContent: "center" }}
        >
          <div className="flex justify-center">
            <SwiperSlide>
              <Image
                src={ShirtOne}
                width={300}
                height={300}
                alt="..."
                className="w-[100px] h-[100px] md:h-[300px] md:w-[300px] object-cover"
              />
             <p className="max-w-[100px]">
                   { `${"Mens Fashion - Dress Shirt for Men - Men's Multi-Color Dress Shirts".slice(0,10)}...`}
                    
                </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$120</p>
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
                src={ShirtTwo}
                width={300}
                height={300}
                alt="..."
                className="w-[100px] h-[100px] md:h-[300px] md:w-[300px] object-cover"
              />
              <p>{`${"MEN BLACK DRESS SHIRT IN COTTON STUFF".slice(0,10)}...`}</p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$120</p>
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
                { `${"Mens Solid Color Casual Shirt long sleeves with under white shirt".slice(0,10)}...`}
              </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$120</p>
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
                { `${"Mens Solid Color Casual Shirt long sleeves with under white shirt".slice(0,10)}...`}
              </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$120</p>
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
                { `${"Mens Solid Color Casual Shirt long sleeves with under white shirt".slice(0,10)}...`}
              </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$120</p>
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
                src={ShirtTwo}
                width={300}
                height={300}
                alt="..."
                className="w-[100px] h-[100px] md:h-[300px] md:w-[300px] object-cover"
              />
              <p>
                { `${"Mens Solid Color Casual Shirt long sleeves with under white shirt".slice(0,10)}...`}
              </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$120</p>
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
                { `${"Mens Solid Color Casual Shirt long sleeves with under white shirt".slice(0,10)}...`}
              </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$120</p>
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
                { `${"Mens Solid Color Casual Shirt long sleeves with under white shirt".slice(0,10)}...`}
              </p>
              <div className="flex items-center gap-3 my-1">
                <p className="text-red-700 line-through">$120</p>
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
      <div className="my-10 text-center">
        <Link
          href={"/"}
          className="bg-red-700  text-white text-xl rounded-md px-4 py-2 md:px-16 md:py-3"
        >
          View All
        </Link>
        <hr className="bg-gray-300 h-[1px] mt-14" />
      </div>
    </Container>
  );
}
