import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black mx-4">
      <h1>Dovo Mart</h1>
      <Hero />
    </div>
  );
}
