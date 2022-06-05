export type AnyFunction = (...args: any) => any

export type AsyncFunciton<T extends AnyFunction> = (
	...args: Parameters<T>
) => Promise<ReturnType<T>>

export type AnyAsyncFunction = AsyncFunciton<AnyFunction>

export type UnArray<T> = T extends Array<infer P> ? P : T

export type UnSet<T> = T extends Set<infer P> ? P : T

export type UnWeakSet<T> = T extends WeakSet<infer P>
	? P
	: T

export type UnMap<T> = T extends Map<infer K, infer V>
	? [K, V]
	: T

export type UnWeakMap<T> = T extends WeakMap<
	infer K,
	infer V
>
	? [K, V]
	: T

export type UnPromise<T> = T extends Promise<infer P>
	? P
	: T

export type UnPromiseReturnType<T extends AnyFunction> =
	UnPromise<ReturnType<T>>

export type UnAsyncFunctionReturnType<
	T extends AnyAsyncFunction
> = UnPromise<ReturnType<T>>

export type PartialPick<T, K extends keyof T> = Partial<
	Pick<T, K>
>

export type RequiredPick<T, K extends keyof T> = Required<
	Pick<T, K>
>

export type ReadonlyPick<T, K extends keyof T> = Readonly<
	Pick<T, K>
>
