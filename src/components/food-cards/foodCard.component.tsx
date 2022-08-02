import { addOrder } from "../../redux-store/orderActions";
import { useDispatch } from "react-redux";
import { CardDiv, FoodImage, FoodTitle, Order } from "../style";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FoodCardProps {
  foodName: string;
  imgLink: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({ foodName, imgLink }) => {
  const dispatch = useDispatch();

  const order = () => {
    toast.success("Order added Successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 500,
    });
    dispatch(addOrder(1, foodName));
  };

  return (
    <>
      <CardDiv>
        <FoodImage alt="yummy pic of food" src={imgLink} />
        <FoodTitle>{foodName}</FoodTitle>
        <Order onClick={order}>Order</Order>
      </CardDiv>
    </>
  );
};
