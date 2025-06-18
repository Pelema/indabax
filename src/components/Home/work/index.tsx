"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const services = [
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Students",
      description: "Want to learn and practice to boost your studies.",
    },
    {
      icon: "/images/icons/icon-blockchain.svg",
      text: "Experts",
      description: "Want to improve your skills and share knowledge.",
    },
    {
      icon: "/images/icons/icon-Services.svg",
      text: "Researchers",
      description: "For researchers that want to share their work or discover new methodoliges",
    },
  ];

  return (
    <section className="md:pt-2" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="items-center">
          <motion.div {...bottomAnimation} className="">
            {/* <p className="sm:text-28 text-18 text-white">
              Work with <span className="text-primary">us</span>
            </p> */}
            <h2 className="sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium">Who can participate?</h2>
            <div className="flex space-x-9 justify-between mt-11">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div>
                    <p className="text-24 text-muted">{service.text}</p>
                    <p className="text-sm">{service.description}</p>
                  </div>
                  <div className="px-5 py-5 bg-light_grey bg-opacity-30 rounded-full">
                    <Image
                      src={`${getImagePrefix()}${service.icon}`}
                      alt={`${service.text} icon`}
                      width={40}
                      height={40}
                    />
                  </div>
                  
                </div>
              ))}
            </div>
          </motion.div>
          {/* <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <Image
                src= {`${getImagePrefix()}images/work/img-work-with-us.png`}
                alt="image"
                width={600}
                height={425}
                className="lg:w-full"
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
