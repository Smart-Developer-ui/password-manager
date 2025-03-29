import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Manager from "./components/Manager";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Manager/>
  
      <Footer/>
    </>
  );
}
