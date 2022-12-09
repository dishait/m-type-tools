import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	declaration: true,
	entries: [
		{
			name: 'index',
			input: 'src/mod.ts'
		}
	],
	rollup: {
		emitCJS: true
	}
})
