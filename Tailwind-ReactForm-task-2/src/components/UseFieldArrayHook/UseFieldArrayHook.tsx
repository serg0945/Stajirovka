import { useFieldArray, useFormContext } from "react-hook-form";
import { IForm } from "../types";

export const UseFieldArrayHook = () => {
  const { register } = useFormContext<IForm>();
  const {
    fields,
    append,
    prepend,
    remove,
    swap,
    move,
    insert,
    replace,
    update,
  } = useFieldArray<IForm>({
    name: "cart",
  });
  // const handleInsert = () => { // Тута ошибка, хз
  //   const newField: IForm = {
  //     cart: {
  //       name: "",
  //       price: 0,
  //     },
  //   };
  //   insert(1, newField);
  // };
  // const handleUpdate = (index: number, newValue: Partial<IForm>) => {
  //   update(index, { ...fields[index], ...newValue });
  // };
  // const handleUpdate = (index: number, newValue: Partial<IForm>) => {
  //   replace(index, { ...fields[index], ...newValue });
  // };
  return (
    <div className="flex flex-col gap-4">
      <p>UseFieldArrayHook</p>
      {fields.map((field, index) => (
        <div className="flex gap-3" key={field.id}>
          <p className="pt-2">{index}</p>
          <input
            className="rounded-sm border border-black p-2"
            {...register(`cart.${index}.name`)}
          />
          <input
            className="rounded-sm border border-black p-2"
            {...register(`cart.${index}.price`)}
          />
          <button
            className="rounded border border-black p-1"
            onClick={() => remove(index)}
          >
            Удалить
          </button>
          <button
            className="rounded border border-black p-1"
            onClick={() => swap(index, index + 3)} // Обменивает только два инпута
          >
            Свапнуть на +3
          </button>
          <button
            className="rounded border border-black p-1"
            onClick={() => move(index, index + 3)} // Сдвигает инпуты все на пути
          >
            Переместетить на +3
          </button>
          {/* <button
            className="rounded border border-black p-1"
            onClick={(e) => handleUpdate(index, { cart: e.target.value })} // Сдвигает инпуты все на пути
          >
            Переместетить на +3
          </button> */}
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: "Конец", price: 100 })}
        className="w-full rounded border border-black p-1"
      >
        Добавить в конец
      </button>
      <button
        type="button"
        onClick={() => prepend({ name: "Начало", price: 0 })}
        className="w-full rounded border border-black p-1"
      >
        Добавить в начало
      </button>
      {/* <button
        type="button"
        onClick={() => prepend(handleInsert)}
        className="w-full rounded border border-black p-1"
      ></button> */}
    </div>
  );
};
