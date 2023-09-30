import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
  CardContent,
  Chip,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { IProduct } from "../../services/type";

interface propsType {
  product: IProduct;
  // onUpdateProduct: (arg: Product) => void;
  // onDeleteProduct: (arg: number) => void;
}

export default function ProductCard({ product }: propsType) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ width: 300, height: 300, justifyContent: "center" }}>
      <CardHeader
        action={
          <IconButton
            id="basic-button"
            aria-label="settings"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <SettingsOutlinedIcon />
          </IconButton>
        }
        titleTypographyProps={{
          fontSize: 18,
        }}
        subheaderTypographyProps={{
          fontSize: 12,
        }}
        title={product.title}
        subheader="Sub Header"
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ModeEditOutlineOutlinedIcon color="secondary" fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteForeverOutlinedIcon color="error" fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
      <CardMedia
        sx={{
          // height: 120,
          // width: 300,
          maxHeight: { xs: 100, md: 120 },
          maxWidth: { xs: 200, md: 300 },
        }}
        component="img"
        image={product?.thumbnail?.url}
        alt="Paella dish"
      />
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Chip label={product.category} />
          <Chip label={product.brand} />
          <Chip label={product.price} />
        </Stack>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          // 👇 Edit padding to further adjust position
          p: 0,
        }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <VisibilityOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
