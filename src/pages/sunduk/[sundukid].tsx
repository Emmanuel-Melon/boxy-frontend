import { SundukSummary } from "@/Sunduk/SundukSummary";
import { SundukStats } from "@/Sunduk/SundukStats";

export default function SundukPage() {
  return (
    <section className="space-y-2 p-8">
      <h1>Sunduk</h1>
      <SundukStats />
      <div className="flex gap-2">
        <div>
          <SundukSummary />
        </div>
      </div>
    </section>
  );
}
