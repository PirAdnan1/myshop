import Image from "next/image";
import { ArrowBigRightDash } from "lucide-react";
// assest
import BannerImage from "<@>/app/assets/banner.png";

// container
import Container from "../components/Container";

function Hero() {
  return (
    <Container>
      <div className="flex  flex-col gap-8 lg:gap-0 md:flex-row md:items-center items-start justify-between mt-8 mx-4 lg:mx-20">
        <div className="flex order-2 md:order-1 flex-col">
          <span className="hover:text-blue-900 hover:cursor-pointer">
            Woman's Fashion
          </span>
          <span className="hover:text-blue-900 hover:cursor-pointer mt-1.5">
            Man's Fashion
          </span>
          <span className="hover:text-blue-900 hover:cursor-pointer mt-1.5">
            Electronics
          </span>
          <span className="hover:text-blue-900 hover:cursor-pointer mt-1.5">
            Home & Lifestyle
          </span>
          <span className="hover:text-blue-900 hover:cursor-pointer mt-1.5">
            Medicine
          </span>
          <span className="hover:text-blue-900 hover:cursor-pointer mt-1.5">
            Sports & Outdoor
          </span>
          <span className="hover:text-blue-900 hover:cursor-pointer mt-1.5">
            Baby's Toys
          </span>
          <span className="hover:text-blue-900 hover:cursor-pointer mt-1.5">
            Groceries & Pets
          </span>
          <span className="hover:text-blue-900 hover:cursor-pointer mt-1.5">
            Healths & Beauty
          </span>
        </div>
        <div className="flex order-1 md:order-2 gap-10 md:gap-0 md:flex-row items-center bg-black px-24 pb-8 rounded-md">
          <div className="flex flex-col text-white">
            <div className="flex items-center gap-1">
              <h3 className="md:text-xl">Man's Series</h3>
            </div>

            <h1 className="max-w-[294px] md:text-3xl ">
              {"Up to 10% of Voucher"}
            </h1>
            <div className="flex items-center gap-1 mt-4">
              <span className="underline">Shop Now</span>
              <ArrowBigRightDash />
            </div>
          </div>
          <Image src={BannerImage} width={300} height={300} alt="banner-image" className="w-[180px] h-[180px] md:h-[300] md:w-[300]" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
