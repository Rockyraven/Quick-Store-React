export const categoryFiltered = (product,{Sports, Formal, Sneaker, Casual, nike, puma, reebok, braton, sparky, aadi, asian}) => {
    let categoryFilteredProduct = [];

    //  Shoe Category Filter
    if (Sports === true)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.categoryName === "Sports"),
      ];
    if (Formal === true)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.categoryName === "Formal"),
      ];
    if (Sneaker === true)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.categoryName === "Sneaker"),
      ];
    if (Casual === true)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.categoryName === "Casual"),
      ];

      // brand Category Filter
      if (nike)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "nike"),
      ];
    if (puma)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "puma"),
      ];
    if (reebok)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "reebok"),
      ];
    if (braton)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "braton"),
      ];
    if (sparky)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "sparky"),
      ];
    if (aadi)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "aadi"),
      ];
    if (asian)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "asian"),
      ];
    if (categoryFilteredProduct.length === 0) return product;
    return categoryFilteredProduct;
  };
  