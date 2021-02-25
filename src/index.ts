import { writeFileSync } from 'fs'
import { join } from 'path'
import { format } from 'prettier'
import { compileFile } from 'pug'

try {
  console.log('Building page...')
  const page = compileFile(join(__dirname, 'template.pug'))({
    version: require('../package.json').version,
  })

  console.log('Writing file...')
  writeFileSync(
    join(__dirname, '../dist/index.html'),
    format(page, { filepath: join(__dirname, '../.prettierrc'), parser: 'html' }),
    'utf-8',
  )

  console.log('Done! ✅')
  process.exit(0)
} catch (err: unknown) {
  console.error('Error building page:')
  if (err instanceof Error) {
    console.log(err.message)
  } else {
    console.error(err)
  }

  process.exit(1)
}
