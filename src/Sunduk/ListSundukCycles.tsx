import { CycleOverviewCard } from "./CycleOverviewCard"

const cylcles = [
    {
        id: 1,
        title: "hello"
    },
    {
        id: 2,
        title: "hello"
    }
]

export const SundukCycles = () => {
    return (
        <div>
            <div className="space-y-2">
                {cylcles.map(cycle => <CycleOverviewCard cycle={cycle} key={cycle.id} />)}
            </div>
        </div>
    )
}