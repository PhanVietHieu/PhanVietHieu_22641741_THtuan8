import '../css/card.css';

export default function Overviewcard() {
    const cards = [
        {
            title: "Turnover",
            value: "$92,405",
            change: "5.39%",
            icon: "🛒",
        },
        {
            title: "Profit",
            value: "$32,218",
            change: "5.39%",
            icon: "💵",
        },
        {
            title: "New customer",
            value: "298",
            change: "6.84%",
            icon: "👤",
        },
    ];

    return (
        <div className="overview-container">
            <h2 className="overview-title">
                <span className="icon-square">▧</span> Overview
            </h2>
            <div className="overview-grid">
                {cards.map((card, index) => (
                    <div key={index} className="card-box">
                        <div className="card-title">{card.title}</div>
                        <div className="card-value">{card.value}</div>
                        <div className="card-change">
                            ▲ {card.change} <span className="card-subtext">period of change</span>
                        </div>
                        <div className="card-icon">{card.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
