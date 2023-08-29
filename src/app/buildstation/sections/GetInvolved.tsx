"use client";
import React from "react";
import CtaCard from "../../../components/ui/CtaCard";
import { Highlight } from "../../../components/ui/Highlight";
import Email from "@/app/(main-sections)/Email";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeInDiv from "@/components/ui/FadeInDiv";

const GetInvolved = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);
  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={{ backgroundSize: "cover", y }}
        className="bg-[url('/images/backgrounds/line-wave-3-primary.svg')]  bg-bottom bg-no-repeat   -z-50 w-full bg-50% md:bg-contain absolute h-full bg-fixed"></motion.div>
      <section className="py-24">
        <FadeInDiv>
          <div className="container my-6 gap-6 mb-12 md:flex justify-center sm:flex-row-reverse  sm:justify-between items-start">
            <h2 className="uppercase text-h2 mb-12">
              How can I <br /> get<Highlight>involved</Highlight>?
            </h2>
            <div className="max-w-[40rem]">
              <p className="font-light">
                Different users at different experience levels will either want
                to learn about the ecosystem or browse bounties. The bounties
                are hosted at earn.superteam.fun and the learning resources TBD.
              </p>
              <a
                href="https://discord.gg/CVwJhHgFfF"
                target="_blank"
                className="underline underline-offset-4">
                <span className="block my-6 text-body">
                  Learn more about us
                </span>
              </a>
            </div>
          </div>
        </FadeInDiv>
        <div className="grid sm:grid-cols-2 gap-6 container justify-between">
          <CtaCard
            title="Learn"
            content="Get the ressources to start your journey in the Solana ecosystem."
            href="https://solana.com/developers"
            linkContent="Check out our learning resources"
          />
          <CtaCard
            title="Earn"
            content="Use our platform earn.superteam.fun to get start tasks for us and get rewarded."
            href="https://earn.superteam.fun"
            linkContent="Start earning today!"
          />
        </div>
        <Email />
      </section>
    </div>
  );
};

export default GetInvolved;
