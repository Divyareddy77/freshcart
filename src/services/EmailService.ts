import emailjs from "@emailjs/browser";

export const sendOrderEmail = async (order: any) => {
  return await emailjs.send(
    "service_fj8fi6p",
    "template_2z6hkcc",
    order,
    "ZJBJ9By2bgvYd7q40",
  );
};
