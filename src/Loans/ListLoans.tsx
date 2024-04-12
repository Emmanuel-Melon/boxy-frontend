import { LoanOverviewCard } from "./LoanOverviewCard";

const loans = [
  {
    id: 1,
    title: "Hello, World",
  },
  {
    id: 2,
    title: "Hello, World",
  },
];

export const ListLoans = () => {
  return (
    <div>
      <h3 className="card-title text-sm">ListLoans</h3>
      <div className="flex gap-2 flex-wrap">
        {loans.map((loan) => (
          <LoanOverviewCard loan={loan} key={loan.id} />
        ))}
      </div>
    </div>
  );
};
