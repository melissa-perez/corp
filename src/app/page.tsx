import Hero from "@/components/Hero";
import homeImg from "/public/images/home.jpg";
export default function HomePage() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="Car factory"
      title="Professional Cloud Hosting"
    />
  );
}
