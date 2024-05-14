import Banner2 from "@/component/Homepage/Banner";
import Banner1 from "@/component/Homepage/Hero";
import Navbar from "@/component/Homepage/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner1/>
    <Banner2/>
    </>
  );
}
