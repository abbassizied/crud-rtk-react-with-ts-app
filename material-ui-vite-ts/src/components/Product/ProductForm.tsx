import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import { useAddNewProductMutation } from "../../services/products.service";
import { IProduct } from "../../services/type";
import { useImmer } from "use-immer";
/*
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import FileUpload from "./FileUpload";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
*/

const brandList = [
  { label: "Apple", value: "Apple" },
  { label: "Microsoft", value: "Microsoft" },
  { label: "Netflix", value: "Netflix" },
  { label: "Salesforce", value: "Salesforce" },
  { label: "Audi", value: "Audi" },
  { label: "Honda", value: "Honda" },
  { label: "General Motors", value: "General Motors" },
  { label: "Toyota", value: "Toyota" },
  { label: "Exelon Corporation", value: "Exelon Corporation" },
  { label: "DTE Energy", value: "DTE Energy" },
  { label: "PUMA", value: "PUMA" },
  { label: "Nike", value: "Nike" },
];

const categoryList = [
  { label: "Motors", value: "Motors" },
  { label: "Electronics", value: "Electronics" },
  { label: "Media and Entertainment", value: "Media and Entertainment" },
  { label: "Fashion", value: "Fashion" },
  { label: "Sports", value: "Sports" },
  { label: "Health & Beauty", value: "Health & Beauty" },
  { label: "Industrial equipment", value: "Industrial equipment" },
  { label: "Home & Garden", value: "Home & Garden" },
  { label: "Collectibles and Art", value: "Collectibles and Art" },
];

interface propsType {
  productData?: IProduct;
  onSubmit: (arg: IProduct) => void;
}

export default function ProductForm({ productData, onSubmit }: propsType) {
 // const [addNewProduct, { isLoading }] = useAddNewProductMutation();

  const [product, updateProduct] = useImmer<IProduct>({
    id: productData?.id ?? undefined,
    title: productData?.title ?? "",
    description: productData?.description ?? "",
    price: productData?.price ?? 0,
    stock: productData?.stock ?? 0,
    brand: productData?.brand ?? "",
    category: productData?.category ?? "",
    thumbnail: productData?.thumbnail ?? { url: "" },
  });

  //-------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------
  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // console.log(e.target.value);
    const newTitle: string = e.target.value;
    updateProduct((draft) => {
      draft.title = newTitle;
    });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // console.log(e.target.value);
    const newDescription: string = e.target.value;
    updateProduct((draft) => {
      draft.description = newDescription;
    });
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // console.log(e.target.value);
    const newPrice: string = e.target.value;
    updateProduct((draft) => {
      draft.price = Number(newPrice);
    });
  };

  const handleBrandChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // console.log(e.target.value);
    const newBrand: string = e.target.value;
    updateProduct((draft) => {
      draft.brand = newBrand;
    });
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // console.log(e.target.value);
    const newCategory: string = e.target.value;
    updateProduct((draft) => {
      draft.category = newCategory;
    });
  };

  const handleStockChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // console.log(e.target.value);
    const newStock: string = e.target.value;
    updateProduct((draft) => {
      draft.stock = Number(newStock);
    });
  };

  const handleThumbnailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // console.log(e.target.value);
    const newThumbnailUrl: string = e.target.value;
    updateProduct((draft) => {
      draft.thumbnail = { url: newThumbnailUrl };
    });
  };

  //-------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------
  // const [images, setImages] = useState([]);

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault(); 
    alert("form start submit!");
    let data: IProduct = {
      ...product,
    };
    console.log(data);
    onSubmit(data);
    alert("Form finish submit!");
  }

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Stack
      sx={{
        width: 500,
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={2}
    >
      <h1>ProductForm</h1>
      {/* ------------------------ Title-------------------------------------- */}
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          label="Title"
          id="title"
          variant="outlined"
          onChange={handleTitleChange}
          value={product.title}
        />
      </FormControl>
      {/* ------------------------ Description-------------------------------------- */}
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          label="Description"
          id="description"
          variant="outlined"
          onChange={handleDescriptionChange}
          value={product.description}
        />
      </FormControl>
      {/* ------------------------ Price-------------------------------------- */}
      <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="price">Price</InputLabel>
        <OutlinedInput
          type="number"
          id="price"
          endAdornment={<InputAdornment position="end">$</InputAdornment>}
          onChange={handlePriceChange}
          value={product.price}
        />
      </FormControl>
      {/* ------------------------ Stock-------------------------------------- */}

      <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="stock">Stock</InputLabel>
        <OutlinedInput
          type="number"
          id="stock"
          endAdornment={<InputAdornment position="end">$</InputAdornment>}
          onChange={handleStockChange}
          value={product.stock}
        />
      </FormControl>

      {/* ------------------------ Brand-------------------------------------- */}
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          select
          id="select-brand"
          label="Brand"
          helperText="Please select a brand"
          onChange={handleBrandChange}
          value={product.brand}
        >
          {brandList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      {/* ------------------------ Category -------------------------------------- */}
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          select
          id="select-category"
          label="Category"
          helperText="Please select a category"
          onChange={handleCategoryChange}
          value={product.category}
        >
          {categoryList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      {/* ------------------------ Images -------------------------------------- */}
      <h2>Upload images</h2>

      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload thumbnail
        <VisuallyHiddenInput type="file" onChange={handleThumbnailChange} />
      </Button>

      <FormControl>
        <input type="file" id="images[]" multiple />
      </FormControl>
      {/* ------------------------------------------------------------------ */}
    </Stack>
  );
}
