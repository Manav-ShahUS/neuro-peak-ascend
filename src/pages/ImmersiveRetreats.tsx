
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { GradientText } from "@/components/GradientText";
import NeuralLines from "@/components/NeuralLines";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, CheckCircle, Clock, MapPin, Users, Mountain, Navigation, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ImmersiveRetreats = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <NeuralLines density="high" className="opacity-30" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="mb-6">
              <GradientText as="span">CEO Peak Performance Retreat</GradientText>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-neural-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>4 Days | 3 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Exclusive 5-Star Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span>₹2,00,000</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button 
                size="lg" 
                className="bg-neural-600 hover:bg-neural-700 text-white" 
                onClick={() => document.getElementById('apply')?.scrollIntoView({behavior: 'smooth'})}
              >
                Reserve Your Spot <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="rounded-lg overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2340&auto=format&fit=crop" 
                alt="Mountain retreat" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2340&auto=format&fit=crop" 
                alt="Peaceful lake retreat" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-compact px-4 bg-neural-900/30" id="who">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              <GradientText>Who This Retreat Is For & What You're Facing</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="neural-card">
              <h3 className="text-2xl font-semibold mb-6">Ideal Participants</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>CEOs & Founders leading high-stakes ventures</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Entrepreneurs & Visionaries shaping tomorrow's industries</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>C‑Suite Leaders (CXOs, MDs, VPs) steering organizational growth</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Business Owners & Industry Leaders seeking sustainable success</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>High-Performing Professionals craving scalable wellness</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Change‑makers & Social Leaders driving positive impact</span>
                </li>
              </ul>
            </Card>
            
            <Card className="neural-card">
              <h3 className="text-2xl font-semibold mb-6">Core Challenges</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Chronic Stress & Decision Fatigue dulling your edge</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Declining Vitality & Hidden Health Risks undermining performance</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Lack of Purpose Alignment eroding motivation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Overthinking, Anxiety & Emotional Reactivity hampering clarity</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Feeling Stuck at the Peak without a growth roadmap</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Time Poverty & Self-Neglect deprioritizing well-being</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Isolation at the Top craving authentic connection</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                  <span>Desire for Legacy, Not Just Longevity inspiring deeper impact</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              <Mountain className="inline-block mr-2 h-8 w-8 text-neural-400" />
              Welcome to Your Inner Everest
              <Mountain className="inline-block ml-2 h-8 w-8 text-neural-400" />
            </h3>
            <div className="mt-8 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&auto=format&fit=crop" 
                alt="Scenic mountain view" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-compact px-4" id="included">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>✨ What's Included</GradientText></h2>
          </div>

          <div className="neural-card mb-12">
            <h3 className="text-2xl font-semibold mb-6">Pre-Retreat Diagnostics (7–10 days before)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>HRV & Vagal Tone Scan</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Chakra Energy Mapping</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Prakriti-Based Lifestyle Scan</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Brain Mapping (qEEG)</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Emotional & Life Purpose Quotient</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Biological Age & Blood Biomarkers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-lg overflow-hidden h-[300px]">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=3648&auto=format&fit=crop"
              >
                <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="rounded-lg overflow-hidden h-[300px]">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop"
              >
                <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Agenda */}
      <section className="section-compact px-4 bg-neural-900/30" id="agenda">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>📅 Retreat Agenda Highlights</GradientText></h2>
          </div>

          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="day1">Day 1: RESET</TabsTrigger>
              <TabsTrigger value="day2">Day 2: REALIGN</TabsTrigger>
              <TabsTrigger value="day3">Day 3: RISE</TabsTrigger>
              <TabsTrigger value="day4">Day 4: REINVENT</TabsTrigger>
            </TabsList>
            
            <TabsContent value="day1" className="space-y-4">
              <div className="neural-card">
                <h3 className="text-2xl font-semibold mb-6">Day 1: RESET – Coming Home to Self</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Arrival & Welcome Ceremony</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Grounding Breathwork & Silent Cave Meditation</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Opening Circle: The Inner Terrain</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Sound Healing & Reflective Journaling</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Fireside Dialogue: What Are You Really Running Toward?</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2370&auto=format&fit=crop" 
                  alt="Day 1 Retreat Activities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="day2" className="space-y-4">
              <div className="neural-card">
                <h3 className="text-2xl font-semibold mb-6">Day 2: REALIGN – Meeting the Leader Within</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Guided Movement & Nervous System Reboot</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Biofeedback HRV & Chakra Healing Session</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Masterclass: Neurobiology of Burnout & Resilience</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Inner Journey: Wise Leader Visualization</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Yoga Nidra & Executive Fatigue Recovery</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Mastermind: Decisions, Dharma & Direction</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=2432&auto=format&fit=crop" 
                  alt="Day 2 Retreat Activities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>

            <TabsContent value="day3" className="space-y-4">
              <div className="neural-card">
                <h3 className="text-2xl font-semibold mb-6">Day 3: RISE – The Recalibrated Self</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Morning Stillness & Journaling Ritual</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Masterclass: Leading from Legacy, Not Ego</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Workshop: Your Life Purpose Blueprint</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Shadow Integration Group Process</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>High-Intensity Sound Bath & Fire Release Ceremony</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop" 
                  alt="Day 3 Retreat Activities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>

            <TabsContent value="day4" className="space-y-4">
              <div className="neural-card">
                <h3 className="text-2xl font-semibold mb-6">Day 4: REINVENT – From Insight to Implementation</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Silent Morning & Gratitude Meditation</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Vision Mapping Your 5D Roadmap</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>1:1 Micro-Consults with Dr. Dharmesh</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Closing Circle & Takeaway Ritual Box</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
                    <span>Departure & Post-Retreat Follow-Up Plan</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2340&auto=format&fit=crop" 
                  alt="Day 4 Retreat Activities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Outcomes & Offerings */}
      <section className="section-compact px-4" id="outcomes">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neural-card">
              <h3 className="text-2xl font-semibold mb-6">🌟 Outcome</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Personalized Peak Performance Blueprint</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Clarity on Life Purpose & Legacy Goals</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Nervous System Reset & Emotional Resilience</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Scientifically Validated Wellness Profile</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Deep Reconnection with Inner Stillness</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Strategies for Sustained Flow, Focus & Stamina</span>
                </li>
              </ul>
            </div>

            <div className="neural-card">
              <h3 className="text-2xl font-semibold mb-6">🎁 Exclusive Offerings</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Pre-retreat lifestyle & diagnostic reports</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Bio-individualized health & recovery plan</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Luxury accommodation & sattvic gourmet meals</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Personalized journal, affirmations, herbal boosters</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0" />
                  <span>Access to an inner-circle network of achievers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section-compact px-4 bg-neural-900/30" id="investment">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>💰 Investment</GradientText></h2>
            <p className="text-2xl font-semibold mb-2">₹2,00,000 (All Inclusive)</p>
            <p className="text-xl mb-8">Limited to 10 participants.</p>
            
            <Button 
              size="lg" 
              id="apply"
              className="bg-neural-600 hover:bg-neural-700 text-white"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})}
            >
              Reserve Your Spot <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-compact px-4" id="testimonials">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>🌟 Testimonials</GradientText></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="neural-card">
              <p className="italic mb-4">
                "Attending the CEO Peak Performance Retreat was transformative. The blend of cutting-edge diagnostics and soulful ceremonies helped me regain clarity, optimize my energy, and align my business vision with my deeper purpose. I returned to the boardroom more focused, resilient, and inspired than ever before."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neural-800 flex items-center justify-center">
                  <span className="text-neural-400 font-semibold">AM</span>
                </div>
                <div>
                  <p className="font-semibold">Anjali Menon</p>
                  <p className="text-sm text-neural-400">CEO of TechStride Innovations</p>
                </div>
              </div>
            </Card>
            
            <Card className="neural-card">
              <p className="italic mb-4">
                "Dr. Dharmesh's science-backed approach demystified my stress patterns and rewired my leadership mindset. The personalized protocols and one-on-one consults were game-changers. I now lead with calm confidence and a clear legacy-driven roadmap."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neural-800 flex items-center justify-center">
                  <span className="text-neural-400 font-semibold">RK</span>
                </div>
                <div>
                  <p className="font-semibold">Rajiv Kapoor</p>
                  <p className="text-sm text-neural-400">Founder of GreenWave Group</p>
                </div>
              </div>
            </Card>

            <Card className="neural-card">
              <p className="italic mb-4">
                "This retreat exceeded every expectation. From precise biometrics to the fire ceremony, each moment was engineered for peak transformation. I've tripled my productivity while maintaining a newfound sense of balance."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neural-800 flex items-center justify-center">
                  <span className="text-neural-400 font-semibold">PS</span>
                </div>
                <div>
                  <p className="font-semibold">Priya Shah</p>
                  <p className="text-sm text-neural-400">COO of Zenith Capital</p>
                </div>
              </div>
            </Card>

            <Card className="neural-card">
              <p className="italic mb-4">
                "The intimate setting and high-touch guidance unlocked breakthroughs I didn't know were possible. I walked away with a concrete action plan, deeper self-awareness, and a network of peers who hold me accountable to my highest vision."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neural-800 flex items-center justify-center">
                  <span className="text-neural-400 font-semibold">VP</span>
                </div>
                <div>
                  <p className="font-semibold">Vikram Patel</p>
                  <p className="text-sm text-neural-400">MD at NovaHealth</p>
                </div>
              </div>
            </Card>

            <Card className="neural-card">
              <p className="italic mb-4">
                "As someone skeptical of retreats, I was blown away. The EEG mapping and chakra scanning illuminated blind spots in my leadership style. This holistic, data-driven experience elevated both my well-being and professional performance."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neural-800 flex items-center justify-center">
                  <span className="text-neural-400 font-semibold">ND</span>
                </div>
                <div>
                  <p className="font-semibold">Neha Desai</p>
                  <p className="text-sm text-neural-400">VP Strategy at LuminaTech</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-compact px-4 bg-neural-900/30" id="faq">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4"><GradientText>❓ Frequently Asked Questions</GradientText></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">Who is this retreat for?</h4>
              <p>This retreat is exclusively for CEOs, founders, senior executives, and change-makers who are high-performers outwardly but seek deeper alignment, resilience, and clarity on their legacy. It's for those who recognize that sustained peak performance comes from an inner recalibration, not just outer hustle.</p>
            </Card>
            
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">What makes this retreat different from typical wellness or leadership programs?</h4>
              <p>This isn't a surface-level seminar or a vacation masquerading as wellness. It's a science-backed immersion combining advanced diagnostics (like HRV, qEEG, Chakra Mapping) with introspective journeys. Every session is engineered to unlock clarity, restore vitality, and align your leadership with purpose.</p>
            </Card>
            
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">What outcomes can I expect?</h4>
              <p>You'll leave with a personalized performance blueprint based on your bio-individual data. Expect heightened emotional intelligence, increased heart rate variability, clarity of purpose, and a precise roadmap to integrate insights into real-world leadership.</p>
            </Card>
            
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">Is there any pre-work before the retreat?</h4>
              <p>Yes. Each participant undergoes advanced biometric and psychometric evaluations 7–10 days before the retreat. These assessments form the foundation of your customized experience, ensuring every session is relevant and results-driven.</p>
            </Card>
            
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">What's included in the ₹2,00,000 investment?</h4>
              <p>Everything—from a luxurious 3-night, 4-day stay, gourmet sattvic meals, cutting-edge diagnostic assessments, group and 1:1 sessions with Dr. Dharmesh, to a ritual transformation kit. No hidden charges—just deep transformation.</p>
            </Card>
            
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">Will my privacy and personal data be protected?</h4>
              <p>Absolutely. All diagnostic data and personal insights are handled with the highest confidentiality and are solely used to enhance your personal retreat journey. Your trust and privacy are paramount.</p>
            </Card>
            
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">Do I need to be spiritual to benefit from this retreat?</h4>
              <p>Not at all. The foundation is neuroscience, physiology, and performance psychology. Optional spiritual elements are seamlessly integrated for those inclined, but the experience delivers results whether you're pragmatic, skeptical, or spiritually curious.</p>
            </Card>
            
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">Can I bring a guest or business partner?</h4>
              <p>To preserve the deep introspective space, this retreat is designed for individual participation only. A couple's or co-founder edition may be introduced in the future.</p>
            </Card>
            
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">How physically demanding is the retreat?</h4>
              <p>This is a rejuvenating experience. Expect gentle movements, breathwork, meditative practices, and energy sessions. There are no strenuous physical activities—just intentional, restorative techniques.</p>
            </Card>
            
            <Card className="neural-card">
              <h4 className="text-xl font-semibold mb-3">Is there support after the retreat?</h4>
              <p>Yes. Post-retreat, you receive an integration roadmap, personalized recommendations, and access to a private network for ongoing mentorship and accountability. The journey doesn't end—it evolves.</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-neural-600 hover:bg-neural-700 text-white"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})}
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImmersiveRetreats;
