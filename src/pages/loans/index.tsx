import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { PageToolbar } from "@/components/PageToolBar";
import { ListLoans } from "@/Loans/ListLoans";

export default function Loans() {
  return (
    <>
      <PageToolbar title="Loans">
        <div>
          <Link href="/loans/apply" className="btn btn-sm btn-primary">
            Apply <RiAddLine />
          </Link>
        </div>
      </PageToolbar>
      <section className="p-4">
        <div className="flex gap-4">
          <div>
            <h3>Some Loan History</h3>
          </div>
          <div>
            <ListLoans />
          </div>
        </div>
      </section>
    </>
  );
}
