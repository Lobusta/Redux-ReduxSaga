import axios from "axios";


export function* GetMenuFromUrl ():Object {
  const data = yield axios.request({
    method: "get",
    url: "https://api.spoonacular.com/recipes/complexSearch?apiKey=2b269be586c24b899b9b68dcaefea8d2"
  });

  return data;
};
