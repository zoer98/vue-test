<template>
  <div>
    <mu-appbar style="width: 100%" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      {{ headTitle }}

      <mu-button flat slot="right">{{ loginName }}</mu-button>
      <mu-button flat slot="right" @click="loginOut">Login out</mu-button>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    headTitle: String,
  },
  data() {
    return {
      loginName: "",
    };
  },
  methods: {
    setData() {
      const getlocUsername = localStorage.getItem("username");
      if (getlocUsername) {
        this.loginName = getlocUsername;
      } else {
        // this.$router.push("/login");
      }
    },
    loginOut() {
      // 退出登录，清除账号密码信息
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.setData();
  },
};
</script>

<style>
.mu-flat-button .mu-button-wrapper {
  text-transform: none;
}
</style>
