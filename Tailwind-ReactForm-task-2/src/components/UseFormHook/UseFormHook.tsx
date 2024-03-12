import { useFormContext } from "react-hook-form";
import { IForm } from "../types";

export const UseFormHook = () => {
  const { register, reset, setValue, unregister, setFocus, getValues } =
    useFormContext<IForm>();
  return (
    <div className="flex flex-col gap-4">
      <p>UseFormHook</p>
      <input
        type="text"
        className="w-full rounded border border-black p-2"
        {...register("name")}
        placeholder="ФИО"
      />
      <input
        type="text"
        className="w-full rounded border border-black p-2"
        {...register("age")}
        placeholder="Возраст"
      />
      <button
        className="w-full rounded border border-black p-1"
        onClick={() => reset({ age: 0, name: "" })}
      >
        reset
      </button>
      <button
        className="w-full rounded border border-black p-1"
        onClick={() => setValue("name", "Шлёпа")}
      >
        setValue
      </button>
      {/* <button
        className="w-full rounded border border-black p-1"
        onClick={() => unregister("name")}
      >
        unregister
      </button> */}
      <button
        className="w-full rounded border border-black p-1"
        onClick={() => setFocus("name")}
      >
        setFocus
      </button>
      <button
        className="w-full rounded border border-black p-1"
        onClick={() => {
          const value = getValues("name");
          console.log(value);
        }}
      >
        getValues
      </button>
    </div>
  );
};
