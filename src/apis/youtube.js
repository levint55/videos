import axios from "axios";

const KEY = "AIzaSyDeesTNEfEfzuUBMbd6vkOHyV9jqiy7zQs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'videos',
    key: KEY,
  },
});
