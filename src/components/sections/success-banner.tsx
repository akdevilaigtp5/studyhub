import { successStats } from '@/lib/data';

const SuccessBanner = () => {
  const extendedStats = [...successStats, ...successStats];

  return (
    <section className="py-6 bg-primary/10">
      <div className="container overflow-hidden">
        <div className="relative w-full">
          <div className="flex animate-scroll group-hover:pause">
            {extendedStats.map((stat, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center mx-8 w-48">
                <stat.icon className="w-8 h-8 text-primary mr-4" />
                <div className="text-left">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessBanner;
