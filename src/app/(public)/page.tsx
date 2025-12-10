import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="mx-4 flex min-h-screen flex-col overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <Hero />
    </div>
  );
}
