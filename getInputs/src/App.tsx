import { getInputs } from "./getInputs";
import { obj } from "./obj";

function App() {
  return (
    <>
      <p>123</p>
      {obj[1].formFields.map((formField) => getInputs(formField))}
    </>
  );
}

export default App;
