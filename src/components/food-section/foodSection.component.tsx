import { useDispatch, useSelector } from "react-redux";
import { FoodCard } from "../food-cards/foodCard.component";
import { RootState } from "../../redux-store/store";
import { useEffect } from "react";
import { getMenu } from "../../redux-store/sagas/menu saga/menuActions";
import {
  Foodsection,
  OrderCounter,
  OrderList,
  OrderListItem,
  OrderSection,
} from "../style";

//import { getMenu } from "../../redux-store/sagas/menu saga/menuRequest";

export const FoodSection = () => {
  // const [FoodList, setFoodList] = useState<any>([]);
  // add the type any to usestate to make sure that the API data doesn't pose issues.

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  const orderCount = useSelector<RootState, number>(
    (state) => state.Order.count
  );

  const orderName = useSelector<RootState, string[]>(
    (state) => state.Order.orders
  );

  const FoodList = useSelector<RootState, Object>(
    (state) => state.Menu.menuItem
  );

  // console.log(FoodList);

  //console.log("THIS IS THE FOODLIST" + FoodList);

  // const foodArray = [
  //   "pizza",
  //   "burger",
  //   "burrito",
  //   "chipotle",
  //   "tacos",
  //   "biryani",
  //   "Russian Salad",
  //   "French Fries",
  // ];

  // console.log(FoodList);
  // const calData = FoodList.map((val: any) => console.log(val.title));

  return (
    <>
      <Foodsection>
        {FoodList &&
          Object.values(FoodList).map((i) => (
            <FoodCard key={i.title} foodName={i.title} imgLink={i.image} />
          ))}
      </Foodsection>

      <OrderSection>
        <OrderCounter>No. of Items: {orderCount}</OrderCounter>
        <OrderList>
          {orderName.map((f) => (
            <OrderListItem key={f}>{f.toLocaleUpperCase()}</OrderListItem>
          ))}
        </OrderList>
      </OrderSection>
    </>
  );
};
