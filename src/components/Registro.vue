<template>
  <div class="hello">
    <el-row>
      <el-button
        type="primary"
        icon="fas fa-edit"
        @click="handleClickLogin"
        :disabled="!isInit"
      >get authCode</el-button>
      <el-button
        type="primary"
        icon="fas fa-edit"
        @click="handleClickSignIn"
        v-if="!isSignIn"
        :disabled="!isInit"
      >sign in</el-button>
      <el-button
        type="primary"
        icon="fas fa-edit"
        @click="handleClickSignOut"
        v-if="isSignIn"
        :disabled="!isInit"
      >sign out</el-button>
      <i class="fas fa-edit"></i>
      <p>isInit: {{isInit}}</p>
      <p>isSignIn: {{isSignIn}}</p>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      isInit: false,
      isSignIn: false
    };
  },
  methods: {
    async handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then(async authCode => {
          //on success
          let data = "";
          // const data = {
          //   code: authCode,
          //   redirect_uri: "https://tlh59.csb.app/",
          //   client_id:
          //     "974972382034-sdm1v6gfd9mh4gc902ebb1gtngaaopdo.apps.googleusercontent.com",
          //   client_secret: "clipAds9CayVwGptgiv78Y8U",
          //   grant_type: "authorization_code",
          //   scopes: ""
          // };

          data += `client_id=974972382034-sdm1v6gfd9mh4gc902ebb1gtngaaopdo.apps.googleusercontent.com&`;
          data += `client_secret=clipAds9CayVwGptgiv78Y8U&`;
          data += `redirect_uri=postmessage&`;
          data += `grant_type=authorization_code`;
          data += `code=${authCode}&`;

          const response = await fetch(`https://lebit.free.beeceptor.com`, {
            // const response = await fetch(`www.googleapis.com/oauth2/v4/token`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: data
          });
          console.log("authCode", authCode);
          console.log("response", response);
        })
        .catch(error => {
          //on fail do something
        });
    },

    handleClickSignIn() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          //on success do something
          console.log("GoogleUser", GoogleUser);
          console.log("getId", GoogleUser.getId());
          console.log("getBasicProfile", GoogleUser.getBasicProfile());
          console.log("getAuthResponse", GoogleUser.getAuthResponse());
          console.log(
            "getAuthResponse",
            this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
          );
          this.isSignIn = this.$gAuth.isAuthorized;
        })
        .catch(error => {
          //on fail do something
        });
    },

    handleClickSignOut() {
      this.$gAuth
        .signOut()
        .then(() => {
          //on success do something
          this.isSignIn = this.$gAuth.isAuthorized;
        })
        .catch(error => {
          //on fail do something
        });
    }
  },

  created() {
    let that = this;
    let checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>