import { Card } from "@/components/Card";
import { Input } from "@/components/Input";

export const DepositForm = () => {
  return (
    <Card>
      <h3 className="card-title text-sm">DepositForm</h3>
      <form className="space-y-2">
        <Input name="Amount" label="Amount" placeholder="Amount" type="text" />
        <button className="btn btn-sm btn-primary">Withdraw</button>
      </form>
    </Card>
  );
};
