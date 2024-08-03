import Faq from "@/components/landing-page/faq";
import Reports from "@/components/landing-page/reports";
import Welcome from "@/components/landing-page/welcome";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Reports />
      <Faq />
      <Footer />
    </>
  );
}
