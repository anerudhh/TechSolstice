import React from "react";

const TrustScoreDashboard: React.FC = () => {
  const trustScore = 85; // Example trust score

  return (
    <div>
      <h2>Your Trust Score</h2>
      <p>Trust Score: {trustScore}/100</p>
    </div>
  );
};

export default TrustScoreDashboard;