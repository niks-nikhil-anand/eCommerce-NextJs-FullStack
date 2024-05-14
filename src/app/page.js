import Banner2 from "@/component/Homepage/Banner";
import Blog from "@/component/Homepage/Blog";
import CardComponent from "@/component/Homepage/Categories";
import FeaturedProduct from "@/component/Homepage/FeaturedProduct";
import Footer from "@/component/Homepage/Footer";
import Banner1 from "@/component/Homepage/Hero";
import HoverCardSection from "@/component/Homepage/HoverCardSection";
import Navbar from "@/component/Homepage/Navbar";
import NewArrivals from "@/component/Homepage/NewArrivalsCard";
import ProductGrid from "@/component/Homepage/ProductGrid";
import TopProducts from "@/component/Homepage/TopProducts";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner1/>
    <CardComponent/>
    <NewArrivals/>
    <Banner2/>
    <HoverCardSection/>
    <ProductGrid/>
    <Blog/>
    <FeaturedProduct/>
    <TopProducts/>
    <Footer/>
    </>
  );
}
