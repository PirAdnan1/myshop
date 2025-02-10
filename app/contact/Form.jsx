import React from "react";

// components
import CallToUsCompo from "./components/CallToUsCompo";
import Container from "../components/Container";

// Icons
import Phone from "../assets/icons/Phone";
import Email from "../assets/icons/Email";

function Form() {
  return (
    <Container>
      <div className="mt-16">
        <p className="md:ml-8 ml-4">
          Home / <span className="font-bold">Contact</span>
        </p>
        <div className="flex flex-col lg:flex-row items-center md:items-start justify-center gap-x-12 gap-y-8 lg:gap-y-0 mt-14 mx-4 lg:mx-0">
          <div className="flex flex-col gap-y-10 shadow-lg rounded-md px-6 py-8">
            <CallToUsCompo
              title={"Call To Us"}
              Icon={Phone}
              description={"We are available 24/7 in 7 days a week"}
              phone={"03484686517"}
            />
            <CallToUsCompo
              title={"Write To Us"}
              Icon={Email}
              description={
                "Fill out our form and we will contact you within 24 hours"
              }
              email={"piradnan113@gmail.com"}
            />
          </div>
          <form>
            <div>
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  className="outline-none border bg-gray-200 pl-3 rounded-md py-1"
                  placeholder="Enetr Your Name"
                />
                <input
                  type="email"
                  className="outline-none border bg-gray-200 pl-3 rounded-md py-1"
                  placeholder="Enetr Your Email"
                />
                <input
                  type="number"
                  className="outline-none border bg-gray-200 pl-3 rounded-md py-1"
                  placeholder="Your Phone"
                />
              </div>
              <textarea
                rows={"6"}
                className="outline-none border flex bg-gray-200 resize-none max-w-[660px] w-full mt-8 pl-5"
                placeholder="Your Message"
              ></textarea>
              <button className="bg-red-700 text-white px-5 py-2 rounded-md mt-5">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Form;
