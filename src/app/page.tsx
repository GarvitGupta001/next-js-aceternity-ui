'use client'

import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonies from "@/components/Testimonies";
import Webinars from "@/components/Webinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <Testimonies />
      <Webinars />
      <Instructors />
    </>
  );
}