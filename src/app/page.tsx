import { HeroParallax } from "@/components/ui/hero-parallax";
import HeroSection from "./components/HeroSection";
import HeroSectionHeader from "./components/HeroSectionHeader";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b"> 
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24">
          <HeroSection /> 
      </section>
      <section className="w-full py-16 ">
          <h2 className="text-3xl font-bold text-center mb-12">Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Latest Questions</h3>
              <div className="overflow-auto max-h-[500px]">
                <LatestQuestions />
              </div>
            </div>
            <div className=" dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Top Contributors</h3>
              <div className="overflow-auto max-h-[500px]">
                <TopContributers />
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}