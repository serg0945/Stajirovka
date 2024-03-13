import { IForm } from "../types";
import { useFormContext, useFormState } from "react-hook-form";
import { createPortal } from "react-dom";
import mazik from "../../assets/487d060fc3288513c934f32768674ce6.jpg";

export const UseFormStateHook = () => {
  const { register } = useFormContext<IForm>();
  const {
    isDirty,
    touchedFields,
    dirtyFields,
    isSubmitted,
    isSubmitSuccessful,
    isSubmitting,
    submitCount,
    isValid,
    errors,
  } = useFormState<IForm>(); // <IForm> вместо control
  return (
    <div className="flex flex-col gap-4">
      <p>UseFormStateHook</p>
      <input
        type="text"
        className="w-full rounded border border-black p-2"
        {...register("ban")}
      ></input>
      {dirtyFields.ban && <p>Поле изменено</p>}
      {/* {isDirty && <p>Поле изменено вообще</p>} */}
      {isDirty &&
        createPortal(
          <img
            src={mazik}
            className="absolute bottom-28 z-50 mb-[80px] ml-96"
          ></img>,
          document.body,
        )}
      {touchedFields.ban && <p>OnBlur</p>}
      {isSubmitted && <p>Отправлено</p>}
      {isSubmitSuccessful && <p>Отправлено успешно</p>}
      {isSubmitting && <p>Отправляется</p>}
      {submitCount == 1 && <p>Отправилась одна форма</p>}
      {isValid && <p>В форме нет ошибок</p>}
      {errors.age && <p>{errors.age.message}</p>}
    </div>
  );
};
