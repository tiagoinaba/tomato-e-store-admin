import axios from "axios";

export const deleteProduct = async (url: string) => {
  return await axios.delete(url);
};
