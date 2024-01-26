interface IResume {
    totalInvested: number
    totalAnnualInterestEarned: number
    total: number
}

export function Resume({totalInvested, totalAnnualInterestEarned, total}: IResume) {
    const stats = [
        { id: 1, name: 'Total investido', value: `R$ ${Number(totalInvested).toFixed(2).replace('.', ',')}`},
        { id: 2, name: 'Total ganho em juros R$', value: `R$ ${Number(totalAnnualInterestEarned).toFixed(2).replace('.', ',')}`},
        { id: 3, name: 'Total R$', value: `R$ ${Number(total).toFixed(2).replace('.', ',')}`},
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