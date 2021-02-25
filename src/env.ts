function isString(maybe: unknown): maybe is string {
  return typeof maybe === 'string'
}

function assertsIsString(name: string, value: unknown): asserts value is string {
  if (!isString(value)) {
    throw new Error(`Expected ${name} to be string, found ${typeof value}`)
  }
}

const VERSION = require('../package.json').version

assertsIsString('VERSION', VERSION)
export { VERSION }
