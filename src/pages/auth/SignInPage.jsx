import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userService from "services/user";
import { useState } from "react";

const SignInPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();

  return (
    <FormContainer>
      {<p className="text-red-500 mt-1">{errorMessage}</p>}
      {location.state?.accountCreated && errorMessage.length === 0 && (
        <div className="text-green bg-green-200 rounded p-4 text-sm text-emerald-700 mt-2 border border-emerald-500">
          Account created successfully. Please sign in.
        </div>
      )}

      <section className="flex justify-center items-center p-2 m-2">
        <AuthForm
          fields={[
            {
              label: "username",
              type: "text",
            },
            {
              label: "password",
              type: "text",
            },
          ]}
          submitButtonLabel="sign-in"
          onSubmit={async (values) => {
            const response = await userService.createSession({
              username: values.username,
              password: values.password,
            });

            if (response.status === 201) {
              console.log("sign in successful");
              setErrorMessage("");
            } else {
              const data = await response.json();
              setErrorMessage(data.error);
            }
          }}
        />
      </section>
      <Link to={"/sign-up"} className="underline text text-green-500">
        create an account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
