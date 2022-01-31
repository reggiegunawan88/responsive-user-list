import axios from "axios";

export const getUsers = async () => {
  const url = "https://randomuser.me/api/?results=100";
  const result = await axios.get(url);
  return result.data.results;
};
