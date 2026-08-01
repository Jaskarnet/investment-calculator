export default function Input({ name, value, ...rest }) {
  return (
    <p>
      <label htmlFor={name}>{name}</label>
      <input {...rest} id={name} />
    </p>
  );
}
