import Image from "next/image";
import ExploreCard from "./Utils/ExploreCard";
import TrailerImage from "@/assets/portfolio/trailer.jpg";

export default function Explore() {
  return (
    <section
      id="portfolio"
      className="relative flex flex-col items-center justify-center"
    >
      <div className="mt-5 w-screen max-w-screen-xl px-5 py-10 md:mt-0 md:py-20 xl:px-0">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          EXPLORE NOSSO TRABALHO
        </h2>
        <h4 className="text-xl tracking-wider text-white">
          APROVADO PELOS LÍDERES DO MERCADO
        </h4>
      </div>
      <div className="-mx-2 flex flex-col flex-wrap md:flex-row">
        <div className="flex flex-wrap md:w-1/2">
          <ExploreCard
            title="Carros"
            image="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // image={TrailerImage}
            size="small"
            id="zW5wpJY1rgQ"
          />
          <ExploreCard
            title="Flores"
            image="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            size="small"
            id="5HsTGE-tl4o"
          />
          <ExploreCard
            title="Balões"
            image="https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            size="large"
            id="1oahTaVIQvk"
          />
        </div>
        <div className="flex flex-wrap md:w-1/2">
          <ExploreCard
            title="Floresta"
            image="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            size="large"
            id="9r8VtP5kdoo"
          />
          <ExploreCard
            title="Neve"
            image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
            size="small"
            id="K5Ni6Zh6MCY"
          />
          <ExploreCard
            title="Sakura"
            image="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
            size="small"
            id="jrTMMG0zJyI"
          />
        </div>
      </div>
    </section>
  );
}
