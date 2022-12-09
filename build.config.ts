import {
	rm,
	mkdir,
	readdir,
	readFile,
	writeFile
} from 'node:fs/promises'
import { existsSync } from 'fs'
import { defineBuildConfig } from 'unbuild'

function clean(path: string) {
	if (existsSync(path)) {
		return rm(path, {
			force: true,
			recursive: true
		})
	}
}

export default defineBuildConfig({
	hooks: {
		async 'build:done'() {
			await clean('./deno')
			await clean('./mod.ts')

			await mkdir('./deno')

			const indexBuffer = await readFile('src/index.ts')

			const mod = indexBuffer
				.toString()
				.replace(
					/export \* from ['"]\.\/(.*)['"]/g,
					`export * from './deno/$1.ts'`
				)

			await writeFile('./mod.ts', mod)

			const dir = await readdir('src')
			dir
				.filter(v => v !== 'index.ts')
				.map(v => {
					return {
						path: v,
						content: readFile(`src/${v}`)
					}
				})
				.forEach(async v => {
					const buffer = await v.content

					await writeFile(
						`deno/${v.path}`,
						buffer
							.toString()
							.replace(
								/import ([\w\W]*) from ['"](.*)['"]/g,
								`import $1 from '$2.ts'`
							)
					)
				})
		}
	}
})
