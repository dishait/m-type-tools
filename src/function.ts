export type AnyFunction = (...args: any) => any;

export type AsyncFunciton<T extends AnyFunction> = (
  ...args: Parameters<T>
) => Awaited<ReturnType<T>>;

export type AnyAsyncFunction = AsyncFunciton<AnyFunction>;
