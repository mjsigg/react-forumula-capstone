import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [isLoading, setisLoading] = useState(false);
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setisLoading(true);
        await onSubmit(values);
        setisLoading(false);
      }}
      className="rounded bg-white border-slate-300 border "
    >
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
          className="bg-emerald-400 w-full m-4 rounded py-2 text-white relative"
        >
          {submitButtonLabel}
          {isLoading && (
            <div className="absolute top-2 right-2 animate-spin">
              <i className="fa-solid fa-spinner-third"></i>
            </div>
          )}
        </button>
      </div>
    </form>
  );
};
export default AuthForm;
