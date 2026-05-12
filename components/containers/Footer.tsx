import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-10 flex flex-col lg:flex-row items-start justify-center lg:justify-around gap-10">
      <div className="flex flex-row gap-5 order-1 lg:order-2">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors"
        >
          <Image
            src="/assets/logo/facebook.svg"
            alt="Facebook"
            width={11}
            height={21}
            className="w-5 h-5"
          />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors"
        >
          <Image
            src="/assets/logo/instagram.svg"
            alt="Instagram"
            width={21}
            height={21}
            className="w-5 h-5"
          />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors"
        >
          <Image
            src="/assets/logo/linkedin.svg"
            alt="LinkedIn"
            width={17}
            height={17}
            className="w-5 h-5"
          />
        </a>

        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors"
        >
          <Image
            src="/assets/logo/tiktok.svg"
            alt="TikTok"
            width={18}
            height={20}
            className="w-5 h-5"
          />
        </a>
      </div>
      <div className="order-2 lg:order-1">
        <h1 className="text-left">
          © 2025 Edwin Anderson. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
