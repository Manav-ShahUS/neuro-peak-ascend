
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ConsultationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request received",
        description: "Dr. Dharmesh Shah will be in touch with you soon.",
      });
      setName("");
      setEmail("");
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name
        </label>
        <Input
          id="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-secondary/50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-secondary/50"
        />
      </div>
      <Button 
        type="button"
        className="w-full bg-neural-600 hover:bg-neural-700 text-white"
        onClick={() => window.open('https://calendly.com/holisticaworld/peak-performance-consultation', '_blank')}
      >
        Schedule a Consultation
      </Button>
      <p className="text-xs text-center text-muted-foreground mt-2">
        Your information is confidential and secure
      </p>
    </form>
  );
};

export default ConsultationForm;
