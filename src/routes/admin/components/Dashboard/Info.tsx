import { StatCards } from "./StatCards";
import { RecentTransactions } from "./RecentTransactions";

export const Grid = () => {
  return (
    <div className="px-4">
      <StatCards />
      <RecentTransactions />
    </div>

  );
};
