import Image from "next/image";
import HomeSection from "@/app/components/Frontend/HeroSection";
import HandWrittenTitle from "@/app/components/Frontend/HandWritten";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <HandWrittenTitle />
    </div>
  );
}
