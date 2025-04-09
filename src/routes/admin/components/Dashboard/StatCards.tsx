import Card from "./common/Card";

export const StatCards = () => {
  return (
    <div className="flex justify-center mb-10 space-x-6">
      <Card
        title="Total users"
        value="120"
      />
      <Card
        title="Total questions"
        value="2797"
      />
    </div>
  );
};

