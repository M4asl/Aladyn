import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import { offerListData } from "../../static/offerListData";
import { lightTheme } from "../../styles/default";
import image from "next/image";

const OfferCardList = () => {
  return (
    <div>
      {offerListData.map((item) => (
        <OfferCard key={item.id}>
          <GlassCard>
            <ImageContainer>
              <Image
                src={item.image}
                blurDataURL={item.image}
                alt={item.name}
                quality="50"
                placeholder="blur"
                layout="fill"
                className={"image"}
              />
            </ImageContainer>
            <InfoContainer>
              <TextHeader>{item.name}</TextHeader>
              <TextDescription>{item.description}</TextDescription>
            </InfoContainer>
          </GlassCard>
          {item.blobFirstAnimate && (
            <BlobFirst
              animate={item.blobFirstAnimate}
              transition={item.blobFirstTransition}
            />
          )}
          {item.blobSecondAnimation && (
            <BlobSecond
              animate={item.blobSecondAnimation}
              transition={item.blobSecondTransition}
            />
          )}
          {item.blobThirdAnimate && (
            <BlobThird
              animate={item.blobThirdAnimate}
              transition={item.blobThirdTransition}
            />
          )}
          {item.blobFourthAnimation && (
            <BlobFourth
              animate={item.blobFourthAnimation}
              transition={item.blobFourthTransition}
            />
          )}
          {item.waveImage && (
            <WaveCardContainer>
              <Image
                src={item.waveImage}
                blurDataURL={item.waveImage}
                quality="50"
                placeholder="blur"
                layout="fill"
                objectFit="fill"
              />
            </WaveCardContainer>
          )}
          {item.blobFifthAnimate && (
            <BlobFifth
              animate={item.blobFifthAnimate}
              transition={item.blobFifthTransition}
            />
          )}
        </OfferCard>
      ))}
    </div>
  );
};

export default OfferCardList;

const TextHeader = styled.h1`
  text-align: center;
  @media only ${lightTheme.breakpoints.sm} {
    font-size: 2.2rem;
  }
  @media only ${lightTheme.breakpoints.xs} {
    font-size: 1.4rem;
  }
`;

const TextDescription = styled.p`
  font-size: 2rem;
  text-align: initial;
  line-height: 1.2;
  color: ${lightTheme.text.primary};
  @media only ${lightTheme.breakpoints.sm} {
    font-size: 1.6rem;
  }
  @media only ${lightTheme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

const OfferCard = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  position: relative;
  margin: 100px auto;
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  @media only ${lightTheme.breakpoints.md} {
    width: 700px;
    height: 350px;
  }
  @media only ${lightTheme.breakpoints.sm} {
    width: 450px;
    height: 250px;
  }
  @media only ${lightTheme.breakpoints.xs} {
    width: 300px;
    height: 200px;
  }
`;

const InfoContainer = styled.div`
  width: 70%;
  margin: 0px 20px;
  text-align: center;
  @media only ${lightTheme.breakpoints.sm} {
    margin: 0px 10px;
  }
`;
const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GlassCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  backdrop-filter: blur(9px) saturate(200%);
  -webkit-backdrop-filter: blur(9px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.31);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`;

const BlobFirst = styled(motion.div)`
  width: 50%;
  height: 70%;
  position: absolute;
  z-index: -1;
  top: 0%;
  left: 0%;
  background: rgb(65, 88, 208);
  background: linear-gradient(
    43deg,
    rgba(65, 88, 208, 0.7) 0%,
    rgba(200, 80, 192, 0.7) 56%,
    rgba(255, 204, 112, 0.7) 100%
  );
  border-radius: 65% 35% 33% 67% / 49% 82% 18% 51%;
`;

const BlobSecond = styled(motion.div)`
  width: 50%;
  height: 70%;
  position: absolute;
  z-index: -1;
  top: 0%;
  left: 0%;
  background: rgb(255, 154, 139);
  background: linear-gradient(
    90deg,
    rgba(255, 154, 139, 0.7) 0%,
    rgba(255, 106, 136, 0.7) 55%,
    rgba(255, 153, 172, 0.7) 100%
  );
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
`;

const BlobThird = styled(motion.div)`
  width: 50%;
  height: 70%;
  position: absolute;
  z-index: -1;
  top: 0%;
  left: 10%;
  background: rgb(250, 217, 97);
  background: linear-gradient(
    90deg,
    rgba(250, 217, 97, 0.7) 0%,
    rgba(247, 107, 28, 0.7) 100%
  );

  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
`;

const BlobFourth = styled(motion.div)`
  width: 50%;
  height: 70%;
  position: absolute;
  z-index: -1;
  top: 20%;
  left: 45%;
  background: rgb(8, 174, 234);
  background: linear-gradient(
    0deg,
    rgba(8, 174, 234, 0.7) 0%,
    rgba(42, 245, 152, 0.7) 100%
  );
  border-radius: 65% 35% 33% 67% / 49% 82% 18% 51%;
`;

const BlobFifth = styled(motion.div)`
  width: 50%;
  height: 70%;
  position: absolute;
  z-index: -2;
  top: 0%;
  left: 0%;
  background: rgb(65, 88, 208);
  background: linear-gradient(
    43deg,
    rgba(65, 88, 208, 0.7) 0%,
    rgba(200, 80, 192, 0.7) 56%,
    rgba(255, 204, 112, 0.7) 100%
  );
  border-radius: 65% 35% 33% 67% / 49% 82% 18% 51%;
`;

const WaveCardContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
`;
