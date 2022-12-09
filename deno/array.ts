export type ItemExist<V, A = []> = A extends [
	infer F,
	...infer P
]
	? V extends F
		? V
		: ItemExist<V, P>
	: V

export type ItemNotExist<V, A = []> = A extends [
	infer F,
	...infer P
]
	? V extends F
		? never
		: ItemNotExist<V, P>
	: V

export type FilterNeverInArray<
	T,
	G extends unknown[] = []
> = T extends [infer F, ...infer P]
	? FilterNeverInArray<
			P,
			[F] extends [never] ? [...G] : [...G, F]
	  >
	: G

export type UniqueArray<
	T,
	G extends unknown[] = []
> = T extends [...infer P, infer L]
	? UniqueArray<P, [ItemNotExist<L, P>, ...G]>
	: FilterNeverInArray<G>
