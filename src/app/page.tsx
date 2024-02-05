import Image from "next/image";
import "@/styles/video-background.css";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-[calc(100vh*2)]">
      <div
        id="video-background"
        data-vbg-load-background="false"
        data-vbg="https://www.youtube.com/watch?v=naMB8YJ5yps"
        data-vbg-start-at="5"
      ></div>
      <div className="video-background-overlay"></div>
      <Hero />
      <About />
    </main>
  );
}
