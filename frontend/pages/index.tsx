import type { NextPage } from "next";
import { Heading } from "./components/heading";
import { Form } from "./components/form";

const Home: NextPage = () => {
  return (
    <>
    <title>Sign up</title>
      <div className="flex justify-center items-center min-h-screen text-[16px] font-poppins text-white bg-red-300 bg-cover bg-[url(../public/bg-intro-mobile.png)] sm:bg-[url(../public/bg-intro-desktop.png)]">
        <div className="w-full max-w-xs">
          <Heading />      
          <Form />   
        </div>
      </div>
    </>
  );
};

export default Home;