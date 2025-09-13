import { useEffect, useState } from "react";
import {
  Input,
  Typography,
  Grid,
  ToggleButtonGroup,
  Switch,
  Box,
} from "@mui/material";
import useDebounce from "../customHooks/useDebounce";
import type { Role } from "../types/types";
import { ToggleButtons } from "./buttons/ToggleButtons";

interface SearchBarProps {
  setFilteredData: (data: any) => void;
  role: Role;
  setRole: (role: Role) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  showNew: boolean;
  setShowNew: (value: boolean) => void;
}
const SearchBar = ({
  setFilteredData,
  setRole,
  role,
  inputValue,
  setInputValue,
  showNew,
  setShowNew,
}: SearchBarProps) => {
  const data = useDebounce(inputValue, 0, 10, role, showNew);

  useEffect(() => {
    setFilteredData(data);
  }, [data, setFilteredData]);

  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      width={"100%"}
      columnSpacing={{ xs: 1, sm: 4, md: 14 }}
    >
      <Grid size={{ xs: 12, sm: 4, md: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: "16px",
              sm: "20px",
              md: "22px",
            },
            fontWeight: "bold",
          }}
        >
          Search:
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 8, md: 4 }}>
        <Input
          type="text"
          placeholder="Search products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: "16px",
              sm: "20px",
              md: "22px",
            },
            fontWeight: "bold",
          }}
        >
          Role:
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 2 }} alignItems="center">
        <ToggleButtonGroup
          value={role}
          exclusive
          onChange={(e, newRole) => setRole(newRole)}
        >
          <ToggleButtons value="doctor" label="Doctor" />
          <ToggleButtons value="admin" label="Admin" />
        </ToggleButtonGroup>
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 2 }} alignItems="center">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ mr: 1, fontWeight: "bold" }}>
            Show New
          </Typography>
          <Switch
            checked={showNew}
            onChange={() => setShowNew(!showNew)}
            color="warning"
            aria-label="toggle-show-new-products"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default SearchBar;
