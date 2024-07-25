import RecentCard from "./RecentCard";

interface RecentSectionProps {
  items: { imageSrc: string; universityName: string }[];
}

const RecentSection: React.FC<RecentSectionProps> = ({ items }) => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Engagements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <RecentCard
            key={index}
            imageSrc={item.imageSrc}
            universityName={item.universityName}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentSection;
