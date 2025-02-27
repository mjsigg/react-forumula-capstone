import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "services/user";
import { useState } from "react";
const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  return (
    <FormContainer>
      {<p className="text-red-500 mt-1">{errorMessage}</p>}
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
            {
              label: "confirm password",
              type: "text",
            },
          ]}
          submitButtonLabel="create account"
          onSubmit={async (values) => {
            if (values.username.length < 4) {
              setErrorMessage("username is too short");
              return;
            }
            if (values.password.length <= 4) {
              setErrorMessage("password is too short");
              return;
            }
            if (values.password !== values["confirm password"]) {
              setErrorMessage("passwords do not match");
              return;
            }
            setErrorMessage("");
            // make request
            try {
              const response = await userService.createUser({
                username: values.username,
                password: values.password,
              });

              console.log(response);

              if (response.status != 201) {
                const data = await response.json();
                setErrorMessage(data.error);
              } else {
                // navigate the user to signin page
                setErrorMessage("");
                navigate("/", {
                  state: {
                    accountCreated: true,
                  },
                });
              }
            } catch (error) {
              setErrorMessage(error.message);
            }
          }}
        />
      </section>
      <Link to={"/sign-in"} className="underline text">
        sign-in
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
