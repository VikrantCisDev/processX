import { ArrowUpRight } from "lucide-react";
import SmallLogo from "../assets/cubicalLogo.svg";

function WhyProcessXSection() {
  const benefits = [
    "Reduce procedure documentation time by 70%",
    "Standardize procedures across all departments",
    "Automatic change and version tracking",
    "Fair pricing insights",
    "Advanced reports and analytics",
  ];

  return (
    <section className="w-full bg-[linear-gradient(90deg,#D7ECFF_0%,#FFFFFF_40%,#FFFFFF_70%,#D7ECFF_100%)] py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-2">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left Content */}
          <div className="space-y-5 xl:w-11/12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-base text-gray-600 shadow-sm border border-gray-100">
              <img src={SmallLogo} alt="Cubical Logo" />
              <span>ProcessX</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900">
              Why ProcessX?
            </h2>

            {/* Description */}
            <p className="text-[#1C1F25] text-sm md:text-base lg:text-lg max-w-[536px] leading-relaxed">
              We help you transform your paper-based procedures into an
              integrated digital system that improves efficiency and ensures
              quality
            </p>

            {/* Benefits List */}
            <ul className="space-y-2 pt-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <span className="text-[#1C1F25] font-medium text-sm lg:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            
          </div>

          {/* Right Content - Stats Card */}
          <div className="bg-gradient-to-b from-[#EDF7FF] to-[#FFFFFF] px-6 py-6 rounded-lg border border-[#D7ECFF] ">
            <div className="flex items-center justify-center bg-white px-4 py-6 text-center shadow-lg transition duration-300 relative md:h-96 lg:h-[424px]">
              <div className="text-center space-y-3">
                <div className="text-4xl md:text-5xl font-bold text-[#0054FF]">
                  70%
                </div>
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    Time Saving
                  </h3>
                  <p className=" text-lg font-normal font-[Roboto] text-[#1C1F25]">
                    Average savings in enterprise procedure documentation and
                    preparation time
                  </p>
                </div>
              </div>
              {/* Bottom Accent Line */}
              <div
                className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#0054FF]`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.70078 18.0016L1.05078 12.3516L2.47578 10.9516L6.72578 15.2016L8.12578 16.6016L6.70078 18.0016ZM12.3508 18.0016L6.70078 12.3516L8.10078 10.9266L12.3508 15.1766L21.5508 5.97656L22.9508 7.40156L12.3508 18.0016ZM12.3508 12.3516L10.9258 10.9516L15.8758 6.00156L17.3008 7.40156L12.3508 12.3516Z"
        fill="#006DFF"
      />
    </svg>
  );
}

export default WhyProcessXSection;
