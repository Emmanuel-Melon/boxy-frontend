import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { PageToolbar } from "@/components/PageToolBar";

export default function Account() {
  return (
    <section>
      <PageToolbar title="Account">
        <div className="flex gap-2">
          <Link href="/account/withdraw" className="btn btn-sm btn-outline">
            Withdraw <RiAddLine />
          </Link>
          <Link href="/account/deposit" className="btn btn-sm btn-primary">
            Deposit <RiAddLine />
          </Link>
        </div>
      </PageToolbar>
      <div>
        <h3>Account Information</h3>
      </div>
      <div>
        <h3>Transactions</h3>
      </div>
    </section>
  );
}
