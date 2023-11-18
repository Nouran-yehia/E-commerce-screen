import axios from "axios";
export default {
  async getData(api_url, params) {
    const response = await axios
      .get(`https://joulia.dashboard.hamburgermenu.app/${api_url}`,{
        params: params ? params :{}
      });
    return response.data;
  },
};
