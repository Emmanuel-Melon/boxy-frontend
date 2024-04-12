import { useFetch } from "@/hooks/useFetch";
import { RiAddLine, RiUserShared2Line } from "react-icons/ri";
import Link from "next/link";
import { Card } from "@/components/Card";
import { SundukOverviewCard } from "./SundukOverviewCard";

export const ListSunduks = () => {
  const { data: sunduks } = useFetch("/sunduks");
  return (
    <div className="flex flex-wrap p-4 gap-4">
      {sunduks?.sunduks?.map((sunduk) => (
        <SundukOverviewCard key={sunduk.id} sunduk={sunduk} />
      ))}
    </div>
  );
};
