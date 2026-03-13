import React from "react";
import ExpenseSummary from "./ExpenseSummary";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Expense summary */}
      <ExpenseSummary />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">

        </div>

      </div>
    </div>
  );
};

export default Dashboard;