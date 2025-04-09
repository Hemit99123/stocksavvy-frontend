const Card = ({
    title,
    value,
  }: {
    title: string;
    value: string;
  }) => {
    return (
      <div className="flex-1 p-4 rounded border border-stone-300">
        <div className="flex mb-8 items-start justify-between">
          <div>
            <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
            <p className="text-3xl font-semibold">{value}</p>
          </div>
        </div>
  
        <p className="text-xs text-stone-500">All time</p>
      </div>
    );
  };
export default Card  