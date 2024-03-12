import {
  SubmitHandler,
  SubmitErrorHandler,
  useFormContext,
} from "react-hook-form";

import { IForm } from "@components/types";

const submit: SubmitHandler<IForm> = (data) => {
  console.log(data);
};

const error: SubmitErrorHandler<IForm> = (data) => {
  console.log(data);
};

export const Form = () => {
  const { handleSubmit } = useFormContext<IForm>();

  return (
    <>
      <form onSubmit={handleSubmit(submit, error)}>
        <button
          type="submit"
          className="w-full rounded bg-pink-400 p-3 tracking-[.3em] text-white"
        >
          ОТПРАВИТЬ
        </button>
      </form>
    </>
  );
};
