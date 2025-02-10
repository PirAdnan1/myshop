// components
import RedIcon from "../components/RedIcon";
import CategoryComponent from "./CategoryComponent";

// container
import Container from "../components/Container";

// icons
import CatOne from "../assets/icons/CatOne";
import CatTwo from "../assets/icons/CatTwo";
import CatThree from "../assets/icons/CatThree";
import CatFour from "../assets/icons/CatFour";
import CatFive from "../assets/icons/CatFive";

function Categories() {
  return (
    <Container>
      <RedIcon name={"Categories"} />
      <div className="mx-8">
        <div className="mx-4">
          <h1 className="mt-8 text-2xl font-semibold">Browse By Cateogory</h1>
        </div>
        <div>
          <div className="flex flex-col gap-14 lg:gap-0 lg:flex-row items-center justify-between my-8">
            <CategoryComponent Icon={CatOne} title={"Phones"} />
            <CategoryComponent Icon={CatTwo} title={"Computers"} />
            <CategoryComponent Icon={CatThree} title={"Watches"} />
            <CategoryComponent Icon={CatFour} title={"HeadPhones"} />
            <CategoryComponent Icon={CatFive} title={"Gaming"} />
            <CategoryComponent Icon={CatOne} title={"Phones"} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Categories;
