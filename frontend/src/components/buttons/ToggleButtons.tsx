import { ToggleButton } from "@mui/material";
export const ToggleButtons = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <ToggleButton
      value={value}
      aria-label={`toggle-button-${value}`}
      sx={{
        backgroundColor: "#1976d2",
        color: "#fff",
        border: "none",
        "&.Mui-selected": {
          backgroundColor: "#115293",
          color: "#fff",
        },
        "&:hover": {
          backgroundColor: "#115293",
        },
      }}
    >
      {label}
    </ToggleButton>
  );
};
