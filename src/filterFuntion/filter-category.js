export const categoryFiltered = (product,{Sports, Formal, Sneaker, Casual}) => {
    let categoryFilteredProduct = [];
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
    if (categoryFilteredProduct.length === 0) return product;
    return categoryFilteredProduct;
  };

