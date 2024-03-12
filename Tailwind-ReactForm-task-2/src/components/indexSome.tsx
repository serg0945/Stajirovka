import { useEffect } from "react";
import {
  useWatch,
  useForm,
  useFormState,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  Controller,
} from "react-hook-form";

interface IMyForm {
  age: number;
  name: string;
  email: string[];
  ban: string;
}

export function Form() {
  const { handleSubmit, watch, control, register } = useForm<IMyForm>({
    defaultValues: {
      ban: "Шлёпа. Не менять!!!",
    },
  });

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
  } = useFormState({
    control,
  });
  const mainForm = useForm<IMyForm>();

  const watchName = useWatch({
    control,
    name: "name",
    defaultValue: "Карта России",
  });

  const watchInput = watch("name");
  //   const [age, name] = watch(["age", "name"]);
  //   const watchInput = watch(); // Без параметра ссылка на саму форму

  const onSubmit: SubmitHandler<IMyForm> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<IMyForm> = (data) => {
    console.log(data);
  };

  //   useEffect(() => {
  //     const subscription = watch((value) => {
  //       console.log(value);
  //     });
  //     return () => subscription.unsubscribe();
  //   }, [watch]);

  return (
    <FormProvider {...mainForm}>
      <div className="grid place-items-center p-28">
        {/* <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field }) => <input {...field}></input>}
      /> */}
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex w-96 flex-col gap-5"
        >
          <p>{watchInput}</p>
          <p>{watchName}</p>
          <input
            type="text"
            className="w-full rounded border border-black p-2"
            placeholder="ФИО"
            {...control.register("age", {
              maxLength: 12,
            })}
          />
          <input
            type="text" // в type="number" по умолчанию не вставляется
            className="w-full rounded border border-black p-2"
            placeholder="Возраст"
            {...control.register("name")}
          ></input>
          <input
            type="text"
            className="w-full rounded border border-black p-2"
            placeholder="НЕ МЕНЯТЬ!!!"
            {...register("ban")}
          ></input>
          {dirtyFields.ban && <p>Поле изменено</p>}
          {isDirty && <p>Поле изменено вообще</p>}
          {touchedFields.ban && <p>OnBlur</p>}
          {isSubmitted && <p>Отправлено</p>}
          {isSubmitSuccessful && <p>Отправлено успешно</p>}
          {isSubmitting && <p>Отправляется</p>}
          {submitCount == 1 && <p>Отправилась одна форма</p>}
          {isValid && <p>В форме нет ошибок</p>}
          {errors.age && <p>{errors.age.message}</p>}
          <button
            type="submit"
            className="w-full rounded bg-pink-400 p-3 tracking-[.3em] text-white"
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </FormProvider>
  );
}
