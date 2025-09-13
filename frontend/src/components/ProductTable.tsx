import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import {
  Button,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from "@mui/material";
import useDebounce from "../customHooks/useDebounce";
import type { Product } from "../types/types";
import TableHeader from "./table/TableHeader";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PaginationButtons } from "./buttons/PaginationButtons";

const ProductTable = ({ data }: { data: Product }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [inputValue, setInputValue] = useState<string>("");
  const [role, setRole] = useState<"doctor" | "admin" | "select">("select");
  const [showNew, setShowNew] = useState(false);
  const [page, setPage] = useState(0);
  const pageSize = 10;
  const start = page * pageSize;
  const end = start + pageSize;

  const paginatedData = useDebounce(inputValue, start, end, role, showNew);

  useEffect(() => {
    setFilteredData(paginatedData);
  }, [paginatedData, start, end]);
  const fontSize = {
    xs: "12px",
    sm: "14px",
    md: "16px",
  };
  return (
    <Grid
      container
      sx={{
        padding: 2,
        margin: 4,
        alignItems: "center",
      }}
      size={{ xs: 12, sm: 10, md: 8 }}
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <SearchBar
        setFilteredData={setFilteredData}
        setRole={setRole}
        role={role}
        inputValue={inputValue}
        setInputValue={setInputValue}
        showNew={showNew}
        setShowNew={setShowNew}
      />
      <Box sx={{ width: "100%" }}>
        <TableContainer>
          <Table aria-label="product-table">
            <TableHead aria-label="table-header">
              <TableRow aria-label="table-row">
                <TableHeader header="Id" variant={"h6"} fontSize={fontSize} />
                <TableHeader
                  header="Public Name"
                  variant={"h6"}
                  fontSize={fontSize}
                />
                <TableHeader
                  header="Category"
                  variant={"h6"}
                  fontSize={fontSize}
                />
                <TableHeader
                  header="Brand"
                  variant={"h6"}
                  fontSize={fontSize}
                />
                <TableHeader
                  header="Is Wholesale Product"
                  variant={"h6"}
                  fontSize={fontSize}
                />
                <TableHeader
                  header="Visible To"
                  variant={"h6"}
                  fontSize={fontSize}
                />
                <TableHeader
                  header="Price (in $)"
                  variant={"h6"}
                  fontSize={fontSize}
                />
              </TableRow>
            </TableHead>
            <TableBody aria-label="table-body">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.publicName}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.brand}</TableCell>
                    <TableCell>
                      {item.isWholesaleProduct ? "Yes" : "No"}
                    </TableCell>
                    <TableCell>{item.visibleTo.join(", ")}</TableCell>
                    <TableCell>{`$ ${(item.priceCents / 100).toFixed(
                      2
                    )}`}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow aria-label="no-products-row">
                  <TableCell colSpan={7}>No products found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <PaginationButtons
        label="Previous"
        disabled={page === 0}
        setPage={() => setPage(page > 0 ? page - 1 : 0)}
        icon={<ArrowBackIcon />}
      />
      <Box sx={{ px: 2, fontWeight: "bold", color: "#000", fontSize: "18px" }}>
        Page {page + 1}
      </Box>
      <PaginationButtons
        label="Next"
        setPage={() => setPage(page + 1)}
        icon={<ArrowForwardIcon />}
      />
    </Grid>
  );
};
export default ProductTable;
