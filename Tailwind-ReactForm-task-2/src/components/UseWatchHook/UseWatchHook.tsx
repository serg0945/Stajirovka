import { useFormContext, useWatch } from "react-hook-form";
import { IForm } from "../types";

export const UseWatchHook = () => {
  const { register, control, watch } = useFormContext<IForm>();
  const watchAge = useWatch({
    control,
    name: "age",
  });

  const watchName = watch("name");
  //   const [age, name] = watch(["age", "name"]);
  //   const watchInput = watch(); // Без параметра ссылка на саму форму
  return (
    <div className="flex flex-col gap-4">
      <h3>UseWatchHook</h3>
      <input
        type="text"
        className="w-full rounded border border-black p-2"
        placeholder="ФИО"
        {...register("name")}
      ></input>
      <input
        type="text"
        className="w-full rounded border border-black p-2"
        placeholder="Возраст"
        {...register("age")}
      ></input>
      <p>{watchName}</p>
      <p>{watchAge}</p>
    </div>
  );
};
