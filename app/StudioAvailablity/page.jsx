export default function StudioAvailablity() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50 select-none">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-2 py-4">
            <h3 className="text-3xl sm:text-4xl font-bold">500+</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Happy Clients
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 py-4">
            <h3 className="text-3xl sm:text-4xl font-bold">300+</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Weddings Captured
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 py-4">
            <h3 className="text-3xl sm:text-4xl font-bold">100+</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Film Projects Completed
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 py-4">
            <h3 className="text-3xl sm:text-4xl font-bold">24/7</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Customer Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
