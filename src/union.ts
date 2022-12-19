export type PickUnion<U, K> = U extends K ? U : never

export type OmitUnion<U, K> = U extends PickUnion<U, K>
	? never
	: U

export type UnionToIntersection<T> = (
	T extends any ? (args: T) => any : never
) extends (args: infer R) => any
	? R
	: never

export type LastInUnion<T> = UnionToIntersection<
	T extends any ? (arg: T) => any : never
> extends (arg: infer R) => any
	? R
	: never

export type UnionToTuple<T, U = T> = [T] extends [never]
	? []
	: [
			...UnionToTuple<Exclude<U, LastInUnion<T>>>,
			LastInUnion<T>
	  ]
