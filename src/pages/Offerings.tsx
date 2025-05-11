
import { GradientText } from "@/components/GradientText";
import MainNavigation from "@/components/MainNavigation";
import NeuralLines from "@/components/NeuralLines";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Target, ZapIcon, ShieldCheck, CheckCircle, Users, Sparkles, Clock, Utensils } from "lucide-react";
import { useState } from "react";
import BenefitCard from "@/components/BenefitCard";

const Offerings = () => {
  const [activeTab, setActiveTab] = useState("flagship");

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <NeuralLines density="low" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="mb-6">
              <GradientText as="span">Our Offerings</GradientText>
              <span className="block">Transformation Tailored To Your Needs</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
              Explore our specialized programs designed for different stages of leadership evolution
            </p>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="section-compact px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>The Peak Performance Experience</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Every program includes these transformative elements, tailored to your specific journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard
              title="Deep Diagnostics"
              description="Comprehensive assessment for longevity, vitality & energetic clarity"
              icon={<Brain className="h-8 w-8" />}
            >
              <img 
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2573&auto=format&fit=crop" 
                alt="Deep Diagnostics" 
                className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80"
              />
            </BenefitCard>
            
            <BenefitCard
              title="1-on-1 Mentorship"
              description="Personalized guidance with world-class experts across domains"
              icon={<ZapIcon className="h-8 w-8" />}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop" 
                alt="1-on-1 Mentorship" 
                className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80"
              />
            </BenefitCard>
            
            <BenefitCard
              title="Immersive Sacred Retreats"
              description="Powerful environments designed to reset, renew, and rewire your system"
              icon={<Sparkles className="h-8 w-8" />}
            >
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2370&auto=format&fit=crop" 
                alt="Immersive Sacred Retreats" 
                className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80"
              />
            </BenefitCard>

            <BenefitCard
              title="Lifestyle & Nutrition Coaching"
              description="Customized protocols to fuel high performance and optimize wellbeing"
              icon={<Utensils className="h-8 w-8" />}
            >
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2340&auto=format&fit=crop" 
                alt="Lifestyle & Nutrition Coaching" 
                className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80"
              />
            </BenefitCard>

            <BenefitCard
              title="Continuous Accountability"
              description="Structured support system ensuring measurable transformation"
              icon={<Clock className="h-8 w-8" />}
            >
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2340&auto=format&fit=crop" 
                alt="Continuous Accountability" 
                className="w-full h-32 object-cover object-center rounded-lg mb-6 opacity-80"
              />
            </BenefitCard>
          </div>

          <div className="text-center mt-8 mb-12">
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Every detail is intentional. Every session is curated.
              The goal: to align your biology, mindset, purpose, and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Content */}
      <section className="section-compact px-4 bg-neural-900/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Program Options</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Choose the transformational journey that fits your current needs and aspirations
            </p>
          </div>

          <Tabs defaultValue="flagship" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="flagship">Flagship Program</TabsTrigger>
              <TabsTrigger value="executive">Executive Intensive</TabsTrigger>
              <TabsTrigger value="retreats">Immersive Retreats</TabsTrigger>
            </TabsList>
            <TabsContent value="flagship" className="mt-6">
              <Card className="neural-card">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">The Peak Performers Program</h2>
                    <p className="text-muted-foreground mb-6">
                      Our signature 6-month transformational journey for visionary leaders ready to redefine what's possible.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Program Includes:</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Comprehensive biomarker and performance assessment</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>12 personalized 1:1 coaching sessions</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Two 3-day immersive retreats</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Personalized nutrition and lifestyle protocol</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Weekly accountability check-ins</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Unlimited email support</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Exclusive access to our leadership resource library</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Ideal For:</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>CEOs and Founders leading organizations through growth or transformation</span>
                          </li>
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Senior executives seeking to amplify their leadership impact</span>
                          </li>
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>High-performing professionals ready for their next evolution</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        size="lg" 
                        className="bg-neural-600 hover:bg-neural-700 text-white"
                      >
                        Apply Now
                      </Button>
                      <Button 
                        variant="outline"
                        size="lg" 
                        className="border-neural-700 text-neural-400 hover:bg-neural-900/50"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3">
                    <div className="rounded-lg overflow-hidden h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop" 
                        alt="Peak Performers Program" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="executive" className="mt-6">
              <Card className="neural-card">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">Executive Intensive</h2>
                    <p className="text-muted-foreground mb-6">
                      A concentrated 8-week program designed for executives facing specific leadership challenges or transitions.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Program Includes:</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Targeted assessment focused on your specific challenge</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>6 intensive coaching sessions</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>One 2-day intensive workshop</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Customized nutrition and lifestyle recommendations</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Weekly accountability check-ins</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Customized toolkit for your specific situation</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>30 days of implementation support</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Ideal For:</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Leaders navigating critical transitions or promotions</span>
                          </li>
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Executives facing specific high-stakes challenges</span>
                          </li>
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Teams undergoing significant organizational change</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        size="lg" 
                        className="bg-neural-600 hover:bg-neural-700 text-white"
                      >
                        Apply Now
                      </Button>
                      <Button 
                        variant="outline"
                        size="lg" 
                        className="border-neural-700 text-neural-400 hover:bg-neural-900/50"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3">
                    <div className="rounded-lg overflow-hidden h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2342&auto=format&fit=crop" 
                        alt="Executive Intensive" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="retreats" className="mt-6">
              <Card className="neural-card">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">Immersive Retreats</h2>
                    <p className="text-muted-foreground mb-6">
                      Transformative 3-7 day experiences in carefully selected environments designed to catalyze breakthrough insights.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Program Includes:</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Carefully curated environments to support transformation</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Small group (max 8 participants)</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Customized experiential activities</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Nutritional support and wellness practices</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>One 1:1 integration session post-retreat</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>30-day accountability program</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span>Group follow-up for continued integration</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Upcoming Retreats:</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>July 2025:</strong> "Vision Quest" - Sedona, Arizona</span>
                          </li>
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>September 2025:</strong> "Deep Renewal" - Bali, Indonesia</span>
                          </li>
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>November 2025:</strong> "Winter Wisdom" - Swiss Alps</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        size="lg" 
                        className="bg-neural-600 hover:bg-neural-700 text-white"
                      >
                        Reserve Your Spot
                      </Button>
                      <Button 
                        variant="outline"
                        size="lg" 
                        className="border-neural-700 text-neural-400 hover:bg-neural-900/50"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3">
                    <div className="rounded-lg overflow-hidden h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2370&auto=format&fit=crop" 
                        alt="Immersive Retreats" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Programs */}
      <section className="section-compact px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>Custom Programs</GradientText></h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Need something specifically tailored to your organization?
            </p>
          </div>
          
          <div className="neural-card">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-32 h-32 mx-auto bg-neural-900/70 rounded-full flex items-center justify-center">
                  <Target className="w-16 h-16 text-neural-400" />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Organizational Transformation</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We work with select organizations to create custom leadership development programs that align with your specific culture, challenges, and objectives.
                </p>
                <p className="mb-6">
                  Whether you're scaling rapidly, navigating a major transition, or seeking to elevate your leadership culture, we can design a program that meets your unique needs.
                </p>
                <Button 
                  size="lg" 
                  className="bg-neural-600 hover:bg-neural-700 text-white"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Offerings;
