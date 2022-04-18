import { Alert, TextField, Typography } from "@mui/material";
import { useState } from "react";

function HomePage() {
  const [errorShow, seterrorShow] = useState(false);
  const [name, setName] = useState();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  if (name === "tigran") {
  }
  console.log(name);
  return (
    <div className="formLogin">
      <form>
        <TextField
          sx={{
            marginTop: "10px",
          }}
          id="outlined-name"
          label="Name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          sx={{
            marginTop: "10px",
          }}
          id="outlined-name"
          label="Name"
          value={name}
          onChange={handleChange}
        />
      </form>
      {name === "tigran" ? (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      ) : (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
    </div>
  );
}

export default HomePage;
