
import { GradientText } from "@/components/GradientText";
import MainNavigation from "@/components/MainNavigation";
import NeuralLines from "@/components/NeuralLines";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Brain, Target, ZapIcon, ShieldCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <NeuralLines density="high" className="opacity-10" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="mb-6">
              <GradientText as="span">About The Program</GradientText>
              <span className="block">A Transformational Odyssey</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
              This isn't a course—it's a transformational odyssey designed to expand your inner bandwidth and sharpen your outer edge.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-compact px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neural-card">
              <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg">
                  This program is not a course. It's a transformational odyssey—designed to expand your inner bandwidth and sharpen your outer edge.
                </p>
                <p className="text-lg mt-4">
                  Built for the visionary who refuses to settle, the leader who knows there's more, and the changemaker ready to transcend limits.
                </p>
                <blockquote className="border-l-4 border-neural-500 pl-4 my-6">
                  <p className="text-lg italic">
                    "We don't just optimize performance. We help you embody the leader you were born to be."
                  </p>
                </blockquote>
                <p className="text-lg">
                  Every detail is intentional. Every session is curated.
                  The goal: to align your biology, mindset, purpose, and leadership.
                </p>
              </div>
            </div>
            
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop"
                  alt="Executive leadership meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="neural-card">
                <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Science-backed methodologies for measurable growth</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Personalized 1:1 coaching with industry experts</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Holistic integration of mind, body, and leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="mb-4"><GradientText>Our Mission</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8">
              To empower exceptional leaders to transcend their limitations, 
              master their inner landscape, and create extraordinary impact through aligned leadership.
            </p>
            
            <Button 
              size="lg" 
              className="bg-neural-600 hover:bg-neural-700 text-white" 
              onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})}
            >
              Book Your Private 1:1
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-compact px-4 bg-neural-900/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Meet Our Team</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              World-class experts dedicated to your transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-neural-700/30 overflow-hidden">
              <div className="h-64 bg-gradient-to-b from-neural-700/20 to-neural-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop" 
                  alt="Dr. Dharmesh Shah" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Dharmesh Shah</h3>
                <p className="text-neural-400 mb-3">Program Lead & Peak Performance Architect</p>
                <p className="text-muted-foreground">
                  With 20+ years of experience in performance psychology and leadership development, Dr. Shah has helped transform the lives of over 500 high-performing executives.
                </p>
              </div>
            </Card>
            
            <Card className="bg-card/50 border-neural-700/30 overflow-hidden">
              <div className="h-64 bg-gradient-to-b from-neural-700/20 to-neural-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c047495c?q=80&w=2340&auto=format&fit=crop" 
                  alt="Dr. Sarah Johnson" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Sarah Johnson</h3>
                <p className="text-neural-400 mb-3">Neuroscience & Bioenergetic Expert</p>
                <p className="text-muted-foreground">
                  A pioneer in integrating neuroscience with leadership practices, Dr. Johnson specializes in optimizing brain function for elite performance.
                </p>
              </div>
            </Card>
            
            <Card className="bg-card/50 border-neural-700/30 overflow-hidden">
              <div className="h-64 bg-gradient-to-b from-neural-700/20 to-neural-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-neural-400 mb-3">Strategic Leadership Coach</p>
                <p className="text-muted-foreground">
                  Former Fortune 100 CEO turned executive coach, Michael brings real-world leadership expertise and strategic insights to our team.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
