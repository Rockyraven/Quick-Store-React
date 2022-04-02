export const ratingFilter = (product, rating) => {
    if (rating === "fiveStar")
      return product.filter((a) => a.rating === 5);
    if (rating === "fourStar")
      return product.filter((a) => a.rating === 4);
    return product;
  };