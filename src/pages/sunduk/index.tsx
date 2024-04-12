import { ListSunduks } from "@/Sunduk/ListMembers";
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";
import { PageToolbar } from "@/components/PageToolBar";

export default function Home() {
  return (
    <section className="space-y-4">
      <PageToolbar title="Sunduks">
        <div>
          <Link href="/sunduk/new" className="btn btn-sm btn-primary">
            Start Sunduk <RiAddLine />
          </Link>
        </div>
      </PageToolbar>
      <ListSunduks />
    </section>
  );
}
