import { SundukSummary } from "@/Sunduk/SundukSummary";
import { SundukDetails } from "@/Sunduk/SundukDetails";
import { PageToolbar } from "@/components/PageToolBar";
import { JoinSundukButton } from "@/Sunduk/JoinSundukButton";
import { LoanRequests } from "@/Loans/LoanRequests";
import { PreviousSundukCycle } from "@/Sunduk/PreviousSundukCycle";
import { NextSundukCycle } from "@/Sunduk/NextSundukCycle";
import { Tabs } from "@/components/Tabs";
import { SundukCycles } from "@/Sunduk/ListSundukCycles";

export default function SundukPage() {
  return (
    <>
      <PageToolbar title="Sunduk Title">
        <div className="flex gap-2">
          <JoinSundukButton />
        </div>
      </PageToolbar>
      <section className="space-y-2 p-4">
        <div className="flex gap-2">
          <div className="w-96">
            <SundukSummary />
          </div>
          <div className="grow space-y-4">
            <SundukDetails />
            <div className="flex gap-2">
              <div className="grow">
                <PreviousSundukCycle />
              </div>
              <div className="grow">
                <NextSundukCycle />
              </div>
            </div>
            <LoanRequests />
            <SundukCycles />
          </div>
        </div>
      </section>
    </>
  );
}
