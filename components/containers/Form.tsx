"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modalType, setModalType] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name && form.email && form.message) {
      setModalType("success");
    } else {
      setModalType("error");
    }
  };

  return (
    <>
      <Card className="mx-auto my-5 font-heading w-full max-w-100 h-auto">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="font-bold">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="h-12"
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email" className="font-bold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12"
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message" className="font-bold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="h-45 resize-none"
                  onChange={handleChange}
                />
              </div>
            </div>

            <CardFooter className="flex-col gap-2 mt-6 p-0">
              <Button
                type="submit"
                className="w-full h-15 font-bold bg-primary-300 rounded-full text-white"
              >
                Let&apos;s Talk
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>

      {modalType && (
        <CustomModal type={modalType} close={() => setModalType(null)} />
      )}
    </>
  );
}

export default Form;

const CustomModal = ({
  type,
  close,
}: {
  type: "success" | "error";
  close: () => void;
}) => {
  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-999">
      <div className="relative flex flex-col items-center">
        {/* ===== Background orange setengah modal ===== */}
        <div
          className={`absolute top-0 w-full h-50 rounded-t-2xl z-10 ${
            isSuccess ? "bg-secondary" : "bg-gray-200"
          }`}
        />

        {/* ===== Gambar di depan card ===== */}
        <div className="absolute -top-28 z-20">
          <Image
            src={
              isSuccess
                ? "/assets/image/popSuccess.svg"
                : "/assets/image/popFailed.svg"
            }
            alt={isSuccess ? "Success" : "Error"}
            width={263}
            height={294}
            className="h-80 w-80 object-contain"
          />
        </div>

        {/* ===== Modal card ===== */}
        <div className="bg-white rounded-2xl w-87 lg:w-150 pt-60 p-6 text-center relative z-0 overflow-hidden">
          <h2 className="text-xl font-bold mb-2">
            {isSuccess ? "Got Your Message!" : "Message Failed to Send"}
          </h2>

          <p className="text-gray-600 font-medium mb-6">
            {isSuccess
              ? "Really appreciate you reaching out. I'll be in touch soon."
              : "Sorry about that. Please check your connection and try again."}
          </p>

          <Button
            onClick={close}
            className={`px-25 py-4 rounded-full text-white ${
              isSuccess ? "bg-primary-300" : "bg-primary-300"
            }`}
          >
            {isSuccess ? "Back to Home" : "Try Again"}
          </Button>
        </div>
      </div>
    </div>
  );
};
