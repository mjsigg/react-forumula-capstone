import AuthForm from "./AuthForm";

const SignInPage = () => {
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
        ]}
        submitButtonLabel="sign-in"
      />
    </section>
  );
};

export default SignInPage;
