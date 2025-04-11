import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";

function OurService() {
  const handleScroll = (index) => {
    const sectionIds = ["portfolio", "wedding", "films", "newBornToddler"];
    const targetId = sectionIds[index];
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background select-none">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12">
          "Discover Exceptional Services with Deepak Studio – Where Creativity
          Meets Perfection!"
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              onClick={() => handleScroll(index)}
              className="border-2 hover:border-primary transition-colors duration-300 cursor-pointer h-full"
            >
              <CardContent className="pt-6 text-center flex flex-col items-center h-full">
                <div className="flex flex-col items-center justify-center space-y-2 px-2">
                  {feature.icon}
                  <h3 className="text-lg sm:text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurService;
