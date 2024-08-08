import "@/styles/video-background.css";
import Hero from "@/components/Home/Hero";
import Partners from "@/components/Home/Partners";
import Explore from "@/components/Home/Explore";
import Contact from "@/components/Home/Contact";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div
        id="video-background"
        data-vbg-load-background="false"
        data-vbg="https://www.youtube.com/watch?v=naMB8YJ5yps&vq=hd2160"
        data-vbg-start-at="5"
      ></div>
      <div className="video-background-overlay"></div>
      <Hero />
      <Partners />
      <About />
      <Explore />
      <Contact />
    </main>
  );
}
