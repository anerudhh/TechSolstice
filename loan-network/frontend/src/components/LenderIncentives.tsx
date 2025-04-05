import React from 'react';

const LenderIncentives: React.FC = () => {
    const badges = ["Top Supporter", "Community Hero"];

    return (
        <div>
            <h2>Lender Incentives</h2>
            <ul>
                {badges.map((badge, index) => (
                    <li key={index}>{badge}</li>
                ))}
            </ul>
        </div>
    );
};

export default LenderIncentives;