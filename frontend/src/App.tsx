import useFetchData from "./customHooks/useDebounce.tsx";
import { Box, Typography } from "@mui/material";
import { Suspense, lazy } from "react";
import type { Product } from "./types/types.tsx";

const ProductTable = lazy(() => import("./components/ProductTable.tsx"));
function App() {
  const products: Product = useFetchData("", 0, 10, "");

  const Loader = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "200px",
          fontSize: "28px",
          color: "black",
          letterSpacing: "2px",
        }}
      >
        Loading...
      </div>
    );
  };

  return (
    <Box
      className="product-app"
      sx={{
        minHeight: "100%",
        background:
          "linear-gradient(135deg, #ffb347 0%, #ff6a00 60%, #ff1744 100%)",
        alignItems: "center",
        px: { xs: 1, sm: 2, md: 4 },
        py: { xs: 2, sm: 4 },
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mt: 4,
          mb: 2,
          textAlign: "center",
          fontWeight: "bold",
          color: "#000",
          letterSpacing: "2px",
        }}
      >
        Product List
      </Typography>
      <Suspense fallback={<Loader />}>
        <ProductTable data={products} />
      </Suspense>
    </Box>
  );
}

export default App;
