import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const ExperienceSection = () => {
  return (
    <div className="bg-black font-heading flex flex-col justify center items-center mx-auto my-5 w-full p-8 gap-5">
      <div className="w-full lg:w-350 flex flex-col gap-5">
        <div className="text-white flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-350">
          <h1 className="font-bold text-[36px] lg:w-100">
            Experiences That <span className="text-secondary">Shaped Me</span>!
          </h1>
          <p className="leading-8 text-[16px] lg:w-80">
            From startups to side projects, every step has been a chance to
            learn, build, and level up.
          </p>
        </div>
        <Separator orientation="horizontal" className="w-full bg-gray-700" />

        {/* airbnb */}
        <div className="text-white flex flex-col lg:flex-row gap-5 lg:gap-50">
          <div className="flex flex-col gap-5 lg:w-200">
            <p className="text-gray-500">2025 - Present</p>
            <h1 className="font-semibold">Frontend Developer</h1>
          </div>

          <div className="border w-30 h-17 lg:w-80 lg:h-20 border-gray-800 flex justify-center items-center rounded-lg">
            <div className="border w-26 h-13 lg:w-31 lg:h-15 border-gray-800 flex justify-center rounded-lg items-center">
              <Image
                src="/assets/logo/airbnb.svg"
                alt="Airbnb"
                width={128}
                height={48}
                className="w-20 lg:w-25 h-auto"
              />
            </div>
          </div>
          <div>
            <p className="leading-8 text-gray-500 lg:w-120">
              Built responsive web interfaces using modern frameworks like
              React.js, ensuring seamless integration with backend systems.
              Optimized performance, implemented accessible designs, and
              delivered clean, reusable code to enhance user experience and
              scalability.
            </p>
          </div>
        </div>
        <Separator orientation="horizontal" className="w-full bg-gray-700" />

        {/* airtasker */}
        <div className="text-white flex flex-col lg:flex-row gap-5 lg:gap-50">
          <div className="flex flex-col gap-5 lg:w-200">
            <p className="text-gray-500">2025 - Present</p>
            <h1 className="font-semibold">Frontend Developer</h1>
          </div>

          <div className="border w-30 h-17 lg:w-80 lg:h-20 border-gray-800 flex justify-center items-center rounded-lg">
            <div className="border w-26 h-13 lg:w-31 lg:h-15 border-gray-800 flex justify-center rounded-lg items-center">
              <Image
                src="/assets/logo/airtasker.svg"
                alt="Airtasker"
                width={144}
                height={48}
                className="w-20 lg:w-25 h-auto"
              />
            </div>
          </div>
          <div>
            <p className="leading-8 text-gray-500 lg:w-120">
              Built responsive web interfaces using modern frameworks like
              React.js, ensuring seamless integration with backend systems.
              Optimized performance, implemented accessible designs, and
              delivered clean, reusable code to enhance user experience and
              scalability.
            </p>
          </div>
        </div>
        <Separator orientation="horizontal" className="w-full bg-gray-700" />

        {/* slack */}
        <div className="text-white flex flex-col lg:flex-row gap-5 lg:gap-50">
          <div className="flex flex-col gap-5 lg:w-200">
            <p className="text-gray-500">2025 - Present</p>
            <h1 className="font-semibold">Frontend Developer</h1>
          </div>

          <div className="border w-30 h-17 lg:w-80 lg:h-20 border-gray-800 flex justify-center items-center rounded-lg">
            <div className="border w-26 h-13 lg:w-31 lg:h-15 border-gray-800 flex justify-center rounded-lg items-center">
              <Image
                src="/assets/logo/slackWhite.svg"
                alt="Slack"
                width={82}
                height={31}
                className="w-20 lg:w-25 h-auto"
              />
            </div>
          </div>
          <div>
            <p className="leading-8 text-gray-500 lg:w-120">
              Built responsive web interfaces using modern frameworks like
              React.js, ensuring seamless integration with backend systems.
              Optimized performance, implemented accessible designs, and
              delivered clean, reusable code to enhance user experience and
              scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
