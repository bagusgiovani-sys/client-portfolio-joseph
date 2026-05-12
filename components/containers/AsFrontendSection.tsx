import { Separator } from "@/components/ui/separator";

const AsFrontendSection = () => {
  return (
    <div className="w-full lg:w-360 mx-auto flex flex-col justify-center items-center p-5 gap-7 font-heading">
      <div className="p-2 lg:w-240 my-10">
        <h1 className="text-center font-medium text-[36px]">
          As frontend developers , we bring designs to life with{" "}
          <span className="text-primary-200">clean</span>,
          <span className="text-primary-200">responsive code</span> that blends
          creativity 🎨 with usability 🌟.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
        <div className="flex flex-col gap-5 font-heading">
          <div className="w-15 h-15 rounded-full border-2 border-slate-300 flex items-center justify-center">
            <span className="text-3xl">⚙️</span>
          </div>
          <h1 className="font-bold text-[25px]">COMPONENT-BASED DEVELOPMENT</h1>
          <p className="text-[20px] leading-10">
            Reusable, scalable code built with modern frameworks like React or
            Vue.
          </p>
        </div>
        {/* Mobile */}
        <Separator orientation="horizontal" className="lg:hidden" />

        {/* Desktop */}
        <Separator orientation="vertical" className="hidden lg:block h-auto! w-px bg-slate-300 self-stretch" />
        <div className="flex flex-col gap-3 font-heading">
          <div className="w-15 h-15 rounded-full border-2 border-slate-300 flex items-center justify-center">
            <span className="text-3xl">🎨</span>
          </div>
          <h1 className="font-bold text-[25px]">
            PIXEL-PERFECT UI IMPLEMENTATION
          </h1>
          <p className="text-[20px] leading-10">
            Translating design into high-fidelity user interfaces with attention
            to detail.
          </p>
        </div>
        {/* Mobile */}
        <Separator orientation="horizontal" className="lg:hidden" />

        {/* Desktop */}
        <Separator orientation="vertical" className="hidden lg:block h-auto! w-px bg-slate-300 self-stretch" />
        <div className="flex flex-col gap-3 font-heading">
          <div className="w-15 h-15 rounded-full border-2 border-slate-300 flex items-center justify-center">
            <span className="text-3xl">📱</span>
          </div>
          <h1 className="font-bold text-[25px]">
            RESPONSIVE & ACCESSIBLE DESIGN
          </h1>
          <p className="text-[20px] leading-10">
            Optimized layouts that work seamlessly across all screen sizes and
            devices.
          </p>
        </div>
        {/* Mobile */}
        <Separator orientation="horizontal" className="lg:hidden" />
      </div>
    </div>
  );
};

export default AsFrontendSection;
