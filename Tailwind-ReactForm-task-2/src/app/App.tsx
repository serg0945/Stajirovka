import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Selection } from "@/components/Selection/Selection";
import { UseControllerHook } from "@/components/UseControllerHook";
import { UseFieldArrayHook } from "@/components/UseFieldArrayHook";
import { UseFormContextHook } from "@/components/UseFormContextHook";
import { UseFormHook } from "@/components/UseFormHook";
import { UseWatchHook } from "@/components/UseWatchHook";
import { UseFormStateHook } from "@/components/UseFormStateHook";
import { Form } from "@/components/Form/Form";
import { FormProvider, useForm } from "react-hook-form";
function App() {
  const methodsForm = useForm({
    defaultValues: {
      ban: "Шлёпа. Не менять!!!",
    },
  });
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-4xl">React Hook Form</h1>
      <BrowserRouter>
        <FormProvider {...methodsForm}>
          <Selection />
          <Routes>
            <Route path="useController" element={<UseControllerHook />}></Route>
            <Route path="useWatch" element={<UseWatchHook />}></Route>
            <Route path="useFieldArray" element={<UseFieldArrayHook />}></Route>
            <Route
              path="useFormContext"
              element={<UseFormContextHook />}
            ></Route>
            <Route path="UseForm" element={<UseFormHook />}></Route>
            <Route path="UseFormState" element={<UseFormStateHook />}></Route>
          </Routes>
          <Form />
        </FormProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
