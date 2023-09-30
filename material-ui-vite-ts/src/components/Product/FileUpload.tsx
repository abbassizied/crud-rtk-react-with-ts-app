import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

export default function UploadButtons() {
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        // The file's text will be printed here
        console.log(reader.result);
        setImageUrl(reader.result?.toString());
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="upload-image">
          <Button variant="contained" component="span">
            Upload
          </Button>
          <input
            id="upload-image"
            hidden
            accept="image/*"
            type="file"
            onChange={handleFileUpload}
          />
        </label>
        {imageUrl && <img src={imageUrl} alt="Uploaded Image" height="300" />}
      </Stack>
    </Container>
  );
}
