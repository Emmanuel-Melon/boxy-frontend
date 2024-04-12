import { useFetch } from "@/hooks/useFetch";
import Link from "next/link";
import { Card } from "@/components/Card";
import { HiOutlineUserGroup, HiOutlineCalendar, HiOutlineUserCircle } from "react-icons/hi2";

export const SundukOverviewCard = ({ sunduk }) => {
  return (
    <div className="grow">
      <Card>
        <h3 className="card-title">
          <Link href={`/sunduk/${sunduk.id}`}>{sunduk.name}</Link>
        </h3>
        <p>Hello, world</p>
        <div className="flex gap-4">
            <div className="badge gap-2">
              <HiOutlineUserGroup /> {sunduk.members} members
            </div>
            <div className="badge gap-2">
              <HiOutlineCalendar /> {sunduk.cycleDuration}
            </div>
            <div className="badge gap-2">
              <HiOutlineUserCircle /> Created By: Emmanuel Gatwech
            </div>
          </div>
        <div className="card-actions">
            <button className="btn btn-sm btn-primary">Join</button>
        </div>
      </Card>
    </div>
  );
};