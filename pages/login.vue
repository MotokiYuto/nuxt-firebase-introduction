<template>
  <div class="login">
    <div>
      <label>
        電話番号： <input v-model="phoneNumber" type="tel" required />
      </label>
      <br />
      <button @click="login">ログイン</button>
      <br />
      <NuxtLink to="/">戻る</NuxtLink>
    </div>
    <!-- <div>
    //   <label>
    //     確認番号： <input v-model="phoneNumber" type="tel" required />
    //   </label>
    // </div> -->
  </div>
</template>


<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      phoneNumber: null,
    };
  },
  methods: {
    login() {
      const phoneNumber = this.phoneNumber;
      const appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          console.log(confirmationResult);
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>