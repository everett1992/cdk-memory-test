// Even tho we import only named export Bar, this will evaluate the Foo getter.
import { Bar } from './lazy.cjs'
console.log(Bar)
