import Image from "next/image";
import Form from "@/components/containers/Form";

const WorkSection = () => {
  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-5 p-5 font-heading">
      <div className="flex flex-col p-5 gap-4">
        <h1 className="font-bold text-[36px] text-left">Let&apos;s Work Together</h1>
        <p className="text-[16px] text-left leading-8">
          Have a project in mind or just want to say hi? Drop me a message — I&apos;d
          love to hear from you.
        </p>
        <div className="flex justify-center items-center">
          <Image
            src="/assets/portofolio/allPortofolio.svg"
            alt="Portfolio preview"
            width={361}
            height={110}
            className="w-full max-w-200 h-auto"
          />
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center mt-15">
        <Image
          src="/assets/image/beardman.svg"
          alt="Developer illustration"
          width={192}
          height={171}
          className="absolute -top-16 z-10 w-50 h-auto"
        />
        <section className="mt-20">
          <Form />
        </section>
      </div>
    </div>
  );
};

export default WorkSection;
