import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.timeout = 150000;

export default class MainApi {
  static get() {
    return axios
      .get("https://test-api.loop11.com/v1/slack/")
      .catch(function(error) {
        console.log(error);
      });
  }
  static post(body) {
    return axios.post("https://test-api.loop11.com/v1/slack/", {
      channel: body
    });
  }
}
