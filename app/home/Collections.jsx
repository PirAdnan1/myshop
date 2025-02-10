import Image from "next/image";

// assest
import CollectOne from "<@>/app/assets/collectionOne.png";
import CollectionTwo from "<@>/app/assets/collectionTwo.png";
import CollectionThree from "<@>/app/assets/collectionThree.png";
import CollectionFour from "<@>/app/assets/collectionFour.png";
// components
import Container from "../components/Container";
import RedIcon from "../components/RedIcon";

function Collections() {
  return (
    <Container>
      <div className="mt-14 mx-8">
        <RedIcon name={"Featured"} />
        <h1 className="font-semibold text-4xl mt-12">New Arrival</h1>
        <div className="flex flex-col lg:flex-row relative gap-x-11 gap-y-12 lg:gap-y-0 mt-14">
          <div className="bg-black relative">
            <Image src={CollectOne} alt="..." width={450} height={460} className="w-[450px] h-[460px] object-cover" />
            <div className="absolute text-white/85 bottom-5 left-4">
              <h1 className="text-2xl">Play Station 5</h1>
              <p>Black and white version comming out on sale</p>
              <p>Shop Now</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row items-center gap-0 bg-black pl-6 max-w-[570px] w-full">
              <div className="text-white/85">
                <h1 className="text-2xl font-semibold">Woman's Collection</h1>
                <p>Featured Woman's collections that gives you another vibe</p>
                <span>Shop Now</span>
              </div>

              <Image src={CollectionTwo} alt="..." />
            </div>
            <div className="flex flex-col md:flex-row lg:items-start items-center gap-6 mt-6 lg:justify-center">
              <div className="bg-black flex items-center justify-center w-[270px] relative">
                <Image src={CollectionThree} className="w-[250px] h-[250px] object-cover" alt="..." />
                <div className="absolute text-white/85 right-14 bottom-4">
                    <h1 className="text-2xl">Speaker</h1>
                    <p>Amazon waireless speaker</p>
                    <p>Shop Now</p>
                </div>
              </div>
              <div className="bg-black flex items-center justify-center w-[270px] relative">
                <Image src={CollectionFour} className="w-[250px] h-[250px] object-cover" alt="..." />
                <div className="absolute text-white/85 right-11 bottom-4">
                    <h1 className="text-2xl">Perfume</h1>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <p>Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Collections;
