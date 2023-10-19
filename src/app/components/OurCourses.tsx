import Image from "next/image"
import Link from "next/link"

const OurCourses = () => {
  return (
    <section className="flex flex-col m-auto">
      <div className="mb-10">
        <h2 className="font-medium text-[28px] leading-[32px] tracking-[-1.12px] mb-5">
          Our{" "}
          <span className="text-[#BEA69E] font-medium text-[28px] leading-[32px] tracking-[-1.12px]">
            Courses
          </span>
        </h2>
        <p className="text-[14px] leading-[18px] tracking-[-0.28px]">
          At our photography school, we offer a variety of courses that cover all aspects of this
          fascinating art. Regardless of your experience or skill level, we have courses to suit
          your needs and goals.
        </p>
      </div>

      <ul className="flex flex-col m-auto">
        <li className="p-[28px] max-w-[335px] h-[398px] rounded-xl border border-solid border-white/20 flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <p className="text-[14px] leading-[18px] tracking-[-0.28px] text-[#FFFFFF66] ">01</p>

              <Link className="w-[32px] h-[32px] bg-[#1D1D1D] rounded-full" href="#">
                {/* <Image src={} width={} height={} alt=""></Image> */}
              </Link>
            </div>
            <h3 className="mt-[28px] text-[28px] font-medium leading-[32px]">
              Basics of<br></br> photography
            </h3>
          </div>
          <p className="text-[14px] leading-[18px] tracking-[-0.28px] text-[#FFFFFF80]">
            During this course, you will be able to familiarize yourself with different types of
            cameras, learn the basics of composition.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default OurCourses
