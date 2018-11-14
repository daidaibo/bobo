<template>
  <div class="skill fl no-select">
    <ul>
      <li
        :class="['p', {on: idx === 5}]" 
        v-for="(item, idx) in $root.skill.list"
        :key="idx"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'skill',
  rootData() {
    return {
      skill: {
        list: [
          {name: "Java"},
          {name: "C"},
          {name: "C++"},
          {name: "Python"},
          {name: "C#"},
          {name: "JavaScript"},
          {name: "PHP"},
          {name: "SQL"},
          {name: "Go"},
          {name: "Swift"},
          {name: "R"},
          {name: "Ruby"},
          {name: "MATLAB"},
          {name: "Perl"},
          {name: "PL/SQL"},
        ],
      },
    }
  },
  rootMethods: {

  },
  mounted() {
    const root = this.$root
    const r = root.router
    
    
  }
}
</script>

<style lang="scss" scoped>
.skill {
  ul {
    li {
      padding: .2em 0;
      &.on {color: #09f;}
    }
  }
}
</style>