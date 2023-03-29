import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "0ab4f4951184428da431098d974a592f",
  },
});
