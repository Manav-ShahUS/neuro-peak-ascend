
import { GradientText } from "@/components/GradientText";
import MainNavigation from "@/components/MainNavigation";
import NeuralLines from "@/components/NeuralLines";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import { Brain, QuoteIcon } from "lucide-react";

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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop" 
                    alt="Michael Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <QuoteIcon className="h-12 w-12 text-neural-400/30 mb-4" />
                <p className="text-xl italic mb-6">
                  "This program was the inflection point in my career. I came in as a successful CEO by most external metrics, but internally I was fragmented and burning out. The transformation has been profound—not just in how I lead, but in how I live. My team sees it, my family feels it, and our business results reflect it."
                </p>
                <div>
                  <h3 className="text-xl font-semibold">Michael Chen</h3>
                  <p className="text-neural-400">CEO, Quantum Innovations</p>
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
              quote="As a founder, I was burning out despite our success. This program helped me reconnect with my purpose and redesign my life around what truly matters. The results are profound."
              author="Sarah Johnson"
              role="Founder, Elevate Capital"
            />
            
            <TestimonialCard
              quote="The blend of cutting-edge science with deep wisdom practices gave me tools I never knew existed. My executive team has commented on the positive shift in my leadership presence."
              author="David Rodriguez"
              role="CTO, Future Systems"
            />
            
            <TestimonialCard
              quote="I've done many leadership programs over my 20-year career. This one stands apart. The personalized approach and focus on whole-person optimization created lasting change."
              author="Jennifer Lee"
              role="Managing Director, Global Finance"
            />
            
            <TestimonialCard
              quote="Three months in, I'm sleeping better, thinking more clearly, and leading with more compassion. My team engagement scores have increased 27% since I began implementing what I've learned."
              author="Robert Williams"
              role="COO, Innovate Health"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-neural-600 hover:bg-neural-700 text-white" 
              onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})}
            >
              Begin Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-compact px-4 bg-neural-900/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Video Stories</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Hear directly from our program graduates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neural-card overflow-hidden">
              <div className="aspect-video bg-neural-900/70 mb-4 rounded flex items-center justify-center">
                <Brain className="h-12 w-12 text-neural-400/50" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Elizabeth's Journey</h3>
              <p className="text-muted-foreground text-sm">
                "How the program helped me navigate a major acquisition while maintaining my wellbeing."
              </p>
            </div>
            
            <div className="neural-card overflow-hidden">
              <div className="aspect-video bg-neural-900/70 mb-4 rounded flex items-center justify-center">
                <Brain className="h-12 w-12 text-neural-400/50" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mark's Transformation</h3>
              <p className="text-muted-foreground text-sm">
                "From burnout to breakthrough: rebuilding my leadership approach from the inside out."
              </p>
            </div>
            
            <div className="neural-card overflow-hidden">
              <div className="aspect-video bg-neural-900/70 mb-4 rounded flex items-center justify-center">
                <Brain className="h-12 w-12 text-neural-400/50" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Team Evolution</h3>
              <p className="text-muted-foreground text-sm">
                "How our executive team transformed after three key leaders completed the program."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
