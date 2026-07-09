import axios from "axios";

export const getAddressFromLocation = async (latitude: number,longitude: number) => {
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  );

  return response.data;
};
