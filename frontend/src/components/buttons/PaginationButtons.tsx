import { Button } from "@mui/material";
export const PaginationButtons = ({
  label,
  setPage,
  disabled,
  icon,
}: {
  label: string;
  setPage: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
}) => {
  return (
    <Button
      startIcon={icon}
      aria-label="previous-page-button"
      color="primary"
      variant="contained"
      onClick={() => setPage()}
      sx={{
        backgroundColor: "#1976d2",
        color: "#fff",
        boxShadow: "0 2px 8px rgba(25, 118, 210, 0.15)",
        "&:hover": {
          backgroundColor: "#115293",
          boxShadow: "0 4px 16px rgba(25, 118, 210, 0.25)",
        },
      }}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};
