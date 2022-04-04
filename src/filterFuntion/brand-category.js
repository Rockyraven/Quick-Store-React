export const brandFiltered = (product,{nike, puma, reebok, braton, sparky, aadi, asian}) => {
    let brandFilteredProduct = [];
    if (nike === true)
      brandFilteredProduct = [
        ...brandFilteredProduct,
        ...product.filter((item) => item.brand === "nike"),
      ];
    if (puma === true)
      brandFilteredProduct = [
        ...brandFilteredProduct,
        ...product.filter((item) => item.brand === "puma"),
      ];
    if (reebok === true)
      brandFilteredProduct = [
        ...brandFilteredProduct,
        ...product.filter((item) => item.brand === "reebok"),
      ];
    if (braton === true)
      brandFilteredProduct = [
        ...brandFilteredProduct,
        ...product.filter((item) => item.brand === "braton"),
      ];
    if (sparky === true)
      brandFilteredProduct = [
        ...brandFilteredProduct,
        ...product.filter((item) => item.brand === "sparky"),
      ];
    if (aadi === true)
      brandFilteredProduct = [
        ...brandFilteredProduct,
        ...product.filter((item) => item.brand === "aadi"),
      ];
    if (asian === true)
      brandFilteredProduct = [
        ...brandFilteredProduct,
        ...product.filter((item) => item.brand === "asian"),
      ];
    if (brandFilteredProduct.length === 0) return product;
    return brandFilteredProduct;
  };

