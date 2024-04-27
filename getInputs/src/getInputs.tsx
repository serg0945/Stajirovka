export const getInputs = (formField: Record<string, string>) => {
  return <input type={formField.type} placeholder={formField.label}></input>;
};
