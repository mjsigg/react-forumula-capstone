import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonLabel } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form className="rounded bg-white border-slate-300 border ">
      {fields.map((field) => (
        <Field
          onChange={(e) =>
            setValues({ ...values, [field.label]: e.target.value })
          }
          label={field.label}
          key={field.label}
          type={field.type}
          values={values}
        />
      ))}
      <div className="flex">
        <button
          key={submitButtonLabel}
          className="bg-emerald-400 w-full m-4 rounded py-2 text-white"
        >
          {submitButtonLabel}
        </button>
      </div>
    </form>
  );
};
export default AuthForm;
