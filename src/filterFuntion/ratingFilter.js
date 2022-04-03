export const ratingFilter = (product, rating) => {
      let ratingFilterProduct = [];

    if (rating === "fiveStar")
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 5),
    ];
    if (rating === "fourStar")
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 4),
    ];
    if (rating === "threeStar")
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 3),
    ];
    if (rating === "twoStar")
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 2),
    ];
    if (rating === "oneStar")
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 1),
    ];
    return product;
  };