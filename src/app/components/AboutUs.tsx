import Image from "next/image"

import cam from "../../../public/images/mobile/cam_about_mobile.png"

const AboutUs = () => {
  return (
    <section className="flex flex-col m-auto mb-20">
      <h2 className="mb-10 font-medium text-[28px] leading-[32px] tracking-[-1.12px]">
        About{" "}
        <span className="text-[#BEA69E] font-medium text-[28px] leading-[32px] tracking-[-1.12px]">
          Us
        </span>
      </h2>
      <Image className="m-auto mb-10" src={cam} width={209} height={335} alt="cam" />
      <p className="text-[14px] leading-[18px] tracking-[-0.28px] mb-5">
        Our photography school is designed to teach you everything you need to know about this
        magical art. Regardless of your experience or skill level, we offer a wide range of courses
        to suit your needs and interests. Our teaching team consists of experienced photographers
        who have many years of experience in this field. They strive not only to share their
        knowledge, but also to inspire you to develop and express your unique creativity.
      </p>
      <p className="text-[14px] leading-[18px] tracking-[-0.28px]">
        Our courses cover a wide range of topics, from the basics of photography and equipment use
        to professional image processing and creating impressive compositions. You will have the
        opportunity to learn the technical aspects of photography, discover your own style and
        develop your own visual language.
      </p>
      <p></p>
    </section>
  )
}

export default AboutUs
