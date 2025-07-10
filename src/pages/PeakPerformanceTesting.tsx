
import { useState } from "react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientText } from "@/components/GradientText";
import { Check, FileText, Gauge, ShieldCheck, Brain, TestTube, Heart, CircleCheck } from "lucide-react";

const PeakPerformanceTesting = () => {
  const [selectedPlan, setSelectedPlan] = useState<"neurocode" | "longevitycode" | "eternacode" | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 relative bg-gradient-to-b from-neural-900 to-neural-950">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" 
              alt="Peak Performance" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <div className="mb-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-neural-800/40 backdrop-blur-sm border border-neural-700/30">
              <TestTube className="mr-2 h-4 w-4 text-neural-400" />
              <span className="text-sm font-medium text-neural-300">Diagnostic Protocol</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText>Peak Performance Diagnostic Protocol</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-neural-300 mb-10 max-w-3xl mx-auto">
              Your Personalized Gateway to Limitless Energy, Clarity & Purpose
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-neural-600 hover:bg-neural-700 text-white"
                onClick={() => document.getElementById('diagnostic-plans')?.scrollIntoView({behavior: 'smooth'})}
              >
                Explore Diagnostic Plans
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-neural-600 text-neural-300 hover:bg-neural-800/50"
                onClick={() => document.getElementById('performance-domains')?.scrollIntoView({behavior: 'smooth'})}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Step Into Data-Driven Clarity Section */}
        <section className="py-16 px-4 bg-neural-900">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Step Into Data-Driven Clarity Before You Transform
                </h2>
                <p className="text-neural-300 mb-6">
                  This exclusive diagnostic protocol is the first step for CEOs, leaders, and high-performers ready to take their wellness and leadership to the next level. Before you redesign your inner terrain, you need a complete map—backed by science and aligned with soul.
                </p>
                <div className="bg-neural-800/30 border border-neural-700/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-neural-400" />
                    Who Is This For?
                  </h3>
                  <ul className="space-y-3">
                    {["CEOs, Founders & Entrepreneurs", "C-Suite Executives (CXOs, MDs, VPs)", "High-Stakes Professionals & Knowledge Workers", "Elite Athletes & Peak Performers", "Visionaries, Coaches & Social Leaders", "Individuals Seeking Personal Mastery & Long-Term Vitality"].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-neural-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neural-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-neural-400 italic">
                    If you're navigating stress, decision fatigue, health plateaus, or seeking more aligned leadership energy—this protocol is your starting point.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-neural-700/30">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional using diagnostic tools" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Start Here Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-neural-900 to-neural-950">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-neural-800/40 backdrop-blur-sm border border-neural-700/30">
              <Gauge className="mr-2 h-4 w-4 text-neural-400" />
              <span className="text-sm font-medium text-neural-300">Why Start Here?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Build Your Foundation With Precision</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "360° Health View",
                  description: "Gain a comprehensive view of your physiological, cognitive, and energetic health profiles.",
                  icon: CircleCheck
                },
                {
                  title: "Early Warning Signals",
                  description: "Discover hidden bottlenecks and potential issues before they manifest as problems.",
                  icon: ShieldCheck
                },
                {
                  title: "Evidence-Based Benchmarks",
                  description: "Track your transformation with scientific measurements for tangible progress.",
                  icon: FileText
                },
              ].map((item, index) => (
                <Card key={index} className="bg-neural-800/20 border-neural-700/30 text-center">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto bg-neural-800/70 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-neural-400" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neural-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Domains Section */}
        <section id="performance-domains" className="py-20 px-4 bg-neural-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="mb-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-neural-800/40 backdrop-blur-sm border border-neural-700/30">
                <TestTube className="mr-2 h-4 w-4 text-neural-400" />
                <span className="text-sm font-medium text-neural-300">Performance Domains</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The 4 Performance Domains We Diagnose
              </h2>
              <p className="text-neural-300 max-w-2xl mx-auto">
                Our comprehensive approach evaluates all critical areas that impact your performance and wellbeing.
              </p>
            </div>

            {/* Domain 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-neural-700/30 order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Biological Testing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Heart className="mr-3 h-6 w-6 text-neural-500" />
                  1. Biological Resilience & Vitality
                </h3>
                <p className="text-neural-300 mb-6">
                  This category gives you an inside look at how your body is performing under the surface—from cardiovascular efficiency to inflammation and aging markers. These tests help identify early warning signs, optimize recovery cycles, and tailor your nutrition and movement to extend your high-performance lifespan.
                </p>
                <div className="bg-neural-800/30 border border-neural-700/20 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Tests Included:</h4>
                  <ul className="space-y-2">
                    {["Advanced Blood Test Profile", "Pulmonary Function Test (PFT)", "Resting ECG", "Vital Health Metrics", "Tumor Marker Screening", "Inflammatory Marker Analysis (Elite only)", "DNA Telomere Length Assay (Elite only)", "Biological Blood Age Estimation"].map((test, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-neural-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neural-300">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Domain 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Brain className="mr-3 h-6 w-6 text-neural-500" />
                  2. Cognitive & Mental Performance
                </h3>
                <p className="text-neural-300 mb-6">
                  Your brain is your primary asset. These assessments measure neuro-function, emotional resilience, cognitive flexibility, and stress adaptability. They uncover hidden burnout, focus traps, and mindset patterns, setting the stage for sustained peak mental flow.
                </p>
                <div className="bg-neural-800/30 border border-neural-700/20 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Tests Included:</h4>
                  <ul className="space-y-2">
                    {["qEEG Brain Mapping", "Cognitive Function & Mind Age Assessment", "Perceived Stress Scale (PSS)", "PHQ-9 Mental Health Screening", "Peak Performance Coaching Consultation"].map((test, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-neural-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neural-300">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-neural-700/30">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Brain Testing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Domain 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-neural-700/30 order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Energetic Alignment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Gauge className="mr-3 h-6 w-6 text-neural-500" />
                  3. Energetic Alignment & Recovery
                </h3>
                <p className="text-neural-300 mb-6">
                  Stress lives in the nervous system—and these diagnostics reveal how well your body manages energy, recovers from pressure, and stays in a state of flow. We assess your biofield, breath, and chakra system to realign purpose with physiology.
                </p>
                <div className="bg-neural-800/30 border border-neural-700/20 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Tests Included:</h4>
                  <ul className="space-y-2">
                    {["Heart Rate Variability (HRV)", "HRV-Based Pulse Diagnosis", "HRV + Chakra Energy Mapping", "Legacy Quotient Evaluation"].map((test, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-neural-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neural-300">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Domain 4 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-neural-500" />
                  4. Metabolic & Lifestyle Blueprinting
                </h3>
                <p className="text-neural-300 mb-6">
                  What you eat, how you move, and the habits you live by—all influence performance. These tests decode your gut health, fitness capacity, and day-to-day behavior patterns to design a life that supports your ambitions without burning you out.
                </p>
                <div className="bg-neural-800/30 border border-neural-700/20 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Tests Included:</h4>
                  <ul className="space-y-2">
                    {["Lifestyle & Habit Assessment", "Fitness Evaluation (8 Key Parameters)", "Gut Microbiome Profiling"].map((test, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-neural-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neural-300">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-neural-700/30">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Metabolic Testing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Plans Section */}
        <section id="diagnostic-plans" className="py-20 px-4 bg-gradient-to-t from-neural-900 to-neural-950">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="mb-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-neural-800/40 backdrop-blur-sm border border-neural-700/30">
                <FileText className="mr-2 h-4 w-4 text-neural-400" />
                <span className="text-sm font-medium text-neural-300">Choose Your Path</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Diagnostic Plans
              </h2>
              <p className="text-neural-300 max-w-2xl mx-auto">
                Select the plan that aligns with your wellness and leadership goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* NeuroCode Plan */}
              <Card className={`bg-neural-800/20 border ${selectedPlan === 'neurocode' ? 'border-neural-500' : 'border-neural-700/30'} h-full transition-all`}>
                <CardHeader className="text-center pb-6">
                  <div className="mb-2 px-3 py-1 bg-neural-700/30 text-neural-300 inline-block rounded-full mx-auto text-sm">
                    Essential
                  </div>
                  <CardTitle className="text-2xl">NeuroCode</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹30,900</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="space-y-4">
                    <div className="bg-neural-800/30 p-5 rounded-lg">
                      <h4 className="font-medium mb-3">15 Essential Tests Including:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">Lifestyle Assessment</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">Advanced Blood Profile</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">qEEG Brain Mapping</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">HRV Analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">Life Coach Consultation</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-neural-400 text-sm italic">
                      Perfect for cognitive and neurological optimization.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${selectedPlan === 'neurocode' ? 'bg-neural-500 hover:bg-neural-600' : 'bg-neural-700 hover:bg-neural-600'}`}
                    onClick={() => setSelectedPlan('neurocode')}
                  >
                    Select NeuroCode
                  </Button>
                </CardFooter>
              </Card>

              {/* LongevityCode Plan */}
              <Card className={`bg-neural-800/20 border ${selectedPlan === 'longevitycode' ? 'border-neural-500' : 'border-neural-700/30'} h-full transition-all`}>
                <CardHeader className="text-center pb-6">
                  <div className="mb-2 px-3 py-1 bg-neural-600/30 text-neural-300 inline-block rounded-full mx-auto text-sm">
                    Comprehensive
                  </div>
                  <CardTitle className="text-2xl">LongevityCode</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹49,000</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="space-y-4">
                    <div className="bg-neural-800/30 p-5 rounded-lg">
                      <h4 className="font-medium mb-3">18 Advanced Tests Including:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">All NeuroCode Tests</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">Tumor Markers</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">Gut Microbiome Test</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">Legacy Quotient</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-neural-400 text-sm italic">
                      Focused on long-term health and vitality optimization.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${selectedPlan === 'longevitycode' ? 'bg-neural-500 hover:bg-neural-600' : 'bg-neural-700 hover:bg-neural-600'}`}
                    onClick={() => setSelectedPlan('longevitycode')}
                  >
                    Select LongevityCode
                  </Button>
                </CardFooter>
              </Card>

              {/* EternaCode Plan */}
              <Card className={`bg-neural-800/20 border ${selectedPlan === 'eternacode' ? 'border-neural-500' : 'border-neural-700/30'} h-full transition-all`}>
                <CardHeader className="text-center pb-6">
                  <div className="mb-2 px-3 py-1 bg-neural-500/30 text-neural-300 inline-block rounded-full mx-auto text-sm">
                    Ultimate
                  </div>
                  <CardTitle className="text-2xl">EternaCode</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹69,000</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="space-y-4">
                    <div className="bg-neural-800/30 p-5 rounded-lg">
                      <h4 className="font-medium mb-3">20 Elite Tests Including:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">All LongevityCode Tests</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">Inflammatory Markers</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">DNA Telomere Assay</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-neural-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neural-300">Complete Cellular Analysis</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-neural-400 text-sm italic">
                      The ultimate in personalized health and performance optimization.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${selectedPlan === 'eternacode' ? 'bg-neural-500 hover:bg-neural-600' : 'bg-neural-700 hover:bg-neural-600'}`}
                    onClick={() => setSelectedPlan('eternacode')}
                  >
                    Select EternaCode
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="lg" 
                disabled={!selectedPlan}
                className={`${selectedPlan ? 'bg-neural-500 hover:bg-neural-600' : 'bg-neural-700 opacity-70 cursor-not-allowed'} text-white`}
                onClick={() => window.open('https://calendly.com/drdharmeshshah/peak-performance-consultation', '_blank')}
              >
                Book Your Diagnostic Now
              </Button>
              <p className="mt-4 text-neural-400">
                This is not just a test—it's your personalized, science-backed starting point for total reinvention.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PeakPerformanceTesting;
