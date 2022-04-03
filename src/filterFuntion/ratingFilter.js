export const ratingFilter = (product, rating) => {
    if (rating === "fiveStar")
      return product.filter((a) => a.rating === 5);
    if (rating === "fourStar")
      return product.filter((a) => a.rating === 4);
    if (rating === "threeStar")
      return product.filter((a) => a.rating === 3);
    if (rating === "twoStar")
      return product.filter((a) => a.rating === 2);
    if (rating === "oneStar")
      return product.filter((a) => a.rating === 1);
    return product;
  };