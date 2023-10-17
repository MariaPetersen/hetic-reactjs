import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Checkbox, FormControlLabel, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDo({ element, setCompletion, deleteTodo }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <ListItem
        key={element.id}
        className="list"
        sx={{ justifyContent: "space-between" }}
      >
        <FormControlLabel
          label={element.text}
          control={
            <Checkbox
              onClick={() => setCompletion(element.id)}
              checked={element.completion}
              id={element.id}
            />
          }
        ></FormControlLabel>
        <Button onClick={() => deleteTodo(element.id)} variant="contained">
          {isMobile ? <DeleteIcon /> : "Supprimer"}
        </Button>
      </ListItem>
    </>
  );
}
