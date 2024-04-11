import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { PageToolbar } from "@/components/PageToolBar";

export default function Loans() {
  return (
    <section>
      <PageToolbar title="Loans">
        <div>
          <Link href="/loans/apply" className="btn btn-primary">
            Apply <RiAddLine />
          </Link>
        </div>
      </PageToolbar>
    </section>
  );
}
