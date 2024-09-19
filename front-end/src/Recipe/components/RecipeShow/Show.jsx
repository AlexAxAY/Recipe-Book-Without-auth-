import "./Show.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const Show = ({
  id,
  title,
  ingredients,
  instructions,
  image,
  createdAt,
  deleteItem,
  success,
  alert,
  deletionAlert,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigateTo = () => {
    navigate(`/recipes/${id}/update`);
  };

  return (
    <div className="second-main-container">
      <div>
        {success && (
          <Stack
            sx={{ width: "100%", marginTop: 3, marginBottom: 3 }}
            spacing={2}
          >
            <Alert severity="success">Item is successfully deleted!</Alert>
          </Stack>
        )}
      </div>
      <Card
        sx={{
          maxWidth: 500,
          minWidth: 500,
          color: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          borderRadius: 4,
        }}
      >
        <CardHeader
          sx={{ color: "black" }}
          title={title}
          subheader={createdAt}
          subheaderTypographyProps={{ sx: { color: "black" } }}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="food"
          sx={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            borderRadius: 1,
            height: 300,
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "black" }}>
            Ingredients
            <br />
            <br />
            {ingredients}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ color: "black" }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2, color: "black" }}>
              Method:
            </Typography>
            <Typography sx={{ marginBottom: 2, color: "black" }}>
              {instructions}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <div>
        {alert && (
          <Stack sx={{ width: "100%", marginTop: 3 }} spacing={2}>
            <Alert
              severity="info"
              action={
                <Button
                  onClick={deleteItem}
                  sx={{ boxShadow: "none" }}
                  color="inherit"
                  size="small"
                >
                  Yes
                </Button>
              }
            >
              Do you wish to proceed with the deletion of this item?
            </Alert>
          </Stack>
        )}
      </div>

      <div className="update-delete-button">
        <button onClick={navigateTo} type="button" className="btn btn-primary">
          Edit
        </button>
        <button
          onClick={deletionAlert}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Show;
