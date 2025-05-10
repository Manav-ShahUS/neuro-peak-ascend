
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradientText } from "@/components/GradientText";
import NeuralLines from "@/components/NeuralLines";
import BenefitCard from "@/components/BenefitCard";
import OutcomeItem from "@/components/OutcomeItem";
import ConsultationForm from "@/components/ConsultationForm";
import { Brain, Activity, LineChart, ShieldCheck, ZapIcon, Target, Heart, BarChart3, Users, Sparkles } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <NeuralLines />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="mb-6">
              <GradientText as="span">Elevate Your Leadership</GradientText>
              <span className="block">The Peak Performance Program</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
              Unlock unprecedented levels of cognitive mastery, resilience, and 
              leadership effectiveness through cutting-edge neuroscience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-neural-600 hover:bg-neural-700 text-white" 
                onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})}
              >
                Schedule a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neural-700 text-neural-400 hover:bg-neural-900/50"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({behavior: 'smooth'})}
              >
                Explore Benefits
              </Button>
            </div>
          </div>
          
          <div className="relative w-full max-w-3xl mx-auto h-[300px] md:h-[400px]">
            <div className="absolute inset-0 bg-neural-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br from-neural-400/30 to-neural-700/30 rounded-full flex items-center justify-center animate-float">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-neural-400 to-neural-700 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 px-4" id="program">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>About the Program</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              A comprehensive approach to rewire your brain for peak performance
            </p>
          </div>

          <div className="neural-card">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg">
                The contemporary business environment presents top executives with immense pressure. 
                They are tasked with navigating complexity, making critical decisions, and driving innovation, 
                all while maintaining peak cognitive and emotional resilience.
              </p>
              <p className="text-lg mt-4">
                The Peak Performance Program is an exclusive, science-backed initiative designed to help you and your 
                partner thrive in this challenging landscape. We understand that true peak performance isn't 
                just about strategy and effort – it's rooted in the very architecture of your brain.
              </p>
              <blockquote className="border-l-4 border-neural-500 pl-4 my-6">
                <p className="text-lg italic">
                  "The difference between good and extraordinary performance isn't just about habits 
                  and behaviors—it's fundamentally neurological."
                </p>
              </blockquote>
              <p className="text-lg">
                Leveraging cutting-edge neuroscience and FDA-approved diagnostic tools, our program is 
                designed to help you achieve extraordinary and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-16 px-4 bg-neural-900/30" id="who">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Who Is This Program For?</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              This transformative program is specifically designed for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-neural-700/30">
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neural-900 flex items-center justify-center">
                  <Users className="h-8 w-8 text-neural-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">CXOs and Business Leaders</h3>
                <p className="text-muted-foreground">
                  Elevate your decision-making, resilience, and leadership effectiveness.
                </p>
              </div>
            </Card>
            
            <Card className="bg-card/50 border-neural-700/30">
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neural-900 flex items-center justify-center">
                  <Target className="h-8 w-8 text-neural-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">High-Performing Executives</h3>
                <p className="text-muted-foreground">
                  Break through plateaus and achieve new heights of cognitive and emotional mastery.
                </p>
              </div>
            </Card>
            
            <Card className="bg-card/50 border-neural-700/30">
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neural-900 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-neural-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Spouses of Leaders</h3>
                <p className="text-muted-foreground">
                  Enhance your own wellbeing, stress resilience, and cognitive function, aligning with your partner's journey.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" id="benefits">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Program Benefits</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Our neuroscience-based approach delivers measurable improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard
              title="Precise Neural Assessment"
              description="Utilizing advanced quantitative electroencephalography (qEEG) to identify your unique neurological patterns."
              icon={<Brain className="h-8 w-8" />}
            />
            
            <BenefitCard
              title="Targeted Intervention"
              description="Employing neuroscience-backed strategies to optimize specific neural pathways associated with executive function."
              icon={<ZapIcon className="h-8 w-8" />}
            />
            
            <BenefitCard
              title="Luxurious Retreat Experiences"
              description="Immersive environments designed to facilitate deep transformation and focus."
              icon={<Sparkles className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 px-4 bg-neural-900/30" id="outcomes">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Expected Outcomes</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              What can you expect by the end of the Peak Performance Program?
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-neural-900/50">
                <TabsTrigger value="overview" className="data-[state=active]:bg-neural-700">Overview</TabsTrigger>
                <TabsTrigger value="brain" className="data-[state=active]:bg-neural-700">Brain</TabsTrigger>
                <TabsTrigger value="body" className="data-[state=active]:bg-neural-700">Body</TabsTrigger>
                <TabsTrigger value="mindset" className="data-[state=active]:bg-neural-700">Mindset</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview" className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OutcomeItem
                  title="Enhanced Brain Efficiency"
                  description="Measurable improvements through qEEG pre- and post-program analysis."
                />
                <OutcomeItem
                  title="Increased Resilience"
                  description="Improved HRV, vitality, mood, and metabolic markers."
                />
                <OutcomeItem
                  title="Elevated Cognitive Function"
                  description="Greater calm, clarity, and executive decision-making."
                />
                <OutcomeItem
                  title="Sustainable Transformation"
                  description="Habit mastery for lasting lifestyle changes."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="brain" className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OutcomeItem
                  title="Enhanced Neuroplasticity"
                  description="Improved ability to form new neural connections and adapt to changes."
                />
                <OutcomeItem
                  title="Optimized Prefrontal Cortex"
                  description="Strengthened executive functions including decision-making and focus."
                />
                <OutcomeItem
                  title="Balanced Brain Chemistry"
                  description="Optimized neurotransmitter function for improved mood and motivation."
                />
                <OutcomeItem
                  title="Enhanced Cognitive Flexibility"
                  description="Greater ability to shift between different thinking modes and perspectives."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="body" className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OutcomeItem
                  title="Reduced Biological Age"
                  description="Trackable via telomere & blood age analysis."
                />
                <OutcomeItem
                  title="Improved Stress Response"
                  description="Optimized cortisol patterns and heart rate variability."
                />
                <OutcomeItem
                  title="Enhanced Physical Vitality"
                  description="Increased energy, stamina, and overall physical resilience."
                />
                <OutcomeItem
                  title="Optimized Sleep Architecture"
                  description="Improved quality and efficiency of sleep cycles."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="mindset" className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OutcomeItem
                  title="Deeper Purpose Alignment"
                  description="Higher legacy and life purpose clarity and fulfillment."
                />
                <OutcomeItem
                  title="Enhanced Decision-Making"
                  description="Improved cognitive processing for higher-quality decisions."
                />
                <OutcomeItem
                  title="Greater Emotional Intelligence"
                  description="Better recognition and management of emotions in self and others."
                />
                <OutcomeItem
                  title="Heightened Creativity"
                  description="Increased capacity for innovative thinking and problem-solving."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-16 px-4" id="consultation">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Ready to Unlock Your Ultimate Potential?</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Schedule a private, one-on-one conversation with our Program Lead, Dr. Dharmesh Shah, 
              to explore how this program can be tailored to your unique needs and aspirations.
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
                  <span>Overview of our neuroscience-based methodology</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Customized program recommendations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Answers to all your questions about the program</span>
                </li>
              </ul>
            </div>
            
            <div className="neural-card">
              <h3 className="text-2xl font-semibold mb-4">Schedule Your Consultation</h3>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-neural-800/30">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-neural-400 mr-2" />
              <span className="font-semibold text-xl">Peak Performance Program</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

// Missing import
import { CheckCircle } from "lucide-react";
