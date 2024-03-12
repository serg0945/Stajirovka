import { Link } from "react-router-dom";

export const Selection = () => {
  const methodsName = [
    "useForm",
    "useController",
    "useFormContext",
    "useWatch",
    "useFormState",
    "useFieldArray",
  ];
  return (
    <div className="m-10 grid max-w-[840px] grid-cols-1 place-items-center gap-5 md:grid-cols-3">
      {methodsName.map((block) => (
        <Link
          className="w-52 rounded border border-black p-10"
          key={block.length * Math.random()}
          to={`/${block}`}
        >
          <p className="text-center">{block}</p>
        </Link>
      ))}
    </div>
  );
};
