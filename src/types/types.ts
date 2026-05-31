import { useForm } from "@/hooks/useForm";
import { baseInputMapper } from "@/utils/baseInputMapper";

export type PageType = {
  id: string;
  type: string;
  data: Record<string, any>;
};

export type PageListType = Record<number, PageType>;

export type FormActionsType = ReturnType<typeof useForm>;

export type MapperReturnType = ReturnType<typeof baseInputMapper>;

export type BaseMapperParameterType = Parameters<typeof baseInputMapper>;

// SCHEMA TYPES

type SchemaInputType = {
  type: "input" | "textarea";
  position: { y: number; x: number };
  size?: { width: number; height?: number };
  className?: string;
  placeholder?: string;
};

type SchemaCheckboxType = {
  type: "checkbox" | "multicheckbox";
  position: { y: number; x: number };
  size: { width: number; height?: number };
  className?: string;
  placeholder?: string;
  appearance?: string;
};

type SchemaContentEditableType = {
  type: "contenteditable";
  position: { y: number; x: number };
  size: { width: number; height?: number };
  className?: string;
  placeholder?: string;
  block: {
    className: string;
    size: { width: number; height: number };
  };
  textarea: {
    className: string;
  };
};

type SchemaRadioGroupType = {
  type: "radiogroup";
  position: { y: number; x: number };
  size: { width: number; height?: number };
  amount: number;
  className: {
    container: string;
    button: string;
  };
  appearance: string;
};

export type SchemaType = Record<
  string,
  SchemaInputType | SchemaCheckboxType | SchemaContentEditableType | SchemaRadioGroupType
>;

export type SchemaListType = {
  startsAt: number | { y: number; x: number };





  
  distanceMultiplier?: number;
  distanceOffset?: number;
  size?: number;
  secondaryElementOffset?: number;
  inputs?: string[];
  className?: string;
  checked?: boolean;
  slotTitle?: { y: number, x: number }
};
