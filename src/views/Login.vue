<template>
  <div>
    <Nav headTitle="Login" />
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" prop="username">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password">
          <mu-text-field
            type="password"
            v-model="validateForm.password"
            prop="password"
          ></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      validateForm: {
        username: "",
        password: "",
        isAgree: false,
      },
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((result) => {
        if (
          this.validateForm.username == "admin" ||
          this.validateForm.password == "123456"
        ) {
          const locUsername = this.validateForm.username;
          const locPassword = this.validateForm.password;
          console.log("login success");
          // 把登录信息存到 localStorage
          localStorage.setItem("username", JSON.stringify(locUsername));
          localStorage.setItem("password", JSON.stringify(locPassword));
          this.$router.push("/home");
        } else {
          console.log("err");
        }
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false,
      };
    },
    isLogin() {
      const getlocUsername = localStorage.getItem("username");
      const getlocPassword = localStorage.getItem("password");
      if (getlocUsername && getlocPassword) {
        this.$router.push("/home");
      } else {
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.isLogin();
  },
};
</script>
<style>
.container {
  padding-top: 30px;
}
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>
