import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div style={{ position: "fixed" }}>
      <Stack spacing={2} direction="row">
        <Button
          style={{ color: "#F0F0F0", fontWeight: "bold", boxShadow: "none" }}
          variant="text"
        >
          Login
        </Button>
        <Button
          style={{ color: "#F0F0F0", fontWeight: "bold", boxShadow: "none" }}
          variant="text"
        >
          Register
        </Button>
        <Button
          component={Link}
          to="/recipes"
          style={{ color: "#F0F0F0", fontWeight: "bold", boxShadow: "none" }}
          variant="text"
        >
          Recipes
        </Button>
      </Stack>
    </div>
  );
};

export default AuthButtons;
