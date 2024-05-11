import axios from "axios";
import { authMiddleware, base_url } from "../../utils/axiosConfig";

const postQuery = async (contactData) => {
  const response = await axios.get(`${base_url}enquiry`, { contactData });
  if (response.data) {
    return response.data;
  }
};

export const contactService = {
  postQuery,
};