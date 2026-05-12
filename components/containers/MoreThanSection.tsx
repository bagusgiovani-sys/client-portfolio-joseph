import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IoMdCheckmark } from "react-icons/io";
import { HiOutlineX } from "react-icons/hi";

const MoreThanSection = () => {
  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center gap-5 font-heading p-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-[36px] font-bold text-center">
          More Than Just Code
        </h1>
        <p className="text-center text-[20px] leading-10">
          We care about design, performance, and user experience all in one.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mx-5 justify-center items-center">
        <div className="bg-secondary w-full max-w-100 lg:max-w-150 h-170 rounded-4xl flex flex-col justify-center items-center p-5 gap-5">
          <h1 className="font-extrabold text-[27px]">With Me</h1>
          <Avatar className="bg-primary-300 w-30 h-30 flex items-end justify-center overflow-hidden rounded-full">
            <AvatarImage
              src="/assets/image/person.svg"
              alt="@shadcn"
              className="w-28 h-28 object-contain"
            />
          </Avatar>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <IoMdCheckmark />
            React Expert
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <IoMdCheckmark />
            Precise Website Implementation
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <IoMdCheckmark />
            TypeScript Proficiency
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <IoMdCheckmark />
            Clean, Maintainable Code
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <IoMdCheckmark />
            Responsive Website Development
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <IoMdCheckmark />
            Performance Optimization
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <IoMdCheckmark />
            UI Design Proficiency (Figma)
          </p>
        </div>

        <div className="border border-slate-400 w-full max-w-100 lg:max-w-150 h-170 rounded-4xl flex flex-col justify-center items-center p-5 gap-5">
          <h1 className="font-extrabold text-[27px]">Another Talent</h1>
          <Avatar className="bg-gray-200 w-30 h-30 flex items-center justify-center overflow-hidden rounded-full">
            <AvatarImage
              src="/assets/image/profile.svg"
              alt="@shadcn"
              className="w-20 h-20 object-contain"
            />
          </Avatar>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <HiOutlineX className="text-red-500" />
            Basic React Knowledge
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <HiOutlineX className="text-red-500" />
            Inconsistent Design Translation
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <HiOutlineX className="text-red-500" />
            Little to No TypeScript Knowledge
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <HiOutlineX className="text-red-500" />
            Unstructured Code
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <HiOutlineX className="text-red-500" />
            Inconsistent Responsiveness
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <HiOutlineX className="text-red-500" />
            Slow and Heavy Websites
          </p>
          <p className="flex items-center gap-2 font-semibold text-[17px]">
            <HiOutlineX className="text-red-500" />
            No Design Skills
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreThanSection;
