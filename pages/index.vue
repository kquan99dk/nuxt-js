<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  created () {
    this.$usersServices.getInfo()
  }
}
</script>
