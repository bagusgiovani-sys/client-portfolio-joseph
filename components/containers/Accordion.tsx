"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "technologies",
    trigger: "What technologies do you work with?",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    value: "remote",
    trigger: "Do you work on freelance or remote projects?",
    content:
      "Yes! I'm open to freelance contracts and fully remote opportunities. I'm comfortable working across different time zones and collaborating via tools like Slack, Notion, and GitHub. Whether it's a short-term project or ongoing engagement, I'm flexible.",
  },
  {
    value: "figma",
    trigger: "Can you convert Figma or Sketch designs into code?",
    content:
      "Absolutely. Translating designs into pixel-perfect, responsive code is one of my core strengths. I work directly from Figma files, match spacing, typography, and colors precisely, and make sure the implementation holds up on all screen sizes.",
  },
  {
    value: "backend",
    trigger: "Do you collaborate with backend developers or teams?",
    content:
      "Yes, I enjoy working in cross-functional teams. I'm comfortable consuming REST APIs and GraphQL endpoints, communicating about data contracts, and coordinating on integration points. I've worked alongside backend developers to ship full-stack features smoothly.",
  },
  {
    value: "fulltime",
    trigger: "Are you available for full-time roles?",
    content:
      "I'm actively open to full-time frontend developer positions. If you have a role that aligns with my skills in React, Next.js, and UI implementation, feel free to reach out via the contact form below — I'd love to have a conversation.",
  },
];

export function AccordionSection() {
  return (
    <Accordion
      type="multiple"
      className="max-w-full lg:w-300 min-h-125 font-heading"
    >
      {items.map((item, index) => (
        <AccordionItem key={item.value} value={item.value} className="p-5">
          <AccordionTrigger className="font-bold text-[16px] lg:text-[22px]">
            <div className="flex items-start gap-4 text-left">
              <span className="text-black shrink-0 w-8">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed">{item.trigger}</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pl-12 text-gray-600">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionSection;
