/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-sky-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Call for Papers
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Important Dates
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Committee
                                    </a>

                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Conferences
                                    </a>

                                    <a
                                        href="/speakers"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Speakers
                                    </a>

                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Gallery
                                    </a>

                                    <a
                                        href="/submission"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Submission
                                    </a>

                                    <a
                                        href="/registration"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Registration
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Sponsorship
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Contact
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-sky-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-600 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Call for Papers
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Important Dates
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Committee
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Conferences
                                </a>

                                <a
                                    href="/speakers"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Speakers
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Gallery
                                </a>

                                <a
                                    href="/submission"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Submission
                                </a>

                                <a
                                    href="/registration"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Registration
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Sponsorship
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Nav;
