"use client";

import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const leftBeams = document.querySelectorAll(".beam-left");
    const rightBeams = document.querySelectorAll(".beam-right");

    // Array to store individual beam Y positions
    const leftPosY = new Array(leftBeams.length).fill(0);
    const rightPosY = new Array(rightBeams.length).fill(window.innerHeight);

    // Array to store individual beam speeds for randomness
    const leftSpeeds = leftPosY.map(() => Math.random() * 0.5 + 0.2);
    const rightSpeeds = rightPosY.map(() => Math.random() * 0.5 + 0.2);

    const moveLeftBeams = () => {
      leftPosY.forEach((pos, index) => {
        leftPosY[index] += leftSpeeds[index];

        if (leftPosY[index] >= window.innerHeight) leftPosY[index] = 0;

        leftBeams[index].style.transform = `translateY(${leftPosY[index]}px)`;
      });

      requestAnimationFrame(moveLeftBeams);
    };

    const moveRightBeams = () => {
      rightPosY.forEach((pos, index) => {
        rightPosY[index] -= rightSpeeds[index];

        if (rightPosY[index] <= 0) rightPosY[index] = window.innerHeight;

        rightBeams[index].style.transform = `translateY(${rightPosY[index]}px)`;
      });

      requestAnimationFrame(moveRightBeams);
    };

    moveLeftBeams();
    moveRightBeams();
  }, []);

  return (
    <div className="min-h-screen bg-whitePrimary">
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Beam containers */}
          <div className="absolute left-0 w-1/2 h-full overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[0.5px] h-16 bg-gradient-to-t from-primary to-secondry beam-left"
                style={{ left: `${i * 10}%` }}
              ></div>
            ))}
          </div>

          <div className="absolute right-0 w-1/2 h-full overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[0.5px] h-16 bg-gradient-to-t from-secondry to-primary beam-right"
                style={{ right: `${i * 10}%` }}
              ></div>
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h4 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primaryText">
              Supercharge your URLs with ZipLynk
            </h4>
            <p className="text-xl md:text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primaryText to-primary">
              Streamline your processes with our cutting-edge SaaS solution
            </p>
            <a
              href="#"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
            >
              Start Your Free Trial
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
