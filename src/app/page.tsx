"use client";

import { useState, useEffect } from "react";
import { FloatingCard } from "@/components/FloatingCard";
import {
  Gavel,
  FileText,
  Receipt,
  Hexagon,
  ListChecks,
  Sun,
  Moon,
} from "lucide-react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from system preference
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDark(true);
    }
  }, []);

  return (
    <main
      className={`min-h-[100dvh] transition-colors duration-500 flex items-center justify-center overflow-hidden relative font-sans selection:bg-indigo-500/30 ${isDark ? "bg-[#0A0C12]" : "bg-[#F8F9FC]"
        }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`absolute top-8 left-8 z-50 p-3 rounded-xl transition-all duration-300 shadow-lg ${isDark
          ? "bg-[#1A1D25] text-amber-400 hover:bg-[#252A35]"
          : "bg-white text-indigo-600 hover:bg-indigo-50"
          } border ${isDark ? "border-gray-800" : "border-gray-100"}`}
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Background Decorative Pills */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Left side pills */}
        <div
          className={`absolute top-[45%] -left-[100px] w-[320px] h-[95px] rounded-full rotate-[-10deg] transition-colors duration-500 ${isDark ? "bg-[#161B26]" : "bg-[#EEF2F7]"
            }`}
        />
        <div
          className={`absolute top-[62%] -left-[60px] w-[500px] h-[105px] rounded-full transition-colors duration-500 ${isDark ? "bg-[#161B26]" : "bg-[#EEF2F7]"
            }`}
        />
        <div
          className={`absolute top-[78%] -left-[40px] w-[600px] h-[100px] rounded-full transition-colors duration-500 ${isDark ? "bg-[#161B26]" : "bg-[#EEF2F7]"
            }`}
        />

        {/* Right side pills */}
        <div
          className={`absolute top-[5%] -right-[100px] w-[350px] h-[110px] rounded-full rotate-[10deg] transition-colors duration-500 ${isDark ? "bg-[#161B26]" : "bg-[#EEF2F7]"
            }`}
        />
        <div
          className={`absolute top-[20%] -right-[60px] w-[500px] h-[100px] rounded-full transition-colors duration-500 ${isDark ? "bg-[#161B26]" : "bg-[#EEF2F7]"
            }`}
        />
        <div
          className={`absolute top-[35%] -right-[30px] w-[350px] h-[95px] rounded-full transition-colors duration-500 ${isDark ? "bg-[#161B26]" : "bg-[#EEF2F7]"
            }`}
        />
      </div>

      <div className="container mx-auto px-8 lg:px-16 pt-20 pb-12 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-[1400px] z-20 min-h-screen">
        {/* Left Content Area */}
        <div className="flex flex-col space-y-9 w-full lg:max-w-[750px] relative z-20 mt-16">
          <h1
            className={`text-[86px] sm:text-[68px] lg:text-[88px] font-normal tracking-tight leading-[1.02] transition-colors duration-500 whitespace-nowrap ${isDark ? "text-[#94A3B8]" : "text-[#A5ADBB]"
              }`}
          >
            A single platform to <br />
            <span
              className={`font-bold transition-colors duration-500 ${isDark ? "text-white" : "text-[#747D8C]"
                }`}
            >
              manage
            </span>{" "}
            every part of <br />
            your{" "}
            <span
              className={`font-bold transition-colors duration-500 ${isDark ? "text-white" : "text-[#747D8C]"
                }`}
            >
              legal work
            </span>
          </h1>
          <p
            className={`text-[20px] lg:text-[22px] max-w-[600px] leading-[1.4] font-medium tracking-tight mt-4 px-1 transition-colors duration-500 ${isDark ? "text-[#818CF8]" : "text-[#4B61FF]"
              }`}
          >
            Track matters, coordinate schedules, manage
            <br />
            clients, centralize documents, and handle
            <br />
            communication - all in one system.
          </p>
        </div>

        {/* Right Floating Elements Area */}
        <div className="relative h-[800px] w-full flex items-center justify-center z-30 lg:ml-8 xl:ml-12">
          <div className="relative w-full h-[750px] max-w-[900px] pointer-events-none -mt-16">
            {/* Billing Card */}
            <FloatingCard
              color={isDark ? "bg-[#4338CA] text-white" : "bg-[#3852F6] text-white"}
              rotation="rotate-[12deg]"
              icon={
                <div className="ml-4">
                  <Receipt size={34} strokeWidth={2.5} />
                </div>
              }
              label="Billing"
              className={`absolute top-[44%] left-[20%] lg:left-[22%] w-[580px] h-[115px] z-30 pointer-events-auto transition-all duration-500 ${isDark
                ? "shadow-[0_25px_50px_-12px_rgba(67,56,202,0.4)]"
                : "shadow-[0_25px_50px_-12px_rgba(56,82,246,0.45)]"
                }`}
              delay={0.1}
            />

            {/* Matters Card */}
            <FloatingCard
              color="bg-[#D97216] text-white"
              rotation="rotate-[-10deg]"
              icon={
                <div className="relative flex items-center justify-center w-14 h-14 ml-4">
                  <Hexagon
                    size={48}
                    strokeWidth={2.5}
                    className="absolute rotate-90"
                  />
                  <Gavel
                    size={24}
                    strokeWidth={3}
                    className="rotate-[-25deg]"
                  />
                </div>
              }
              label="Matters"
              className={`absolute top-[72%] left-[-95%] lg:left-[-62%] w-[420px] h-[110px] z-20 pointer-events-auto transition-all duration-500 ${isDark
                ? "shadow-[0_25px_50px_-12px_rgba(217,114,22,0.3)]"
                : "shadow-[0_25px_50px_-12px_rgba(217,114,22,0.35)]"
                }`}
              delay={0.2}
            />

            {/* Variant Card: John Doe */}
            <FloatingCard
              color={isDark ? "bg-[#1E293B] border border-gray-700" : "bg-[#A4AEE9]"}
              rotation="rotate-[3deg]"
              className={`absolute top-[72%] left-[5%] lg:left-[25%] w-[480px] h-[115px] z-40 p-0 pointer-events-auto transition-all duration-500 ${isDark
                ? "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                : "shadow-[0_25px_50px_-12px_rgba(164,174,233,0.5)]"
                }`}
              delay={0.4}
            >
              <div className="flex w-full h-[100%] items-center pl-[28px] py-2">
                {/* Orange Indicator line */}
                <div className="w-[6px] h-[52px] bg-[#F18D13] rounded-full shrink-0" />
                <div className="flex pl-[20px] pr-4 gap-[20px] w-full h-full items-center">
                  <div
                    className={`w-[68px] h-[68px] rounded-full overflow-hidden shrink-0 flex items-center justify-center relative shadow-sm transition-colors duration-500 ${isDark ? "bg-[#334155]" : "bg-[#EFE8FE]"
                      }`}
                  >
                    <svg
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="68"
                      height="68"
                      className="mt-3 scale-125"
                    >
                      <circle cx="18" cy="14" r="6" fill={isDark ? "#94A3B8" : "#3E343A"} />
                      <path
                        d="M18 20C11.3726 20 7 24 7 30H29C29 24 24.6274 20 18 20Z"
                        fill={isDark ? "#64748B" : "#3D3A3A"}
                      />
                      <rect
                        x="13"
                        y="11"
                        width="10"
                        height="2.5"
                        fill={isDark ? "#1E293B" : "#111"}
                        rx="1"
                      />
                      <path
                        d="M11 9 Q 18 6 25 9"
                        stroke={isDark ? "#1E293B" : "#111"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col flex-1 justify-center -space-y-[0.5px]">
                    <p
                      className={`text-[17px] font-bold leading-snug tracking-wide transition-colors duration-500 ${isDark ? "text-white" : "text-[#1D1A4A]"
                        }`}
                    >
                      John Doe - Portal
                    </p>
                    <p
                      className={`text-[14px] font-semibold pr-[4px] mt-[1.5px] leading-[1.3] w-full transition-colors duration-500 ${isDark ? "text-gray-400" : "text-[#8189BB]"
                        }`}
                    >
                      Hey! Could you please review a document for me?
                    </p>
                    <p
                      className={`text-[13px] font-bold tracking-wide mt-[4px] transition-colors duration-500 ${isDark ? "text-indigo-400" : "text-[#A0A5CA]"
                        }`}
                    >
                      <span
                        className={`underline decoration-[2px] underline-offset-[3px] ${isDark ? "decoration-indigo-900" : "decoration-[#D7D9EB]"
                          }`}
                      >
                        MAT-2233
                      </span>{" "}
                      - 2 h ago
                    </p>
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Tasks Card */}
            <FloatingCard
              color={isDark ? "bg-[#1E1B2E] text-[#FF9F43]" : "bg-[#2D263C] text-[#E0812F]"}
              rotation="rotate-[0deg]"
              icon={
                <div className="ml-4">
                  <ListChecks size={42} strokeWidth={2.5} />
                </div>
              }
              label="Tasks"
              className={`absolute top-[102%] left-[-25%] lg:left-[-32%] w-[420px] h-[110px] z-20 pointer-events-auto transition-all duration-500 ${isDark
                ? "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]"
                : "shadow-[0_25px_50px_-12px_rgba(45,38,60,0.4)]"
                }`}
              delay={0.3}
            />

            {/* Documents Card */}
            <FloatingCard
              color={isDark ? "bg-[#1E1B2E] text-[#FF9F43]" : "bg-[#2D263C] text-[#E0812F]"}
              rotation="rotate-[-8deg]"
              icon={
                <div className="ml-4">
                  <FileText size={42} strokeWidth={2.5} />
                </div>
              }
              label="Documents"
              className={`absolute top-[100%] left-[45%] lg:left-[52%] w-[480px] h-[115px] z-30 pointer-events-auto transition-all duration-500 ${isDark
                ? "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]"
                : "shadow-[0_25px_50px_-12px_rgba(45,38,60,0.4)]"
                }`}
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
