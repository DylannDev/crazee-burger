import { PiCameraFill, PiPizzaFill } from "react-icons/pi";
import { MdEuroSymbol } from "react-icons/md";

export const getInputTextsConfig = (newProduct) => [
  {
    id: "0",
    Icon: <PiPizzaFill />,
    name: "title",
    value: newProduct.title,
    type: "text",
    placeholder: "Nom du produit (ex: Pizza Texane)",
  },

  {
    id: "1",
    Icon: <PiCameraFill />,
    name: "imageSource",
    value: newProduct.imageSource,
    type: "text",
    placeholder: "Lien URL de l'image",
  },

  {
    id: "2",
    Icon: <MdEuroSymbol />,
    name: "price",
    value: newProduct.price,
    type: "number",
    placeholder: "Prix",
  },
];
