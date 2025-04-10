import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { testimonial } from "@/data/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReviewSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative"
      id="review"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          What Our Users Say
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className="swiper-button-prev text-primary" />
          </div>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className="swiper-button-next text-primary" />
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination", // 👈 this makes it custom
            }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-background h-full">
                  <CardContent className="pt-6 h-full">
                    <div className="flex flex-col space-y-4 h-full justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 flex-shrink-0">
                          <Image
                            width={40}
                            height={40}
                            src={item.image}
                            alt={item.author}
                            className="rounded-full object-cover border-2 border-primary/20"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{item.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.role}
                          </p>
                          <p className="text-sm text-primary">{item.company}</p>
                        </div>
                      </div>
                      <blockquote>
                        <p className="text-muted-foreground italic relative mt-4">
                          <span className="text-3xl text-primary absolute -top-4 -left-2">
                            &quot;
                          </span>
                          {item.quote}
                          <span className="text-3xl text-primary absolute -bottom-4">
                            &quot;
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination flex justify-center mt-8" />
        </div>
      </div>
    </section>
  );
}
