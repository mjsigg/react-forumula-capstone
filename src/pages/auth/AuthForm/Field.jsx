const Field = (props) => {
  const { label, type, values, onChange } = props;

  return (
    <div key={label} className="flex flex-col p-2 m-2">
      <label className="my-1" htmlFor={label}>
        {label}
      </label>
      <input
        label={label}
        value={values[label]}
        onChange={onChange}
        id={label}
        type={type}
        className="border border-black w-64 rounded focus:outline-emerald-600 p-1"
      />
    </div>
  );
};
export default Field;
