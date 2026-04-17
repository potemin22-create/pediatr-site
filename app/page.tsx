import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Reviews from "@/components/Reviews";
import VideoSection from "@/components/VideoSection";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <BookingForm />
        <Reviews />
        <VideoSection />
        <BlogPreview />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
