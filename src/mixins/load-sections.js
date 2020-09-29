// Utilities
import {
  camelCase,
  upperFirst,
  replace,
} from 'lodash'

export default function (sections = []) {
  return {
    name: 'LoadSections',

    // Iterates the provide list of components
    // and returns a function that returns a
    // Promise.
    components: sections.reduce((acc, cur) => {
      let name = upperFirst(camelCase(cur))
      let current = name
      if (cur.indexOf('--') > -1) {
        current = replace(cur, '--', '/')
        name = replace(cur, '--', '-')
      }
      console.log(name + ':' + current)
      acc[`Section${name}`] = () => import(`@/views/sections/${current}.vue`)

      return acc
    }, {}),

    data: () => ({ sections }),
  }
}
