<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-btn @click="goTo('/user/in2020')">User</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({

    }),
    methods:{
      goTo(uri){
        this.$router.push(uri);
      }
    }
  }
</script>

<style>

</style>
