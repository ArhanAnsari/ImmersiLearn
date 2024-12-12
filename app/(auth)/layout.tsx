import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            ImmersiLearn
          </span>
        </h1>

          <div className="space-y-5 text-white">
            <h1 className="h1">Learn with Fun</h1>
            <p className="body-1">
              Discover a world of interactive learning, where education meets entertainment.
            </p>
          </div>
          <Image
            src="/assets/images/files-2.png"
            alt="Learning"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            ImmersiLearn
          </span>
        </h1>
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;