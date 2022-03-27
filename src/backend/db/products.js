import { casual1, casual2, casual3, formal1, formal2, formal3, sneaker1, sneaker2, sport2, sport3 } from "assets";
import { v4 as uuid } from "uuid";
import './products'
// import { casual1, casual2, casual3, formal1, formal2, formal3, sneaker1, sneaker2, sport2, sport3 } from 'assets'
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: casual1,
    categoryName: "Casual",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 5,
    actualPrice: 4995,
    discount: "30% off"
    },
  {
    _id: uuid(),
    image: casual2,
    categoryName: "Casual",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 4,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: casual3,
    categoryName: "Casual",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 2,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: formal1,
    categoryName: "Formal",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 4,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: formal2,
    categoryName: "Formal",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 3,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: formal3,
    categoryName: "Sneaker",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 2,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: sneaker1,
    categoryName: "Sneaker",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 3.2,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: sneaker2,
    categoryName: "Sports",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 3.2,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: sport2,
    categoryName: "Sports",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 3.2,
    actualPrice: 4995,
    discount: "30% off"
  },
  {
    _id: uuid(),
    image: sport3,
    categoryName: "Sports",
    title: "Flex Experience ",
    brand: "NIKE",
    price: 5000,
    rating: 3.2,
    actualPrice: 4995,
    discount: "30% off"
  },
];
