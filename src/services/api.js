import axios from "axios"
import { useCallback } from "react";

axios.defaults.baseURL =
    "https://pixabay.com/api";

    // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const API_KEY =
  "31597946-edfd908ff545bca0474323597";



export const getPhoto = async (name, page) => {
    console.log(page);
  const response = await axios.get(
    `/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
  console.log(response.data.hits)
  return response.data.hits;
}