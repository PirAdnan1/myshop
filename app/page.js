"use client"; // required for components using hooks

// Home Components
import HomepAgeData from "./home";

// context
import { useAppContext } from "./context/context";

export default function Home() {
  const { state, setState } = useAppContext();

  return (
    <div>
     <HomepAgeData />
    </div>
  );
}

