import Image from "next/image";

const CodeDesignSection = () => {
  return (
    <div className="mx-auto flex flex-col my-15 bg-linear-to-t from-pink-50 to-white font-heading">
      <div className="flex-flex-col font-heading p-5 mx-auto gap-10">
        <h1 className="text-center font-bold text-[36px]">
          Code, Design, and Everything in Between
        </h1>
        <p className="text-center text-[20px] leading-10">
          These are the technologies that power my workflow and bring ideas to
          life.
        </p>
      </div>
      
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 mx-auto">

        {/* html */}
        <div className="bg-secondary w-45 h-80 rounded-full flex flex-col justify-center items-center p-4 gap-4">
          <div className="bg-white rounded-full w-18 h-18 p-3 flex items-center justify-center">
            <Image src="/assets/logo/html.svg" alt="HTML" width={35} height={35} className="w-10 h-10" />
          </div>
          <h1 className="font-semibold text-[20px]">HTML</h1>
          <p className="text-[16px] text-center">
            Crafting semantic, accessible HTML structures.
          </p>
        </div>

        {/* css */}
        <div className="border-slate-400 border w-45 h-80 rounded-full flex flex-col justify-center items-center p-4 gap-4">
          <div className="bg-slate-100 rounded-full w-18 h-18 p-3 flex items-center justify-center">
            <Image src="/assets/logo/css.svg" alt="CSS" width={30} height={36} className="w-10 h-10" />
          </div>
          <h1 className="font-semibold text-[20px]">CSS</h1>
          <p className="text-[16px] text-center">
            Crafting semantic, accessible HTML structures.
          </p>
        </div>

        {/* javascript */}
        <div className="bg-secondary hidden lg:flex w-45 h-80 rounded-full flex-col justify-center items-center p-4 gap-4">
          <div className="bg-white rounded-full w-18 h-18 p-3 flex items-center justify-center">
            <Image src="/assets/logo/javascript.svg" alt="JavaScript" width={24} height={24} className="w-15 h-15" />
          </div>
          <h1 className="font-semibold text-[20px]">Javascript</h1>
          <p className="text-[16px] text-center">
            Crafting semantic, accessible HTML structures.
          </p>
        </div>

        {/* react */}
        <div className="border-slate-400 hidden lg:flex border w-45 h-80 rounded-full flex-col justify-center items-center p-4 gap-4">
          <div className="bg-slate-100 rounded-full w-18 h-18 p-3 flex items-center justify-center">
            <Image src="/assets/logo/react.svg" alt="React" width={21} height={19} className="w-15 h-15" />
          </div>
          <h1 className="font-semibold text-[20px]">React</h1>
          <p className="text-[16px] text-center">
            Crafting semantic, accessible HTML structures.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CodeDesignSection;
