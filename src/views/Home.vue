<template>
  <div>
    <Nav headTitle="Login" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Home",
  components: {
    Nav,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
