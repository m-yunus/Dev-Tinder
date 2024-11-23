import Image from "next/image";
import Link from "next/link";
import Landing_cover from "@/Components/Home/landing_cover";
import Header from "@/Components/layout/Header";
import Footer from "@/Components/layout/Footer";
import RecsContainer from "@/Components/Recs/Recs";
import CreateAccountHeader from "@/Components/create-account/Header";
export default function Recs() {
  return (
    <>
       <CreateAccountHeader />
    <div className="min-h-screen bg-black">
    <RecsContainer/>
    </div>
      <Footer />
    </>
  );
}
