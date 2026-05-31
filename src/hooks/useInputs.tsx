import { SchemaType, FormActionsType, PageType } from "@/types/types";

type Params<MapperType extends () => React.ElementType> = {
  page: PageType["data"];
  pageIndex: number;
  handleChangeCheckbox: FormActionsType["handleChangeCheckbox"];
  handleChangeTextInput: FormActionsType["handleChangeTextInput"];

  inputs: SchemaType;
  mapper?: (...args: Parameters<MapperType>) => {};
  type?: string;
};

export function useInputs<MapperType extends () => React.ElementType>(props: Params<MapperType>) {
  const { inputs = {}, mapper = () => {} } = props;

  console.log({ props });
  // if (Array.isArray(inputs)) return inputs.map((data, i) => mapper(data, { ...props, i }));

  // if (typeof inputs === "number") return Array.apply(null, Array(inputs)).map((_, i) => mapper({ ...props, i }));

  return Object.entries(inputs).map((data, i) => mapper(data, { ...props, i }));
}
