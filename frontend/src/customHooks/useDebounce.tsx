import { useState, useEffect } from "react";

const useDebounce = (
  q?: string,
  pageStart: number = 0,
  pageEnd?: number,
  role?: string,
  showNew?: boolean
) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      fetch(
        `/api/products?q=${q}&pageStart=${pageStart}&pageEnd=${pageEnd}&role=${role}&showNew=${showNew}`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error(err));
    }, 200);

    return () => clearTimeout(handler);
  }, [q, pageStart, pageEnd, role, showNew]);

  return products;
};
export default useDebounce;
