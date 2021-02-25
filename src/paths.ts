import { join } from 'path'

export const root = (...args: string[]) => join(__dirname, '..', ...args)
export const dist = (...args: string[]) => root('dist', ...args)
export const src = (...args: string[]) => root('src', ...args)
