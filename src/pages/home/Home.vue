<script lang="ts">
// const count = ref(0);

export default {
  data() {
    return {
      username: "",
      users: [],
      isDisable: false,
    };
  },
  methods: {
    addName: function (e: any) {
      e.preventDefault();
      const username = this.username;
      const user = localStorage.getItem("user");
      const use = new Array();
      if (user === null) {
        localStorage.setItem("user", username);
      } else {
        use.push(user, username);
        localStorage.setItem("user", use);
        this.username = "";
      }
      this.users = localStorage.getItem("user")?.split(",");
      this.username = "";
    },
    removeName: function (e: any) {
      e.preventDefault();
      const user = localStorage.getItem("user");
      if (!user) {
        alert("não existe nomes ");
      } else {
        const t: any = user.split(",");
        t.pop();
        localStorage.setItem("user", t);
      }
      this.users = localStorage.getItem("user")?.split(",");
      this.username = "";
    },
  },
  computed: {
    isDisabled() {
      if (this.username === "") return true;
    },
  },
};
</script>

<template>
  <form v-on:submit="addName">
    <input v-model="username" placeholder="Adicionar na lista" />
    <p>Seu nome é: {{ username }}</p>
    <button type="submit" v-on:click="addName" :disabled="isDisabled">
      Cadastrar
    </button>
  </form>
  <div>
    <button v-on:click="removeName">Remover</button>

    <ul v-if="users" id="List">
      <li v-for="index of users" :key="index">
        {{ index }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
