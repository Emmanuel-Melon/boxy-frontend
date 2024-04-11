export const Card = ({ children }) => {
    return (
        <div className="card card-compact card-bordered shadow-sm bg-base-100">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}