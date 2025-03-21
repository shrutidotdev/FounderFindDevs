import Image from "next/image";
import HomeSection from "@/app/components/Frontend/HeroSection";
import HandWrittenTitle from "@/app/components/Frontend/HandWritten";
import HomePageJobOverview from "./components/Frontend/HomePageJobOverview";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <HomePageJobOverview />
      <HandWrittenTitle />
    </div>
  );
}
