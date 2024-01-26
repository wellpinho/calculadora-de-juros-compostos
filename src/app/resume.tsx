interface IResume {
    totalInvested: number
    totalAnnualInterestEarned: number
    total: number
}

export function Resume({totalInvested, totalAnnualInterestEarned, total}: IResume) {
    const initValue = Number(totalInvested).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    const earned = Number(totalAnnualInterestEarned).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    const totalValue = Number(total).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    const stats = [
        { id: 1, name: 'Total investido', value: initValue},
        { id: 2, name: 'Total ganho em juros', value: earned},
        { id: 3, name: 'Total', value: totalValue},
    ];

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                    <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600 font-bold">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-green-700 sm:text-5xl">
                        {stat.value}
                        </dd>
                    </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}