import ConnectButton from "@/components/buttons";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <div className="flex h-screen flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              {/* <Image
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                width={0}
                height={0}
              /> */}
              {/* <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2> */}
            </div>

            <div className="mt-10">
              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900 text-xl">
                      Sign in to your account
                    </span>
                  </div>
                </div>

                <div className="flex mt-5 items-center justify-center">
                  <ConnectButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="https://www.unicef.org/nepal/sites/unicef.org.nepal/files/styles/hero_tablet/public/Rahat%2047%20Sudha%20Devi%20Mandal_0.jpg.webp?itok=0Icaqiq-"
            alt=""
            width={1000}
            height={1000}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
