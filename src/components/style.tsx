import styled from "styled-components";

const CardDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  background-color: #fafafa;
  border-radius: 10px;
`;

const FoodTitle = styled.div`
  height: 32px;
  padding: 0px 12px;
  font-size: 12px;
  margin: 0px;
  font-weight: 700;
`;

const Order = styled.button`
  padding: 12px;
  width: 100px;
  align-self: center;
  border: none;
  margin-bottom: 12px;

  border-radius: 10px;
  background-color: black;
  color: white;

  &:hover {
    color: black;
    background-color: white;
    box-shadow: 0px 0px 0px 2px black inset;
  }
`;
const FoodImage = styled.img`
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`;
const OrderSection = styled.div`
  border-radius: 9px;
  width: 1140px;
  padding: 30px;
  background-color: #ffeccf;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  gap: 12px;
`;
const Foodsection = styled(OrderSection)`
  box-sizing: border-box;
  display: grid;
  width: 1200px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 32px;
  margin-top: 150px;
`;

const OrderCounter = styled.p`
  background-color: black;
  align-self: flex-start;
  padding: 16px 48px;
  color: white;
  border-radius: 9px;
  width: 30%;
`;

const OrderList = styled.ul`
  width: 70%;
  padding: 24px;
  text-align: start;
  list-style: none;
  background-color: white;
  border-radius: 9px;
`;

const OrderListItem = styled.li`
  background-color: black;
  color: white;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 9px;
`;

export {
  CardDiv,
  FoodTitle,
  Order,
  FoodImage,
  Foodsection,
  OrderSection,
  OrderCounter,
  OrderList,
  OrderListItem,
};
