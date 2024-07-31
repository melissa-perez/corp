import Hero from "@/components/Hero";
import scaleImg from "/public/images/scale.jpg";
export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Steel factory"
      title="Scale your app to infinity"
    />
  );
}
