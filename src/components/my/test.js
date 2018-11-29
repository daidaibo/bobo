/*const fs = require('fs')

const arr = [
  'my-info',
  'my-password',
  'my-visited',
  'my-blog',
  'my-comment',
  'manage-user',
  'manage-blog',
]

arr.forEach((name) => {
  fs.writeFileSync(`./${name}.vue`,
`<template>
  <my-wrap>
    <div class="${name}">${name}</div>
  </my-wrap>
</template>

<script>
export default {
  name: '${name}',
  rootData() {
    return {
      
    }
  },
  rootMethods: {

  }
}
</script>

<style lang="scss" scoped>
.${name} {

}
</style>`
  )
})*/