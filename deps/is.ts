import type { AnyAsyncFunction } from "./function.ts";

export const isSymobl = (v: unknown): v is symbol => {
  return typeof v === "symbol";
};

export const isString = (v: unknown): v is string => {
  return typeof v === "string";
};

export const isNumber = (v: unknown): v is number => {
  return typeof v === "number";
};

export const isBoolean = (v: unknown): v is boolean => {
  return typeof v === "boolean";
};

export const isArray = (v: unknown): v is Array<any> => {
  return Array.isArray(v);
};

export const isFunction = (v: unknown): v is Function => {
  return typeof v === "function";
};

export const isObject = (v: unknown): v is object => {
  return typeof v === "object" && v !== null;
};

const { constructor } = Object.getPrototypeOf(
  async function () {},
);

export const isAsyncFunciton = (
  v: unknown,
): v is AnyAsyncFunction => {
  return typeof v === "function" && v instanceof constructor;
};

export const isSet = (v: unknown): v is Set<any> => {
  return v instanceof Set;
};

export const isWeakSet = (
  v: unknown,
): v is WeakSet<any> => {
  return v instanceof WeakSet;
};

export const isMap = (v: unknown): v is Map<any, any> => {
  return v instanceof Map;
};

export const isWeakMap = (
  v: unknown,
): v is WeakMap<any, any> => {
  return v instanceof WeakMap;
};

export const isPromise = (v: unknown): v is Promise<any> => {
  return v instanceof Promise;
};
