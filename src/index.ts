import { writeFileSync } from 'fs'
import { format } from 'prettier'
import { compileFile } from 'pug'

import { VERSION } from './env'
import * as paths from './paths'

try {
  console.log('Building page...')
  const page = compileFile(paths.src('template.pug'))({
    version: VERSION,
  })

  console.log('Writing file...')
  writeFileSync(
    paths.dist('index.html'),
    format(page, { filepath: paths.root('.prettierrc'), parser: 'html' }),
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
