import { Card } from "@/components/Card"
export const LoanRequestCard = ({ loan }) => {
    return (
        <Card>
            <h3 className="card-title text-sm">{loan.title}</h3>
        </Card>
    )
}