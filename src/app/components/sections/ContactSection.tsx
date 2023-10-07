"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/app/components/Button";

type Props = {};

const ContactSection = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("The email was sent succesfully.");
        },
        (error) => {
          console.log(error.text);
          alert("The email failed to send. Please try again.");
        },
      );

    form.current?.reset();
  };

  return (
    <div id="contact" className="mx-auto w-full max-w-6xl scroll-mt-12 pb-48">
      <div className="flex h-full w-full flex-col gap-6 px-4 py-8">
        <h1 className="text-6xl font-semibold max-sm:text-center">CONTACT</h1>
        <div className="mx-auto w-full max-w-xl">
          <form
            ref={form}
            onSubmit={(e) => sendEmail(e)}
            className="flex w-full flex-col gap-4"
          >
            <div>
              <label htmlFor="user_name" className="block">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                aria-label="Name"
                className="mt-1 block w-full rounded border border-gray-300 bg-transparent p-3 text-sm placeholder-gray-300 dark:text-gray-100 dark:placeholder-gray-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                aria-label="Email Address"
                className="mt-1 block w-full rounded border border-neutral-300 bg-transparent p-2.5 text-sm placeholder-gray-300 dark:placeholder-gray-500"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                aria-label="Subject"
                className="mt-1 block w-full rounded border border-neutral-300 bg-transparent p-3 text-sm placeholder-gray-300 dark:placeholder-gray-500"
                placeholder="Enter the subject"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                aria-label="Message"
                rows={6}
                className="mt-1 block w-full rounded border border-neutral-300 bg-transparent p-2.5 text-sm placeholder-gray-300 dark:placeholder-gray-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <Button type="submit">SEND</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
