import { type NextPage } from "next";
import { CgHello } from "react-icons/cg";
import NavBar from "../NavBar/NavBar";

const HomeView: NextPage = () => {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-row items-center justify-center  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-9xl text-white">Bonjour</h1>
        <CgHello className="h-28 w-32 text-white" />
      </main>
    </>
  );
};

export default HomeView;
