"use client";

import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import HeroSection from "@/app/hero/page";
import PREWEDDING from "@/app/preWedding/page";
import WEDDING from "@/app/wedding/page";
import NEWBORNTODDLER from "@/app/newBornToddler/page";
import SocialIcon from "@/components/SocialIcon";
import OurService from "@/app/OurService/page";
import ReviewSection from "@/app/ReviewSection/page";
import StudioAvailablity from "@/app/StudioAvailablity/page";
import AwardSection from "@/app/AwardSection/page";
import FormSection from "@/app/FormSection/page";
import VideoPlayer from "@/app/Films/page";
import QnA from "@/app/QnA/page";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Page() {
  return (
    <SmoothScrollWrapper>
      <div className="grid-background"></div>

      <HeroSection />

      <section id="services-section">
        <OurService />
      </section>

      <SocialIcon />

      <section id="portfolio">
        <PREWEDDING />
      </section>

      <section id="wedding">
        <WEDDING />
      </section>

      <section id="newBornToddler">
        <NEWBORNTODDLER />
      </section>

      <section id="films">
        <VideoPlayer />
      </section>

      <section id="review">
        <ReviewSection />
      </section>

      <StudioAvailablity />

      <AwardSection />

      <section id="contact-section">
        <FormSection />
      </section>

      <QnA />
    </SmoothScrollWrapper>
  );
}

export default Page;
