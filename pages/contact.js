import React from "react";
import Layout from "../components/Layout/article";
import styled from "styled-components";
import Image from "next/image";
import { ImPhone, ImHome3 } from "react-icons/im";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { lightTheme } from "../styles/default";
const contact = () => {
  return (
    <Layout title="Kontakt">
      <TextHeaderContainer>
        <TextHeader>Kontakt</TextHeader>
      </TextHeaderContainer>
      <GlassCard>
        <ContactCardHeaderText>
          Zadzwoń i umów się na pranie dywanu!
        </ContactCardHeaderText>
        <ConstactCardList>
          <ContactCardListItem>
            <ImPhone style={{ marginRight: "8px" }} />
            Tel. 789 391 365
          </ContactCardListItem>
          <ContactCardListItem>
            <ImPhone style={{ marginRight: "8px" }} />
            Tel. 791 709 156
          </ContactCardListItem>
          <ContactCardListItem>Nasz punkt przyjęć: </ContactCardListItem>
          <ContactCardListItem>
            <FaMapMarkerAlt style={{ marginRight: "8px" }} />
            ul. Nowa 4, 43-600 Jaworzno.
          </ContactCardListItem>
          <ContactCardListItem>
            Zamówienia mogą Państwo składać:
          </ContactCardListItem>
          <ContactCardListItem>
            <ImHome3 style={{ marginRight: "8px" }} /> w punkcie przyjęć,
          </ContactCardListItem>
          <ContactCardListItem>
            <ImPhone style={{ marginRight: "8px" }} /> telefonicznie,
          </ContactCardListItem>
          <ContactCardListItem>
            <BsFacebook style={{ marginRight: "8px" }} /> lub przez naszego
            Facebooka
          </ContactCardListItem>
        </ConstactCardList>
      </GlassCard>
      <IlustrationContainer>
        <Image
          src="/Ilustrations/ilustration1.svg"
          blurDataURL="/Ilustrations/ilustration1.svg"
          alt="Contact ilustration"
          quality="50"
          placeholder="blur"
          layout="fill"
          objectFit="fill"
        />
      </IlustrationContainer>
      <IlustrationContainerSecond>
        <Image
          src="/Ilustrations/ilustration2.svg"
          blurDataURL="/Ilustrations/ilustration2.svg"
          alt="Contact ilustration"
          quality="50"
          placeholder="blur"
          layout="fill"
          objectFit="fill"
        />
      </IlustrationContainerSecond>
    </Layout>
  );
};

export default contact;

const TextHeaderContainer = styled.div`
  width: 100%;
`;
const TextHeader = styled.h1`
  text-align: center;
  letter-spacing: 2;
`;

const GlassCard = styled.div`
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 1;
  width: 550px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(9px) saturate(200%);
  -webkit-backdrop-filter: blur(9px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.31);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  @media only ${lightTheme.breakpoints.md} {
    width: 500px;
    height: 550px;
  }
  @media only ${lightTheme.breakpoints.sm} {
    margin-top: 50px;
    width: 400px;
    height: 500px;
  }
  @media only ${lightTheme.breakpoints.xs} {
    width: 300px;
    height: 400px;
  }
`;

const ContactCardHeaderText = styled.h1`
  text-align: center;
  @media only ${lightTheme.breakpoints.xs} {
    font-size: 2rem;
  }
`;

const ConstactCardList = styled.ul`
  width: 100%;
`;

const ContactCardListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  margin-top: 20px;
  font-size: 1.7rem;
  @media only ${lightTheme.breakpoints.xs} {
    font-size: 1.2rem;
  }
`;

const IlustrationContainer = styled.div`
  position: absolute;
  top: 0%;
  left: 5%;
  width: 500px;
  height: 400px;
  z-index: -1;
  @media only ${lightTheme.breakpoints.md} {
    width: 400px;
    height: 300px;
  }
  @media only ${lightTheme.breakpoints.xs} {
    width: 300px;
    height: 250px;
  }
`;

const IlustrationContainerSecond = styled.div`
  position: absolute;
  top: 75%;
  left: 65%;
  width: 400px;
  height: 250px;
  z-index: -1;
  @media only ${lightTheme.breakpoints.md} {
    width: 300px;
    height: 200px;
  }
  @media only ${lightTheme.breakpoints.sm} {
    top: 95%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
