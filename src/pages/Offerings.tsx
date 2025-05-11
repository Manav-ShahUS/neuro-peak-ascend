
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
            <div id="diagnostics">
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
              
              <div className="neural-card mt-4 p-6">
                <h3 className="text-xl font-semibold mb-3">Diagnostic Breakdown</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Comprehensive Biomarker Testing:</strong> Full spectrum blood work examining over 100 markers for optimization</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Advanced Energetic Assessment:</strong> Using biometric technology to map your energy system</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Cognitive Performance Mapping:</strong> Identifying mental strengths and areas for optimization</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Stress Response Analysis:</strong> Scientific measurement of your recovery capacity</span>
                  </li>
                </ul>
                <p className="mt-4 text-neural-200">
                  Our diagnostic phase creates the foundation for your customized transformation journey. By understanding your unique biological and energetic blueprint, we create a targeted protocol that delivers maximum results.
                </p>
              </div>
            </div>
            
            <div id="mentorship">
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
              
              <div className="neural-card mt-4 p-6">
                <h3 className="text-xl font-semibold mb-3">Mentorship Experience</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Dedicated Lead Mentor:</strong> Your primary guide throughout the program</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Domain Specialists:</strong> Access to experts in neuroscience, nutrition, mindfulness, and leadership</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Tailored Growth Plan:</strong> Customized roadmap based on your specific challenges and goals</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Real-Time Support:</strong> On-demand guidance during critical moments</span>
                  </li>
                </ul>
                <p className="mt-4 text-neural-200">
                  Our mentorship goes beyond typical coaching. We pair you with leaders who have walked the path you're on and have mastered the integration of professional excellence and personal wellbeing. Every session is designed to elevate your capacity and clarity.
                </p>
              </div>
            </div>
            
            <div id="retreats">
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
              
              <div className="neural-card mt-4 p-6">
                <h3 className="text-xl font-semibold mb-3">Retreat Experience</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Carefully Selected Locations:</strong> Environments that naturally enhance transformation</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Integrative Practices:</strong> Ancient wisdom traditions combined with modern science</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Small Group Dynamic:</strong> Intimate setting with fellow high-performers (maximum 8 participants)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Personalized Integration:</strong> Custom tools to incorporate learnings into daily life</span>
                  </li>
                </ul>
                <p className="mt-4 text-neural-200">
                  Our retreats create the space for profound shifts that aren't possible in everyday environments. Participants consistently report transformative breakthroughs that reshape their leadership approach and personal fulfillment.
                </p>
              </div>
            </div>

            <div id="nutrition">
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
              
              <div className="neural-card mt-4 p-6">
                <h3 className="text-xl font-semibold mb-3">Nutrition & Lifestyle Approach</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Personalized Nutrition Plan:</strong> Based on your unique biochemistry and goals</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Biohacking Protocols:</strong> Cutting-edge methods for optimizing mental clarity and energy</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Sleep Optimization:</strong> Science-backed approach to enhance recovery and cognitive function</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Peak Performance Rituals:</strong> Daily practices that integrate seamlessly into busy schedules</span>
                  </li>
                </ul>
                <p className="mt-4 text-neural-200">
                  Your physical vitality is the foundation of sustainable leadership. Our nutrition and lifestyle protocols are designed for busy executives who need practical, evidence-based solutions that deliver noticeable improvements in energy, clarity, and resilience.
                </p>
              </div>
            </div>

            <div id="accountability">
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
              
              <div className="neural-card mt-4 p-6">
                <h3 className="text-xl font-semibold mb-3">Accountability System</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Weekly Check-ins:</strong> Structured progress reviews and adjustments</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Digital Tracking Platform:</strong> Custom app for monitoring key metrics and habits</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Milestone Celebrations:</strong> Recognition of progress and breakthrough moments</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span><strong>Course Correction Support:</strong> Immediate guidance when challenges arise</span>
                  </li>
                </ul>
                <p className="mt-4 text-neural-200">
                  Transformation requires consistent action and support. Our accountability system provides the perfect balance of structure and flexibility, ensuring you implement key practices while adapting to the demands of leadership. This ongoing support is what transforms insights into lasting change.
                </p>
              </div>
            </div>
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
                        <h3 className="text-xl font-semibold mb-2">What Makes This Program Unique:</h3>
                        <p className="text-neural-200 mb-4">
                          The Peak Performers Program doesn't just focus on one aspect of leadership—it creates transformation across all dimensions that impact your performance and fulfillment:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Biological Optimization:</strong> Enhancing your physical foundation for sustained energy and resilience</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Cognitive Mastery:</strong> Sharpening decision-making and mental clarity under pressure</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Emotional Intelligence:</strong> Developing advanced capabilities for influence and connection</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Purpose Alignment:</strong> Creating congruence between your vision, values, and daily actions</span>
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
                        <h3 className="text-xl font-semibold mb-2">What Makes This Program Unique:</h3>
                        <p className="text-neural-200 mb-4">
                          The Executive Intensive is designed for leaders who need rapid, focused transformation in a specific area. The program features:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Accelerated Timeline:</strong> Concentrated transformation in just 8 weeks</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Precision Focus:</strong> Targeted intervention for your most pressing challenge</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Immediate Tools:</strong> Practical strategies you can implement right away</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>High-Touch Support:</strong> Intensive guidance during critical periods</span>
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
                        <h3 className="text-xl font-semibold mb-2">What Makes These Retreats Unique:</h3>
                        <p className="text-neural-200 mb-4">
                          Our retreats are designed to create the conditions for profound transformation in a compressed timeframe:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Sacred Containers:</strong> Environments specifically chosen for their transformative properties</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Immersive Methodology:</strong> Complete removal from daily patterns to allow new insights</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Peer Connection:</strong> Profound bonding with fellow leaders on similar journeys</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <span><strong>Integration Focus:</strong> Structured follow-up to ensure insights become lasting change</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Upcoming Retreats:</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <div>
                              <span className="block"><strong>July 2025:</strong> "Vision Quest" - Sedona, Arizona</span>
                              <span className="text-sm text-neural-300">A 5-day journey to reconnect with your deepest purpose</span>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <div>
                              <span className="block"><strong>September 2025:</strong> "Deep Renewal" - Bali, Indonesia</span>
                              <span className="text-sm text-neural-300">A 7-day immersion in ancient wisdom and modern science</span>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <Users className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                            <div>
                              <span className="block"><strong>November 2025:</strong> "Winter Wisdom" - Swiss Alps</span>
                              <span className="text-sm text-neural-300">A 4-day intensive for strategic clarity and renewal</span>
                            </div>
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
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Our custom organizational programs can include:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                      <span><strong>Team Assessment:</strong> Deep analysis of your leadership ecosystem</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                      <span><strong>Custom Leadership Development:</strong> Tailored growth plans for key executives</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                      <span><strong>Culture Alignment:</strong> Strategies to enhance team cohesion and purpose</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                      <span><strong>On-site Training:</strong> Workshops and immersive experiences for your entire team</span>
                    </li>
                  </ul>
                </div>
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
