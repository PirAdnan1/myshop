// components
import AboveFooterComp from "./AboveFooterComp";
import Container from "../components/Container";

// assets
import Customer from "../assets/icons/CustomerService";
import Delivery from "../assets/icons/DeliveryIcon";
import Secure from "../assets/icons/Secure";

function AboveFooter() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-8">
        <AboveFooterComp
          Icon={Customer}
          title={"Free and fast delivery"}
          description={"Free delivery for all order over $140"}
        />
        <AboveFooterComp
          Icon={Delivery}
          title={"24/7 customer service"}
          description={"friendly 24/7 customer support"}
        />
        <AboveFooterComp
          Icon={Secure}
          title={"Money back gaurantee"}
          description={"we return money within 30 days"}
        />
      </div>
    </Container>
  );
}

export default AboveFooter;
