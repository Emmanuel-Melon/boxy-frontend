import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { PageToolbar } from "@/components/PageToolBar";
import { AccountOverview } from "@/Account/AccountOverview";
import { ListTransactions } from "@/Account/ListTransactions";

export default function Account() {
  return (
    <>
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
      <section className="p-4 flex gap-4">
        <div>
          <AccountOverview />
        </div>
        <div className="grow">
          <ListTransactions />
        </div>
      </section>
    </>
  );
}
