interface IProdStatsProps {
  statisticsNumber: number | string;
  statisticsHeading: string;
}

function BannerProductStatisticCounter({
  statisticsNumber,
  statisticsHeading,
}: IProdStatsProps) {
  return (
    <div>
      <p className="text-2xl font-bold">{statisticsNumber}</p>
      <p className="text-zinc-500">{statisticsHeading}</p>
    </div>
  );
}

export default BannerProductStatisticCounter;
