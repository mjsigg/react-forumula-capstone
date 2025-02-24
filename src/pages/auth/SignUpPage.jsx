import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
const SignUpPage = () => {
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
            {
              label: "confirm password",
              type: "text",
            },
          ]}
          submitButtonLabel="sign-up"
        />
      </section>
      <Link to={"/sign-in"} className="underline text">
        sign-in
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
