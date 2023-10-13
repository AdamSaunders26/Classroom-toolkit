import WelcomeMessage from "./appComponents/WelcomeMessage";

export default function Home() {
  return (
    <main className="grid grid-cols-3 grid-rows-splash h-full">
      <WelcomeMessage />
    </main>
  );
}
