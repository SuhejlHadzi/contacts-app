<template>
  <div id="app">
    <contacts-page></contacts-page>
  </div>
</template>

<script>
import intro from "@/components/contacts.vue";

export default {
  name: "App",
  components: { "contacts-page": intro }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap");

html,
body {
  margin: 0px;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;
}
</style>
