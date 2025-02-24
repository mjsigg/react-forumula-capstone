import { Link } from "react-router-dom";

const FormContainer = (props) => {
  const { children } = props;
  return (
    <section className="flex">
      <div className="md:flex hidden relative">
        <img
          className="h-screen object-cover"
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-00/50"></div>
      </div>

      <div className="flex flex-col flex-1 items-center justify-center w-full bg-green-100 h-screen ">
        <img
          className="w-24"
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
        />
        <p className="text-green-700 mt-2 text-2xl">Rica's Plants</p>
        {children}
      </div>
    </section>
  );
};

export default FormContainer;
