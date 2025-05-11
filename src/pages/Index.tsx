
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradientText } from "@/components/GradientText";
import NeuralLines from "@/components/NeuralLines";
import BenefitCard from "@/components/BenefitCard";
import OutcomeItem from "@/components/OutcomeItem";
import ConsultationForm from "@/components/ConsultationForm";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Brain, Activity, LineChart, ShieldCheck, ZapIcon, Target, Heart, BarChart3, Users, Sparkles, CheckCircle, Utensils, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <NeuralLines density="high" className="opacity-30" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="mb-6">
              <GradientText as="span">The Peak Performers Program</GradientText>
              <span className="block">Redefine What's Possible. Lead With Power, Live With Purpose.</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
              You've mastered the external game. Now it's time to evolve the internal one.
            </p>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
              Behind every high-achieving CEO, founder, or leader is a human being with immense potential—often untapped, underutilized, or scattered by the pace of modern business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-neural-600 hover:bg-neural-700 text-white" 
                onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})}
              >
                Book Your Private 1:1
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neural-700 text-neural-400 hover:bg-neural-900/50"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({behavior: 'smooth'})}
              >
                Explore The Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="section-compact px-4 pb-0" id="program">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>About the Program</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              This isn't a course—it's a transformational odyssey
            </p>
          </div>

          <div className="neural-card">
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
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-compact px-4 bg-neural-900/30" id="stats">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Program Impact</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              When you evolve from within, everything changes around you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              percentage="92%" 
              description="of participants report elevated teamwork & collaboration"
            />
            <StatCard 
              percentage="91%" 
              description="experience a dramatic improvement in stress mastery"
            />
            <StatCard 
              percentage="84%" 
              description="are more effective at navigating conflict with clarity"
            />
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="section-compact px-4" id="who">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Who This Is For</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              This is a high-touch, high-impact experience curated for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-neural-700/30 overflow-hidden">
              <div className="h-48 bg-gradient-to-b from-neural-700/20 to-neural-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2342&auto=format&fit=crop" 
                  alt="Visionary CEOs & Founders" 
                  className="w-full h-full object-cover object-center opacity-90 mix-blend-luminosity"
                />
              </div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto -mt-14 mb-4 rounded-full bg-neural-900 flex items-center justify-center border-4 border-background">
                  <Users className="h-8 w-8 text-neural-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visionary CEOs & Founders</h3>
                <p className="text-muted-foreground">
                  Leaders who shape vision and drive transformative growth
                </p>
              </div>
            </Card>
            
            <Card className="bg-card/50 border-neural-700/30 overflow-hidden">
              <div className="h-48 bg-gradient-to-b from-neural-700/20 to-neural-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop" 
                  alt="Elite C-Suite Executives" 
                  className="w-full h-full object-cover object-center opacity-90 mix-blend-luminosity"
                />
              </div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto -mt-14 mb-4 rounded-full bg-neural-900 flex items-center justify-center border-4 border-background">
                  <Target className="h-8 w-8 text-neural-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Elite C-Suite Executives</h3>
                <p className="text-muted-foreground">
                  CXOs, MDs, and VPs ready to amplify their leadership impact
                </p>
              </div>
            </Card>
            
            <Card className="bg-card/50 border-neural-700/30 overflow-hidden">
              <div className="h-48 bg-gradient-to-b from-neural-700/20 to-neural-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop" 
                  alt="Impact-Focused Leaders" 
                  className="w-full h-full object-cover object-center opacity-90 mix-blend-luminosity"
                />
              </div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto -mt-14 mb-4 rounded-full bg-neural-900 flex items-center justify-center border-4 border-background">
                  <Heart className="h-8 w-8 text-neural-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Impact-Focused Leaders</h3>
                <p className="text-muted-foreground">
                  Change-makers and social leaders who shape culture and drive meaningful impact
                </p>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              If you lead people, steer vision, or shape culture—this is for you.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-neural-700 text-neural-400 hover:bg-neural-900/50">
                Learn More About Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Inclusions */}
      <section className="section-compact px-4 bg-neural-900/30" id="benefits">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>You Will Experience</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              This isn't a one-size-fits-all curriculum. It's a sacred and scientific journey, tailored to your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/offerings#diagnostics" className="block group">
              <BenefitCard
                title="Deep Diagnostics"
                description="Comprehensive assessment for longevity, vitality & energetic clarity"
                icon={<Brain className="h-8 w-8" />}
              >
                <img 
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2573&auto=format&fit=crop" 
                  alt="Deep Diagnostics" 
                  className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </BenefitCard>
            </Link>
            
            <Link to="/offerings#mentorship" className="block group">
              <BenefitCard
                title="1-on-1 Mentorship"
                description="Personalized guidance with world-class experts across domains"
                icon={<ZapIcon className="h-8 w-8" />}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop" 
                  alt="1-on-1 Mentorship" 
                  className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </BenefitCard>
            </Link>
            
            <Link to="/offerings#retreats" className="block group">
              <BenefitCard
                title="Immersive Sacred Retreats"
                description="Powerful environments designed to reset, renew, and rewire your system"
                icon={<Sparkles className="h-8 w-8" />}
              >
                <img 
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2370&auto=format&fit=crop" 
                  alt="Immersive Sacred Retreats" 
                  className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </BenefitCard>
            </Link>

            <Link to="/offerings#nutrition" className="block group">
              <BenefitCard
                title="Lifestyle & Nutrition Coaching"
                description="Customized protocols to fuel high performance and optimize wellbeing"
                icon={<Utensils className="h-8 w-8" />}
              >
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2340&auto=format&fit=crop" 
                  alt="Lifestyle & Nutrition Coaching" 
                  className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </BenefitCard>
            </Link>

            <Link to="/offerings#accountability" className="block group">
              <BenefitCard
                title="Continuous Accountability"
                description="Structured support system ensuring measurable transformation"
                icon={<Clock className="h-8 w-8" />}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2340&auto=format&fit=crop" 
                  alt="Continuous Accountability" 
                  className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </BenefitCard>
            </Link>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground mb-6">
              Every detail is intentional. Every session is curated.
              The goal: to align your biology, mindset, purpose, and leadership.
            </p>
            <Link to="/offerings">
              <Button className="bg-neural-600 hover:bg-neural-700 text-white">
                Explore All Offerings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="section-compact px-4" id="different">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Why This Program Is Different</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              In a world full of information, this program delivers transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <OutcomeItem
              title="Science Meets Spirituality"
              description="Cutting-edge tools blended with timeless wisdom"
            />
            <OutcomeItem
              title="Legacy-Focused Mentorship"
              description="Grounded, personal, and deeply intentional"
            />
            <OutcomeItem
              title="Private & Personalized"
              description="No fluff. No group webinars. Just elite-level growth"
            />
            <OutcomeItem
              title="Measurable Results"
              description="You'll feel it. Your teams will see it. The world will notice"
            />
            <OutcomeItem
              title="Designed for the Exceptional"
              description="Built for those who refuse to be average"
            />
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="section-compact px-4 bg-neural-900/30" id="outcomes">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>The Results You Can Expect</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              This isn't about doing more. It's about becoming more—so you can lead with power and live with clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="neural-card">
              <ShieldCheck className="h-10 w-10 text-neural-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sharper Mental Focus & Emotional Mastery</h3>
              <p className="text-muted-foreground">
                Lead with clarity and navigate complexity with power
              </p>
            </Card>
            
            <Card className="neural-card">
              <Activity className="h-10 w-10 text-neural-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Peak Vitality & Resilience</h3>
              <p className="text-muted-foreground">
                Optimized at the cellular level for sustained high performance
              </p>
            </Card>
            
            <Card className="neural-card">
              <LineChart className="h-10 w-10 text-neural-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Aligned Leadership</h3>
              <p className="text-muted-foreground">
                Rooted in authentic power and purpose-driven impact
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/methodology">
              <Button variant="outline" className="border-neural-700 text-neural-400 hover:bg-neural-900/50">
                Learn About Our Methodology
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-compact px-4" id="testimonials">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Leader Transformations</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Real stories from executives who've experienced our program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="This program completely transformed my approach to leadership. The blend of science and spiritual practices has given me tools I never knew existed. My team has noticed the difference."
              author="Michael Chen"
              role="CEO, Quantum Innovations"
            />
            <TestimonialCard
              quote="As a founder, I was burning out despite our success. This program helped me reconnect with my purpose and redesign my life around what truly matters. The results are profound."
              author="Sarah Johnson"
              role="Founder, Elevate Capital"
            />
          </div>
          
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button className="bg-neural-600 hover:bg-neural-700 text-white">
                Read More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="section-compact px-4" id="consultation">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>This Is Your Call Forward</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              You've done what most won't. Now it's time to become who few ever do.
            </p>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
              Your next evolution begins with a private conversation. Join us for a 1-on-1 call with Dr. Dharmesh Shah, 
              Program Lead and Peak Performance Architect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neural-card">
              <h3 className="text-2xl font-semibold mb-4">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>A confidential assessment of your current challenges and goals</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Overview of our methodology and approach</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Customized program recommendations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Limited spots available (curated selection only)</span>
                </li>
              </ul>
            </div>
            
            <div className="neural-card">
              <h3 className="text-2xl font-semibold mb-4">Book Your Private 1:1</h3>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
