import { v4 as uuid } from "uuid";
import './products'
import { brandBanner, kidShoe, menShoe, womenShoe,imgShoe2, imgShoe3, imgShoe4, imgShoe5, imgShoe6  } from 'assets'
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: imgShoe2,
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    actualPrice: 4995,
    discount: "30% off"
    },
  {
    _id: uuid(),
    image: imgShoe3,
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: imgShoe4,
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: imgShoe5,
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: imgShoe6,
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: imgShoe3,
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: imgShoe3,
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    actualPrice: 4995,
    discount: "30% off"
  },
];
