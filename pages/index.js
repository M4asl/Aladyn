import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "../components/Slider/Slider";
import { lightTheme } from "../styles/default";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      when: "afterChildren",
    },
  },
};

const letterAni = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      repeat: Infinity,
      repeatDelay: 3,
      repeatType: "reverse",
    },
  },
};

function index() {
  const AnimatedLetters = ({ title }) => (
    <motion.span
      variants={banner}
      initial="initial"
      animate="animate"
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      {[...title].map((letter, i) => (
        <TextBanner key={i} variants={letterAni}>
          {letter}
        </TextBanner>
      ))}
    </motion.span>
  );
  return (
    <>
      <SectionContainer>
        <HeaderContainer>
          <Blob
            whileHover={{
              scale: 1.02,
              borderRadius: "65% 35% 33% 67% / 49% 82% 18% 51%",
            }}
          >
            <GlassCard>
              {/* <AnimatedLetters title={"Aladyn"} /> */}
              {/* <motion.h1
                initial="initial"
                animate="animate"
                variants={letterAni}
              >
                Alladyn
              </motion.h1> */}
              <AnimatedLetters title={"Aladyn"} />
              <SecondTextBanner
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1,
                  delay: 1,
                }}
              >
                - Pralnia Dywanow i Tapicerki
              </SecondTextBanner>

              <TextParagraph
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1,
                  delay: 2,
                }}
              >
                Oferujemy kompleksowe usługi czyszczenia dywanów i tapicerki.
                Nasze doświadczenie gwarantuje wysoką jakość wykonania naszych
                usług.
              </TextParagraph>
            </GlassCard>
          </Blob>
          {/* <BlobSecond
            animate={{
              x: [550, 1000, 550],
              y: [100, 50, 100],
              rotate: [-90, -10, -90],
            }}
            transition={{ repeat: Infinity, duration: 7 }}
          /> */}
        </HeaderContainer>
        <Slider />
      </SectionContainer>
      <WaveContainer>
        <Image
          src="/Wave/wave.png"
          blurDataURL="/Wave/wave.png"
          alt="Wave"
          placeholder="blur"
          layout="fill"
          objectFit="fill"
        />
      </WaveContainer>
    </>
  );
}

export default index;

const SectionContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  @media only ${lightTheme.breakpoints.md} {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderContainer = styled.div`
  width: 30%;
  height: 50vh;
  margin: 10px;
  @media only ${lightTheme.breakpoints.lg} {
    width: 35%;
  }
  @media only ${lightTheme.breakpoints.md} {
    width: 50%;
    height: 35vh;
    align-self: flex-start;
  }
  @media only ${lightTheme.breakpoints.sm} {
    width: 60%;
  }
  @media only ${lightTheme.breakpoints.xs} {
    width: 80%;
  }
`;

const Blob = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgb(248, 241, 199);
  background: radial-gradient(
    circle,
    rgba(248, 241, 199, 1) 30%,
    rgba(250, 172, 168, 1) 69%
  );
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
`;

const GlassCard = styled.div`
  top: 25%;
  left: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 550px;
  height: 300px;
  padding: 0 20px;
  position: relative;
  backdrop-filter: blur(9px) saturate(200%);
  -webkit-backdrop-filter: blur(9px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.31);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  @media only ${lightTheme.breakpoints.lg} {
    width: 500px;
  }
  @media only ${lightTheme.breakpoints.md} {
    width: 550px;
  }
  @media only ${lightTheme.breakpoints.sm} {
    left: 8%;
    width: 350px;
    height: 250px;
  }
  @media only ${lightTheme.breakpoints.xs} {
    left: 8%;
    width: 280px;
    height: 250px;
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100vw;
  height: 40vh;
  z-index: -1;
  @media only ${lightTheme.breakpoints.md} {
    bottom: -65%;
  }
  @media only ${lightTheme.breakpoints.xs} {
    bottom: -110%;
  }
`;

const TextBanner = styled(motion.span)`
  font-size: 6rem;
  letter-spacing: 0.3rem;
  font-weight: bold;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only ${lightTheme.breakpoints.sm} {
    font-size: 5rem;
  }
`;

const SecondTextBanner = styled(motion.span)`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only ${lightTheme.breakpoints.sm} {
    font-size: 2.2rem;
  }
`;

const TextParagraph = styled(motion.p)`
  font-size: 2rem;
  color: #0e141b;
  line-height: 1.6;
  @media only ${lightTheme.breakpoints.sm} {
    font-size: 1.4rem;
    line-height: 1.5;
  }
`;
