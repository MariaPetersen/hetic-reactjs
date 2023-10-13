import React from "react";
import { Button } from "@mui/material";

export default function Status({ setStatus }) {
  return (
    <div>
      <Button onClick={() => setStatus("user")}>Utilisateur</Button>
      <Button onClick={() => setStatus("admin")}>Admin</Button>
    </div>
  );
}
