import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AccountInfo = () => {
  const data = useSelector((state) => state.user);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Card sx={{ minWidth: 275, maxWidth: 400 }}>
          <CardContent>
            <form>
              <TextField
                label="Username"
                defaultValue={data.username}
                fullWidth
                margin="normal"
                disabled
              />
              <TextField
                label="First Name"
                defaultValue={data.firstName}
                fullWidth
                margin="normal"
                disabled
              />
              <TextField
                label="Last Name"
                defaultValue={data.lastName}
                fullWidth
                margin="normal"
                disabled
              />
              <TextField
                label="Email"
                defaultValue={data.email}
                fullWidth
                margin="normal"
                disabled
              />
              <Link to={"/updateUserInfo"} style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary" fullWidth>
                  Update Information
                </Button>
              </Link>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AccountInfo;
