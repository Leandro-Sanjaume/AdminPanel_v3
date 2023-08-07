<script lang="ts" setup>
import { use_user_store } from '../stores/use_user_store';

const user_store = use_user_store();
const logged_in = ref( false );

if ( user_store.user != null ) {
    logged_in.value = true;
}

const logout_user = () => {
    user_store.user = null;
    logged_in.value = false;
    navigateTo({ path: '/login' })
};

if ( user_store.user == null ) {
  navigateTo('/login');
}
</script>

<template>
  <div>
    <div class="space-x-2" v-if="logged_in">
        <span>Currently logged in as {{ user_store.user!.email }}</span>
        <input class="btn btn-primary btn-sm" type="button" value="Logout" @click="logout_user">
    </div>
    <div>
        <h1 class="pt-2 text-3xl">Datos de Serie Comercial en Millones de Dolares</h1>

        <hr>
    </div>
    <ApiData v-if="logged_in" @fetch_error="console.error" />
  </div>
</template>

<style>

</style>
