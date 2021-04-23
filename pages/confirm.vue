<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{ this.$route.params.user.displayName }}</p>
      <p>{{ this.$route.params.user.email }}</p>
    </div>
  </div>
</template>

<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

