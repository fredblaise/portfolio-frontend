"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

type Props = {
  title: string;
  description: string;
  img_url: string;
  link: string;
  github_link: string;
};

const ProjectItem = ({
  title,
  description,
  img_url,
  link,
  github_link,
}: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="group relative w-full overflow-hidden rounded border border-neutral-300 md:w-[calc(50%_-_.75rem)]"
      >
        <div className="relative h-96 w-full">
          <Image
            src={img_url}
            fill={true}
            alt="portfolio project"
            className="cursor-pointer object-cover md:h-48"
          />
        </div>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-full max-w-xl transform flex-col gap-4 overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-neutral-800">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    {title}
                  </Dialog.Title>

                  <div className="relative h-60 w-full">
                    <Image
                      src={img_url}
                      alt={title}
                      fill
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <p className="text-sm">{description}</p>

                  <div className="ml-auto flex gap-4">
                    <Link href={github_link} target="_blank">
                      <Button>Github Repo</Button>
                    </Link>
                    <Link href={link} target="_blank">
                      <Button>Live Site</Button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectItem;
