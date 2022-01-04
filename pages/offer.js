import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/article";
import Image from "next/image";
import OfferCardList from "../components/Offer/OfferCardList";

const offer = () => {
  return (
    <Layout title="Oferta">
      <TextHeaderContainer>
        <TextHeader>Oferta</TextHeader>
      </TextHeaderContainer>
      <OfferCardList />
      <WaveContainer>
        <Image
          src="/Wave/wave3.png"
          blurDataURL="/Wave/wave3.png"
          alt="Wave"
          quality="50"
          placeholder="blur"
          layout="fill"
          objectFit="fill"
        />
      </WaveContainer>
    </Layout>
  );
};

export default offer;

const TextHeaderContainer = styled.div`
  width: 100%;
`;
const TextHeader = styled.h1`
  text-align: center;
`;

const WaveContainer = styled.div`
  position: absolute;
  top: 0%;
  width: 100vw;
  height: 100vh;
  z-index: -100;
`;
