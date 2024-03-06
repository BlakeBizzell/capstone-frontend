
import { Box, Button, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AccountInfo = () => {
  const data = useSelector((state) => state.user);
    return (
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Card key={data.id} sx={{ minWidth: 275, maxWidth: 400, m: 1 }}>
          <CardContent>
            <h1>{data.username}</h1>
            <h1>{data.firstName}</h1>
            <h1>{data.lastName}</h1>
            <h1>{data.email}</h1>
            <Link to={"/updateUserInfo"}>
              <Button>Update Information</Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    );
};

export default AccountInfo;
