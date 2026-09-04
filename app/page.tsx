import Hero from "@/components/sections/Hero";
import PullQuote from "@/components/sections/PullQuote";
import Explainer from "@/components/sections/Explainer";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CreditCheckResources from "@/components/sections/CreditCheckResources";
import ConsultationForm from "@/components/sections/ConsultationForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <PullQuote />
      <Explainer />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CreditCheckResources />
      <ConsultationForm />
    </main>
  );
}
