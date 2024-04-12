import { LoanRequestCard } from "./LoanRequestCard";

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

export const LoanRequests = () => {
  return (
    <div className="space-y-2">
      <h3 className="card-title text-sm">Loan Requests</h3>
      <div className="space-y-2">
        {loans.map((loan) => (
          <LoanRequestCard loan={loan} key={loan.id} />
        ))}
      </div>
    </div>
  );
};
