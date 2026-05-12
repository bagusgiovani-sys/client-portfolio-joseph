import Image from "next/image";
import { TbStarFilled } from "react-icons/tb";

const Testimoni = () => {
  return (
    <div className="w-full mx-auto my-5 flex flex-col justify-center items-center gap-5 font-heading p-8">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-[36px] text-center">
          What They Say About Working With Me
        </h1>
        <p className="text-center leading-8">
          Real words from clients, teammates, and mentors I’ve collaborated with
          on various projects.
        </p>
      </div>

      <div className="relative w-full h-120 ">
        {/* Layer 1 */}
        <div className="absolute top-1/2 -translate-y-[46%] lg:-translate-y-[40%] left-1/2 -translate-x-1/2 w-70 lg:w-280 h-120 lg:h-90 bg-primary-300/20 rounded-4xl"></div>

        {/* Layer 2 */}
        <div className="absolute top-1/2 -translate-y-[48%] lg:-translate-y-[45%] left-1/2 -translate-x-1/2 w-80 lg:w-290 h-120 lg:h-90 bg-primary-300/50 rounded-4xl"></div>

        {/* Layer 3 */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-90 lg:w-300 h-120 lg:h-90 bg-primary-300 rounded-4xl p-7 gap-7 flex flex-col justify-center items-center text-white text-center">
          <div className="flex gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <TbStarFilled key={i} className="text-yellow-400 w-5 h-5" />
            ))}
          </div>

          <p className="leading-8 font-semibold">
            “Working with Edwin Anderson was a smooth experience from start to
            finish. He translated our design into clean, responsive code and
            even suggested improvements we hadn’t thought of. Highly
            recommended!”
          </p>

          <Image src="/assets/image/person2.svg" alt="Sarah Tan" width={64} height={64} />

          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-semibold">Sarah Tan</h1>
            <p className="text-[15px]">Product Manager at Finovate</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Testimoni;
