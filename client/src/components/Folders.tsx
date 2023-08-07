import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import NewFolderForm from "./CreateFolderForm";
export interface IFoldersProps {}

export default function Folders(props: IFoldersProps) {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="span" sx={{ fontWeight: "bold" }}>
          Folders
        </Typography>
        <NewFolderForm />
      </Box>
    </div>
  );
}
