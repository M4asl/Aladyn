import React from "react";
import Layout from "../components/Layout/article";
import styled from "styled-components";
import Image from "next/image";
import {
  pranieTapicerkiSamochodowejData,
  pranieDywanuData,
  pranieTapicerkiMeblowejData,
  dezynfekcjaParaData,
} from "../static/priceListData";
import { lightTheme } from "../styles/default";
import PriceCardContainer from "../components/Price/PriceCardContainer";

const price = () => {
  return (
    <Layout title="Cennik">
      <TextHeaderContainer>
        <TextHeader>Cennik</TextHeader>
      </TextHeaderContainer>
      <PriceContainer>
        <PriceCardContainer
          title={"Pranie tapicerki samochodowej"}
          data={pranieTapicerkiSamochodowejData}
        />
        <PriceCardContainer title={"Pranie dywanu"} data={pranieDywanuData} />
        <PriceCardContainer
          title={"Pranie tapicerki meblowej"}
          data={pranieTapicerkiMeblowejData}
        />
        <PriceCardContainer
          title={"Dezynfekcja para"}
          data={dezynfekcjaParaData}
        />
      </PriceContainer>
      <WaveContainer>
        <Image
          src="/Wave/wave7.png"
          blurDataURL="/Wave/wave7.png"
          alt="Wave"
          placeholder="blur"
          layout="fill"
          objectFit="fill"
        />
      </WaveContainer>
      <WaveContainerSecond>
        <Image
          src="/Wave/wave8.png"
          blurDataURL="/Wave/wave8.png"
          alt="Wave"
          placeholder="blur"
          layout="fill"
          objectFit="fill"
        />
      </WaveContainerSecond>
    </Layout>
  );
};

export default price;

const TextHeaderContainer = styled.div`
  width: 100%;
`;
const TextHeader = styled.h1`
  text-align: center;
`;

const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const WaveContainer = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100vh;
  z-index: -100;
`;

const WaveContainerSecond = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100vh;
  z-index: -100;
  @media only ${lightTheme.breakpoints.xl} {
    display: block;
  }
`;
