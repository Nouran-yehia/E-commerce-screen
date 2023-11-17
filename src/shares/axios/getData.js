import axios from "axios";
export default {
  async getData(api_url) {
    const response = await axios
      .get(`https://joulia.dashboard.hamburgermenu.app/${api_url}`);
    return response.data;
  },
};
