import Button from "@/app/_components/ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="padding-x flex-1 pt-36">
        <h1 className="hero__title">
          Find, book and rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <Button
          label="Explore Cars"
          sx="bg-primary-blue rounded-full text-white mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" fill alt="Hero" className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
