import { Hero } from "./_component/hero";
import { Service } from "./_component/service";
import { Info } from "./_component/info";
import { Slide } from "@/component/ui/slide";
import { Group } from "./_component/group";
import { Trusted } from "./_component/trusted";
import { News } from "./_component/news";

export default function Home() {
  return (
    <>
    <main className="max-lg:w-full relative">
      <Hero />
    </main>
    <Service />
    <Info />
    <Slide />
    <Group />
    <Trusted />
    <News />
    </>
  );
}
