import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { FormEvent } from "react";
import { IProduct } from "../services/type";

interface MyProps {
  title?: string;
  description?: string;
  actionName: string;
  children?: React.ReactNode;
  open: boolean;
  setOpen: (arg: boolean) => void;
  onSubmit: (arg: IProduct) => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({
  title,
  description,
  actionName,
  children,
  open,
  setOpen,
  onSubmit,
}: MyProps) {
  const handleCancel = () => {
    setOpen(false);
  };

  const onSumbitHandler = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    // Use `e.currentTarget` object - make sure the form field elements have "name" and "id" attributes on them
   
      let data : IProduct = {
        title: e.currentTarget.title.value,
        description: e.currentTarget.description.value,
        price: e.currentTarget.price.value,
        stock: e.currentTarget.stock.value,
        brand: e.currentTarget.brand.value,
        category: e.currentTarget.category.value,
        thumbnail: e.currentTarget.thumbnail.value,
      };
    };
    console.log(data);
   // onSubmit(data);
  
  };

  return (
    <>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          {description && <DialogContentText>{description}</DialogContentText>}
          <center>
            <form id="my-form" onSubmit={onSumbitHandler}>
              {children}
            </form>
          </center>
        </DialogContent>

        <DialogActions>
          <Button form="my-form" type="submit">
            {actionName}
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
