import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "eaa5faf269af44f996230ab708b9258b",
  },
});
