import About from "@/components/Home/about";
import { FeatureGrid } from "@/components/Home/featuregrid";
import Hero from "@/components/Home/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeatureGrid />
      
    </main>
  );
}
