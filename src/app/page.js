"use client";
import Bowser from "bowser";
import { useEffect, useState } from "react";

export default function Home() {
  const [platform, setPlatform] = useState(null);

  useEffect(() => {
    const browser = Bowser.getParser(window.navigator.userAgent);
    setPlatform(browser.getPlatform().type);
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-y-10">
      <h1 className="text-lg">
        You're seeing this in a: <span className="font-bold">{platform}</span>
      </h1>
      <div className="flex gap-x-12">
        <div>
          <h2>Mobile:</h2>
          <div
            className={`w-16 h-28 ${
              platform === "mobile" ? "bg-green-500" : "bg-slate-400"
            }`}
          ></div>
        </div>
        <div>
          <h2>Tablet:</h2>
          <div
            className={`w-16 h-28 ${
              platform === "tablet" ? "bg-green-500" : "bg-slate-400"
            }`}
          ></div>
        </div>
        <div>
          <h2>Desktop:</h2>
          <div
            className={`w-16 h-28 ${
              platform === "desktop" ? "bg-green-500" : "bg-slate-400"
            }`}
          ></div>
        </div>
      </div>
    </main>
  );
}
