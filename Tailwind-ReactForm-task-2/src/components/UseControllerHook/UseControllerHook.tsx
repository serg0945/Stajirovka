import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export const UseControllerHook = () => {
  return (
    <>
      <p>UseControllerHook</p>
      <Controller
        name="email"
        rules={{ required: true }}
        render={() => <TextField label={"Здеся какой-то текст"}></TextField>}
      />
    </>
  );
};
