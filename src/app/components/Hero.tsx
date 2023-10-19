import Image from "next/image"
import React from "react"
import Link from "next/link"

import student1 from "../../../public/images/desktop/happy_s01.png"
import student2 from "../../../public/images/desktop/happy_s02.png"
import student3 from "../../../public/images/desktop/happy_s03.png"
import arrow from "../../../public/images/arrow.svg"
import star from "../../../public/images/star_hero.svg"
import hero_p from "../../../public/images/mobile/hero_p_mobile.png"

const Hero = () => {
  return (
    <section className="w-[335px] rounded-[30px] bg-[#1D1D1D] px-5 pt-10 m-auto">
      <div className="mb-[31px]">
        <h1 className="text-[40px] font-medium mb-5 leading-[44px] tracking-[-1.6px]">
          Discover the magic of{" "}
          <span className="text-[#BEA69E] italic font-normal">photography</span> in our school
        </h1>
        <p className="text-[14px] leading-[18px] tracking-[-0.28px] mb-10">
          Our photography school offers an unforgettable journey, where you can learn the basics of
          composition, master technical skills, translate your unique ideas.
        </p>
        <div className="flex justify-between flex-wrap">
          <ul className="flex not">
            <li>
              <Image width={44} height={44} alt="student" src={student1} />
            </li>
            <li className="-ml-3">
              <Image width={44} height={44} alt="student" src={student2} />
            </li>
            <li className="-ml-3">
              <Image width={44} height={44} alt="student" src={student3} />
            </li>
          </ul>
          <div className="flex items-center">
            <div className="w-[44px] h-[44px] bg-[#BEA69E] rounded-full mr-3 flex justify-center">
              <Image className="" src={star} width={20} height={20} alt="star" />
              {/* Какая-то хуйня с высотой || не присваивает высоту  */}
            </div>
            <div className="h-full flex justify-between flex-col">
              <p className=" mt-[1px] text-[14px] leading-[18px] tracking-[-0.56px] text-[#FFFFFF80]">
                Reviews
              </p>
              <p className=" mb-[1px] text-[16px] leading-[18px] tracking-[-0.64px]">+1500</p>
            </div>
          </div>
          <Link
            className="mt-[4px] w-[89px] flex text-[14px] leading-[18px] tracking-[-0.56px]"
            href="#"
          >
            Our happy students{" "}
            <Image className="rotate-[38deg]" src={arrow} width={18} height={8.66} alt="arrow" />
          </Link>
        </div>
      </div>
      <Image className="m-auto" src={hero_p} width={259} height={314} alt="hero" />
    </section>
  )
}

export default Hero
