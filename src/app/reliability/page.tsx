import Hero from "@/components/Hero";
import reliabilityImg from "/public/images/reliability.jpg";
export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="Man welding"
      title="Super high reliability hosting"
    />
  );
}
