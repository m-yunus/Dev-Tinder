import Image from "next/image";
import Link from "next/link";
import Landing_cover from "@/Components/Home/landing_cover";
import Header from "@/Components/layout/Header";
import Footer from "@/Components/layout/Footer";
export default function Home() {
  return (
    <>
       <div className='coverhome bg-blend-overlay'>
        <Header />
        <main className=" min-h-screen">
    <Landing_cover/>
    </main>
        <Footer />
        </div>
    </>
  );
}
