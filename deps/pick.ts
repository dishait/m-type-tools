export type PartialPick<T, K extends keyof T> = Partial<
	Pick<T, K>
>

export type RequiredPick<T, K extends keyof T> = Required<
	Pick<T, K>
>

export type ReadonlyPick<T, K extends keyof T> = Readonly<
	Pick<T, K>
>
