import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const sundukDetailsSchema = z.object({
    accountNumber: z
      .string()
      .min(6, { message: "Must be at least 6 letters." })
      .trim().optional(),
    amount: z.string().trim().optional(), // Assuming you're using a string for currency formatting
    name: z.string().trim().optional(),
    transactionType: z.enum(["Local Transaction", "International Transaction"]).optional(),
    transactionFees: z.string().trim().optional(), // Assuming you're using a string for currency formatting
    payoutAmount: z.string().trim().optional(), // Assuming you're using a string for currency formatting
    purpose: z.string().trim().optional(),
  });

export const SundukSchedule = () => {
    return (
        <Card>
            <h3>New Sunduk</h3>
            <form className="space-y-2">
                <Input 
                label="Sunduk Name"
                type="text"
                placeholder="i.e Car Saving Scheme"
                name="name"
                />
                                <Input 
                label="Sunduk Name"
                type="text"
                placeholder="i.e Car Saving Scheme"
                name="name"
                />
                                <Input 
                label="Sunduk Name"
                type="text"
                placeholder="i.e Car Saving Scheme"
                name="name"
                />
                <button className="btn btn-sm btn-primary">Save</button>
            </form>
        </Card>
    )
}