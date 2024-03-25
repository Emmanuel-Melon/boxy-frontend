import { ListSunduks } from "@/Sunduk/ListMembers";
import { RiAddLine } from "react-icons/ri";


export default function Home() {
  return (
    <section className="space-y-4">
      <div className="border-b flex items-center justify-between p-4">
        <div>
          <h3>Hello</h3>
        </div>
        <div>
          <button className="btn btn-primary">Start Sunduk <RiAddLine /></button>
        </div>
      </div>
      <ListSunduks />
    </section>
  );
}
