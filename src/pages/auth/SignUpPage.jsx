import AuthForm from "./AuthForm";

const SignUpPage = () => {
  return (
    <section className="flex border justify-center items-center p-2 m-2">
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
        submitButtonLabel="sign-in"
      />
    </section>
  );
};

export default SignUpPage;
