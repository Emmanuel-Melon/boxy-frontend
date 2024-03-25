import { useFetch } from "@/hooks/useFetch";
import { RiAddLine, RiUserShared2Line } from "react-icons/ri";
import Link from "next/link";

export const SundukOverview = ({ sunduk }) => {
  return (
    <div className="card card-compact card-bordered grow">
      <div className="card-body">
        <h3 className="card-title"><Link href={`/sunduk/${sunduk.id}`}>{sunduk.name}</Link></h3>
        <p>Hello, world</p>
        <div className="card-actions">
        <div className="flex gap-4">
          <div className="badge gap-2">
            <RiUserShared2Line /> {sunduk.members} members
          </div>
          <div className="badge gap-2">
            <RiUserShared2Line /> {sunduk.cycleDuration}
          </div>
          <div className="badge gap-2">
            <RiUserShared2Line /> Created By: Emmanuel Gatwech
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export const ListSunduks = () => {
  const { data: sunduks } = useFetch("/sunduks");
  return (
    <div className="flex flex-wrap p-4 gap-4">
      {sunduks?.sunduks?.map((sunduk) => (
        <SundukOverview key={sunduk.id} sunduk={sunduk} />
      ))}
    </div>
  );
};
