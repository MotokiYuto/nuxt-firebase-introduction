
<template>
  <div>
    <input v-model="code" type="number" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: null,
    };
  },
  methods: {
    verify() {
      confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          console.log(user);
          const user = result.user;
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    },
  },
};
</script>

<style>
</style>