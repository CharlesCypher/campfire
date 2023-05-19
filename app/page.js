"use client";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`w-full max-w-screen-xl mx-auto pt-10 px-6 md:px-10 ${darkMode ? "dark" : ""}`}>
      {/* <header className="w-full relative border- bg-gradient-to-tl from-green-400 to-orange-500 rounded-sm p-px"> */}
      <header className="w-full relative border border-zinc-400 rounded-lg p-px">
        <nav className="flex justify-between items-center px-4 py-4">
          <h3 className="text-xl font-medium">Campfire</h3>
          <div className="md:flex justify-center hidden">
            <ul className="flex">
              <li className="mx-4">
                <a href="#">Ideas</a>
              </li>
              <li className="mx-4">
                <a href="#">Find a team</a>
              </li>
              <li className="mx-4">
                <a href="#">FAQs</a>
              </li>
              <li className="mx-4">
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
          <button className="bg-gradient-to-b from-green-300 to-yellow-300 text-black font-medium py-2 px-6 rounded-md hidden md:block">
            Connect Wallet
          </button>
          <ul className="flex md:hidden">Menu</ul>
        </nav>
      </header>
      <div className="w-full max-w-screen-xl mx-auto">
        <main className="min-h-[80vh] bg-hero-image w-full">
          <section className="text-center my-32">
            <div className=""></div>
            <h1 className="text-3xl mb-4 font-medium text-white md:text-5xl lg:text-7xl">
              Join Web3 hackathon,
              <br /> make an impact.
            </h1>
            <p className="text-neutral-300 w-full mx-auto mb-10 text-base md:w-1/2 md:text-lg lg:text-xl lg:w-2/6 lg:leading-8">
              Sync up with people who share your interests, to develop the decentralized technologies of the future.
            </p>
            <button className="bg-yellow-300 text-black capitalize px-10 py-2 rounded-md text-base font-semibold cursor-pointer md:px-12 md:py-3 md:text-base lg:text-lg">
              Register Today
            </button>
          </section>
        </main>
        <section className="text-center flex justify-center py-8 min-h-[40vh]">
          <div className="w-full mx-auto">
            <h3 className="text-xl font-medium mb-4 md:text-2xl lg:text-3xl">Sponsors</h3>
            <div className="flex flex-wrap items-center justify-around w-10/12 gap-3 mx-auto">
              <span className="flex justify-center flex-1">Quotient</span>
              <span className="flex justify-center flex-1">Catalog</span>
              <span className="flex justify-center flex-1">Discord</span>
              <span className="flex justify-center flex-1">Notion</span>
              <span className="flex justify-center flex-1">SOLANA</span>
            </div>
          </div>
        </section>
        <section className="w-full py-8 mb-32">
          <div className="md:flex items-center">
            <div className="">
              <div className="flex items-center">
                <h3 className="text-xl font-medium md:text-2xl lg:text-3xl">Meet IRL</h3>
                <span className="bg-green-500 rounded-full py-1 px-3 mx-3 text-sm font-semibold text-black">Coming soon</span>
              </div>
              <p className="text-neutral-300 w-full my-6 text-base md:w-4/5 md:text-lg lg:text-xl lg:leading-8">
                Your neighbourhood will soon experience campfire. Visit coworking places across the world to meet hackathon builders, find teammates,
                and discover campfire development.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-6 lg:gap-y-4">
              <span className="flex items-center justify-center bg-zinc-800 px-8 py-2 rounded-full md:px-10">New York</span>
              <span className="flex items-center justify-center bg-zinc-800 px-8 py-2 rounded-full md:px-10">London</span>
              <span className="flex items-center justify-center bg-zinc-800 px-8 py-2 rounded-full md:px-10">Abuja</span>
              <span className="flex items-center justify-center bg-zinc-800 px-8 py-2 rounded-full md:px-10">Berlin</span>
              <span className="flex items-center justify-center bg-zinc-800 px-8 py-2 rounded-full md:px-10">Accra</span>
              <span className="flex items-center justify-center bg-zinc-800 px-8 py-2 rounded-full md:px-10">Singapore</span>
              <span className="flex items-center justify-center bg-zinc-800 px-8 py-2 rounded-full md:px-10">Venice</span>
              <span className="flex items-center justify-center bg-zinc-800 px-8 py-2 rounded-full md:px-10">Delhi</span>
              <span className="flex items-center justify-center bg-zinc-800 px-8 py-2 rounded-full md:px-10">Paris</span>
            </div>
          </div>
          <button className="bg-orange-600 py-2 px-10 rounded-md text-black font-medium lg:py-2.5 lg:px-12 lg:text-lg">See all locations</button>
        </section>
        <section>
          <div className="flex flex-col w-full items-center">
            <h3 className="text-xl font-medium mb-4 md:text-2xl lg:text-3xl">Prizes</h3>
            <p className="text-neutral-300 w-full mx-auto mb-8 text-center text-base md:w-2/5 md:mx-auto md:text-lg lg:text-xl lg:leading-8">
              Send out your project now! The top performers will recieve honors, rewards and glory.
            </p>
          </div>
          <div className="w-full flex flex-col flex-nowrap justify-center items-center">
            <div className="w-full flex">
              <span className="flex justify-center flex-1">1</span>
              <span className="flex justify-center flex-1">2</span>
              <span className="flex justify-center flex-1">3</span>
            </div>
            <div className="w-full flex my-4">
              <span className="flex justify-center flex-1">4</span>
              <span className="flex justify-center flex-1">5</span>
              <span className="flex justify-center flex-1">6</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
