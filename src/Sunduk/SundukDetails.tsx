import { Card } from "@/components/Card";
import { HiOutlineCalendar, HiOutlineUserGroup } from "react-icons/hi2";

export const SundukDetails = () => {
    return (
        <Card>
            <h3 className="card-title text-sm">SundukDetails</h3>
            <div className="flex gap-8">
                <div className="flex items-center gap-4">
                    <span>
                        <HiOutlineCalendar />
                    </span>
                    <div className="space-y-2">
                        <h3 className="text-sm">Cycle</h3>
                        <p className="text-gray-500">2 weeks</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <HiOutlineUserGroup />
                    </span>
                    <div className="space-y-2">
                        <h3 className="text-sm">Members</h3>
                        <p className="text-gray-500">24</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <HiOutlineCalendar />
                    </span>
                    <div className="space-y-2">
                        <h3 className="text-sm">Created</h3>
                        <p className="text-gray-500">24/05/2024</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <HiOutlineCalendar />
                    </span>
                    <div className="space-y-2">
                        <h3 className="text-sm">Created</h3>
                        <p className="text-gray-500">24/05/2024</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}