<template>
  <div>
    <HeroSection />
    <AboutSection />
    <FeatureSection />
    <ServiceSection />
    <TeamSection />
    <TestimonialSection />
    <BlogSection />
    <ContactSection />
  </div>
</template>

<script>
import FeatureSection from "@/components/home/FeatureSection.vue";
import ServiceSection from "@/components/home/ServiceSection.vue";
import TestimonialSection from "@/components/home/TestimonialSection.vue";
import AboutSection from '@/components/home/AboutSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import BlogSection from '@/components/home/BlogSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import TeamSection from '@/components/home/TeamSection.vue'

export default {
  components: {
    TeamSection,
    ContactSection,
    BlogSection,
    HeroSection,
    AboutSection,
    FeatureSection,
    ServiceSection,
    TestimonialSection,
  },
};
</script>