import { Button, Divider, Paper, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Title from "./Title";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ProductList from "./components/Product/ProductList";
import { useState } from "react";
import Modal from "./components/modal.component";
import ProductForm from "./components/Product/ProductForm";
import { useAddNewProductMutation } from "./services/products.service";

export default function Products() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  /*
  const handleClose = () => {
    setOpen(false);
  };
*/

  const [addNewProduct, { isLoading }] = useAddNewProductMutation();

  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Title>Products </Title>
          <Divider />

          <Stack
            sx={{
              marginTop: "30px",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            direction="row"
            spacing={2}
            useFlexGap
            flexWrap="wrap"
          >
            <Button sx={{ width: 300, height: 300 }} onClick={handleOpen}>
              <AddOutlinedIcon />
            </Button>

            <ProductList />
          </Stack>
        </Paper>
      </Grid>

      <Modal
        open={open}
        setOpen={setOpen}
        title="This is your optional title"
        description="This is an optional description"
        actionName="Add New Product"
        onSubmit={addNewProduct}
      >
        <ProductForm onSubmit={addNewProduct} />
      </Modal>
    </>
  );
}
