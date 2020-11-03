// Utilities
import {
  camelCase,
  upperFirst,
} from 'lodash'

export default function (sections = []) {
  return {
    name: 'LoadSections',

    // Iterates the provide list of components
    // and returns a function that returns a
    // Promise.
    components: sections.reduce((acc, cur) => {
      // 设置路径
      const lastname = cur.split('/').pop()
      const name = upperFirst(camelCase(lastname))

      var reg = new RegExp(lastname,"g")
      var path = 'sections/' + cur.replace(reg,"")
      
      acc[`Section${name}`] = () => import(`@/views/${path}${name}.vue`)
      return acc
    }, {}),

    data: () => ({ sections }),
  }
}
