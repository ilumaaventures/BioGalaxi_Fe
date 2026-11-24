
import React from 'react';
import imgBiotechTeam from '../../assets/hradvisor/biotech_scientists_collab_hd.jpg';

export default function HowWeAreDifferent() {
  return (
    <section id="about" className="pt-6 sm:pt-8 lg:pt-10 pb-20 sm:pb-24 lg:pb-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Top 2-Column Split: Title & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 sm:mb-16">

          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-6">
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#6D28D9] block mb-3">
              HOW WE ARE DIFFERENT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] text-[#444444] font-carnas leading-[1.18] tracking-normal">
              Helping to create engaging, productive and profitable organizations
            </h2>
          </div>

          {/* Right Column: Paragraph Description */}
          <div className="lg:col-span-6 lg:pt-8 text-[#666666] text-sm leading-[1.8] space-y-4">
            <p>
              Bio Galaxi is an integrated Talent Management and Workforce Solutions company that combines technology, experienced talent leadership and execution capabilities to help organisations manage and transform their people functions.
            </p>

            <p>
              Our approach is to provide organisations with a complete talent partnership by bringing together the right technology, strategic expertise and operational support under one roof, with a special focus on the Bio, Pharma and Life Sciences industry.
            </p>
          </div>

        </div>

        {/* Bottom Graphic */}
        <div className="relative w-full bg-white">

          {/* Professional Team Image */}
          <div className="w-full bg-white flex justify-end overflow-hidden">
            <img
              src={imgBiotechTeam}
              alt="Life sciences and biotechnology talent specialists collaborating in modern laboratory"
              className="w-full h-auto max-h-[520px] object-cover object-center bg-white"
              loading="eager"
            />
          </div>

          {/* Purple & Green Accent Callout Box - Vertically Centered on Image */}
          <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 w-full lg:w-[46%] bg-gradient-to-br from-[#2E1065] to-[#4C1D95] p-8 sm:p-12 text-white z-10 shadow-xl shadow-purple-950/20 mt-4 lg:mt-0">
            <p className="text-xl sm:text-2xl lg:text-[25px] font-carnas leading-[1.38] text-white mb-6">
              The simplest way to explain Bio Galaxi: we are an integrated talent partner that helps businesses manage their entire people function through technology, leadership and workforce solutions.
            </p>

            {/* Vivid emerald green underline */}
            <div className="w-14 h-[3px] bg-[#10B981] rounded-full" />
          </div>

        </div>

      </div>
    </section>
  );
}
