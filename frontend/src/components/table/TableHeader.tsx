import { TableCell, Typography, TableRow } from "@mui/material";

const TableHeader = ({
  header,
  variant,
  fontSize = { xs: "12px", sm: "14px", md: "16px" },
}: {
  header: string;
  variant: "h6";
  fontSize?: {
    xs: string;
    sm: string;
    md: string;
  };
}) => {
  return (
    <TableCell aria-label={`table-header-${header.toLowerCase()}`}>
      <Typography variant={variant} sx={{ fontSize, fontWeight: "bold" }}>
        {header}
      </Typography>
    </TableCell>
  );
};
export default TableHeader;
