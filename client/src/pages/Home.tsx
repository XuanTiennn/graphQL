import { Box, Grid, Typography } from "@mui/material";
import UserMenu from "../components/UserMenu";
import { Notification } from "../components/Notification";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Folders from "../components/Folders";
import Note from "../components/Editor";

export interface IHomeProps {}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export function Home(props: IHomeProps) {
  return (
    <div>
      <Typography align="center" variant="h4">
        Note App
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <UserMenu />
        <Notification />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <Folders />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>xs=2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Note />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
