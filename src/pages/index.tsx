import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main
      className={`min-h-screen`}
    >
      <Navbar />
      <h1>Sunduk App</h1>
    </main>
  );
}
