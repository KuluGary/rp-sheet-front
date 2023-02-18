export const useInputs = (props) => {
  const { inputs = {}, mapper = () => {} } = props;

  if (Array.isArray(inputs)) return inputs.map((data, i) => mapper(data, { ...props, i }));

  if (typeof inputs === "number") return Array.apply(null, Array(inputs)).map((_, i) => mapper({ ...props, i }));

  return Object.entries(inputs).map((data, i) => mapper(data, { ...props, i }));
};
