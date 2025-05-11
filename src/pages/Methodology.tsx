
import { GradientText } from "@/components/GradientText";
import MainNavigation from "@/components/MainNavigation";
import NeuralLines from "@/components/NeuralLines";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Brain, ChevronRight, ZapIcon, Activity, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Methodology = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <NeuralLines density="medium" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="mb-6">
              <GradientText as="span">Our Methodology</GradientText>
              <span className="block">Where Science Meets Spirituality</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
              A comprehensive approach that integrates cutting-edge science with timeless wisdom
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Content */}
      <section className="section-compact px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">The Four Pillars</h2>
              
              <div className="space-y-6">
                <Card className="neural-card">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neural-900 flex items-center justify-center border border-neural-700/50">
                      <Brain className="h-6 w-6 text-neural-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Cognitive Mastery</h3>
                      <p className="text-muted-foreground">
                        Advanced mental frameworks and techniques to sharpen focus, enhance decision-making, and master emotional intelligence.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="neural-card">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neural-900 flex items-center justify-center border border-neural-700/50">
                      <Activity className="h-6 w-6 text-neural-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Bioenergetic Optimization</h3>
                      <p className="text-muted-foreground">
                        Science-backed protocols to enhance physical vitality, cellular health, and energy management for sustained performance.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="neural-card">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neural-900 flex items-center justify-center border border-neural-700/50">
                      <ZapIcon className="h-6 w-6 text-neural-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Purpose Alignment</h3>
                      <p className="text-muted-foreground">
                        Deep work on clarifying personal mission, vision, and values to create authentic leadership impact.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="neural-card">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neural-900 flex items-center justify-center border border-neural-700/50">
                      <BarChart3 className="h-6 w-6 text-neural-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Strategic Execution</h3>
                      <p className="text-muted-foreground">
                        Frameworks to translate vision into reality, optimize systems, and lead teams with clarity and power.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
              
              <div className="space-y-6">
                <div className="neural-card">
                  <h3 className="text-xl font-semibold mb-4">1. Deep Diagnostics</h3>
                  <p className="text-muted-foreground mb-4">
                    We begin with comprehensive assessments of your current state—biologically, mentally, and in terms of leadership impact.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Advanced biomarker testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Cognitive performance assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Leadership impact inventory</span>
                    </li>
                  </ul>
                </div>
                
                <div className="neural-card">
                  <h3 className="text-xl font-semibold mb-4">2. Custom Blueprint</h3>
                  <p className="text-muted-foreground mb-4">
                    Based on your diagnostics, we create a personalized transformation plan with specific outcomes and milestones.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Tailored intervention strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Expert matching for your needs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Measurable outcome mapping</span>
                    </li>
                  </ul>
                </div>
                
                <div className="neural-card">
                  <h3 className="text-xl font-semibold mb-4">3. Implementation & Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Your journey combines intensive 1:1 work, immersive experiences, and daily practices designed for lasting change.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Regular 1:1 coaching sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Immersive retreat experiences</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Daily practice protocols</span>
                    </li>
                  </ul>
                </div>
                
                <div className="neural-card">
                  <h3 className="text-xl font-semibold mb-4">4. Continuous Evolution</h3>
                  <p className="text-muted-foreground mb-4">
                    Regular reassessments and adjustments ensure you continue to evolve and integrate your transformation.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Ongoing progress tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Strategy refinement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-neural-400" />
                      <span>Long-term integration support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-neural-600 hover:bg-neural-700 text-white" 
              onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})}
            >
              Discover Your Transformation
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Methodology;
