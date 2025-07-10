
import { GradientText } from "@/components/GradientText";
import MainNavigation from "@/components/MainNavigation";
import NeuralLines from "@/components/NeuralLines";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import { QuoteIcon } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <NeuralLines density="medium" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="mb-6">
              <GradientText as="span">Leader Transformations</GradientText>
              <span className="block">Real Stories from Real Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
              Hear from executives who've experienced profound shifts through our program
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-compact px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="neural-card">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-neural-700/30">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop" 
                    alt="Anil Bhikadiya" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <QuoteIcon className="h-12 w-12 text-neural-400/30 mb-4" />
                <p className="text-xl italic mb-6">
                  "I feel like I've returned to myself—but this time, upgraded. Despite my high potential, I felt perpetually drained and overwhelmed. The transformation was complete—100% increase in energy, panic attacks resolved, and professional productivity at peak levels."
                </p>
                <div>
                  <h3 className="text-xl font-semibold">Anil Bhikadiya</h3>
                  <p className="text-neural-400">Diamond Manufacturer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-compact px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>What Leaders Are Saying</GradientText></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="We always had the vision. What we lacked was integration. Eternazen gave us the mirror, the map, and the method. Our productivity surged and profit margins grew steadily."
              author="Managing Director"
              role="Oriana Textiles"
            />
            
            <TestimonialCard
              quote="I didn't lose myself. I just had to find the strength to meet the version of me that was waiting to be seen. My productivity increased 10x with renewed purpose."
              author="Neha Nandwani"
              role="Nutritionist"
            />
            
            <TestimonialCard
              quote="I didn't need more strategies—I needed emotional clarity. Once I found that, everything changed. Business revenue tripled with successful expansion."
              author="Harshal Bhagat"
              role="Steel Manufacturing Entrepreneur"
            />
            
            <TestimonialCard
              quote="We have to learn to redefine success—not just as money and power, but as well-being and wisdom. I reversed type 2 diabetes and transformed my leadership approach."
              author="Nitu Kaur"
              role="Senior Corporate Executive"
            />
            
            <TestimonialCard
              quote="I no longer chase expansion. I embody it. I redesigned my role in business with more vision and less grind, while improving family bonds."
              author="Ketan Mehta"
              role="Real Estate Tycoon"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-neural-600 hover:bg-neural-700 text-white" 
              onClick={() => window.open('https://calendly.com/drdharmeshshah/peak-performance-consultation', '_blank')}
            >
              Begin Your Transformation
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
