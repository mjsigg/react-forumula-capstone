import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <FormContainer>
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
        />
      </section>
      <Link to={"/sign-up"} className="underline text text-green-500">
        create an account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
