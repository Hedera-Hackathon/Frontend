import React from "react";

const Welcome = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Revolutionizing Aid <br />
              with Blockchain.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Using Hedera Blockchain, Nirvik will streamline fund distribution,
              ensuring secure, transparent, and efficient aid to vulnerable
              communities globally.
            </p>
            <a
              href="https://themesberg.com/product/tailwind-css/landing-page"
              className="text-white bg-[#5b9bd4] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            >
              Create your project
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="./images/ai-earthquake.png"
              alt="hero image"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <span className="mt-4 text-gray-500 text-sm">Supported By</span>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <div className="flex items-center lg:justify-center">
              <img
                src="./images/orgs-logo/red-cross.jpg"
                alt="Red cross Nepal"
                width={150}
                height={29}
              />
            </div>
            <div className="flex items-center lg:justify-center">
              <img
                src="./images/orgs-logo/jci.png"
                alt="JCI Nepal"
                width={86}
                height={29}
              />
            </div>
            <div className="flex items-center lg:justify-center">
              <img
                src="./images/orgs-logo/merit.jpeg"
                alt="Merit Pokhara"
                width={86}
                height={29}
              />
            </div>
            <div className="flex items-center lg:justify-center">
              <img
                src="./images/orgs-logo/laxmi-adarsha.jpg"
                alt="Laxmi Adarsha"
                width={86}
                height={29}
              />
            </div>
            <div className="flex items-center lg:justify-center">
              <img
                src="./images/orgs-logo/jci.png"
                alt="JCI Nepal"
                width={86}
                height={29}
              />
            </div>
            <div className="flex items-center lg:justify-center">
              <img
                src="./images/orgs-logo/red-cross.jpg"
                alt="Red cross Nepal"
                width={150}
                height={29}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
