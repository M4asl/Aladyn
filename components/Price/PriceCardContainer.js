import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/default";

const PriceCardContainer = ({ title, data }) => {
  return (
    <div>
      <PriceCard>
        <GlassCard>
          <PriceCardHeaderText>{title}</PriceCardHeaderText>
          <PriceCardList>
            {data.map((item, i) => (
              <PriceCardListItem key={i}>
                {item.name}
                <PriceCardListItemSpan>{item.price}</PriceCardListItemSpan>
              </PriceCardListItem>
            ))}
          </PriceCardList>
        </GlassCard>
      </PriceCard>
    </div>
  );
};

export default PriceCardContainer;

const PriceCard = styled.div`
  width: 350px;
  height: 500px;
  overflow: hidden;
  display: flex;
  position: relative;
  margin: 50px 25px 0px 25px;
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  @media only ${lightTheme.breakpoints.sm} {
    width: 300px;
    height: 450px;
  }
`;

const GlassCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%:
  backdrop-filter: blur(9px) saturate(200%);
  -webkit-backdrop-filter: blur(9px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.31);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`;

const PriceCardHeaderText = styled.h1`
  text-align: center;
`;

const PriceCardList = styled.ul`
  width: 100%;
`;

const PriceCardListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin-top: 20px;
`;

const PriceCardListItemSpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
