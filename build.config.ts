import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	declaration: true,
	entries: [
		{
			name: 'index',
			input: 'mod.ts'
		}
	],
	rollup: {
		emitCJS: true
	}
})
