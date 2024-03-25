import { Navbar } from "../components/Navbar";
import { ListSundukMembers } from "@/Sunduk/ListMembers";

export default function Home() {
  return (
    <main
      className={`min-h-screen`}
    >
      <Navbar />
      <h1>Car Saving Sunduk</h1>
      <ListSundukMembers />
    </main>
  );
}
