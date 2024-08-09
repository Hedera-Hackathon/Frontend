"use client";

import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import TruncatedCell from "../TruncatedCell";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarDashboard() {
  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [askOpen, setAskOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleWalletLogout = async () => {
    // Logic to handle wallet logout
    router.push("/"); // Use Next.js router for navigation
  };

  const handleSearchOpen = () => {
    setAskOpen(!askOpen);
  };

  const hideImage = pathname.startsWith("/admin/project/");

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 h-16 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between items-center w-[95%]">
              <div className="flex px-2 lg:px-4 mx-72">
                <div
                  className={`hidden lg:ml-6 lg:flex lg:space-x-8 ${hideImage ? "pl-24" : ""}`}
                >
                  <Link
                    href="/admin/dashboard"
                    className={classNames(
                      pathname === "/admin/dashboard"
                        ? "border-indigo-500 text-blue-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-bold"
                    )}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/admin/project"
                    className={classNames(
                      pathname === "/admin/project"
                        ? "border-indigo-500 text-blue-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-bold"
                    )}
                  >
                    Projects
                  </Link>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:gap-8 lg:items-center lg:justify-center">
                <button className="ml-4 flex gap-3 flex-shrink-0 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <Link href="/admin/ask-rumi"> Ask Anu</Link>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <p className="text-white pr-2">
                        {
                          <TruncatedCell text="0xasdfasdfasdfasdfasdfasdfasdfasdfa" />
                        }
                      </p>
                      <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmYB6XE3DV1YfFD3Y41ej68S8pg2lbxMecA&usqp=CAU"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {() => (
                          <button
                            type="button"
                            className="text-black focus:ring-4 focus:outline-none font-medium rounded-2xl text-sm mr-9 p-4 py-2 text-center"
                            onClick={handleWalletLogout}
                          >
                            {openWalletModal ? "Connect Wallet" : "Sign out"}
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
