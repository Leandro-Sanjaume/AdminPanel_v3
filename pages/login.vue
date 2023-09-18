<script lang="ts" setup>
import { AuthError, AuthErrorType } from '../models/AuthErrors';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { use_user_store } from '../stores/use_user_store';

const email_login = ref('');
const password_login = ref('');

const user_store = use_user_store();
const error: Ref<AuthError> = ref({ type: AuthErrorType.NoError, msg: '' });

const login_user = async () => {
  if ( email_login.value.trim() == "" || password_login.value.trim() == "" ) {
      error.value = { type: AuthErrorType.IncompleteFields, msg: 'Please complete all fields' };
      return;
  }

  const login_result = await signInWithEmailAndPassword( getAuth(), email_login.value, password_login.value )
  .catch( ( reason: any ) => {
      if ( reason instanceof Error ) {
          error.value = { type: AuthErrorType.FirebaseAuthError, msg: reason.message };
          return;
      }
  } );

  user_store.user = login_result!.user;
  await navigateTo('/home')
};

if ( user_store.user != null ) {
  await navigateTo({ path: '/home' })
}

definePageMeta({
  //@ts-ignore
  layout: 'none'
})
</script>

<template>
  <div class=" w-[100vw] h-[100vh] flex items-center justify-center">
    <div class="join join-vertical sm:join-horizontal px-5 my-6 sm:px-12 sm:py-12 sm:my-24">
      <img class="mx-auto w-56 pr-4" src="../public/logo.png" alt="Instituto Politecnico Modelo">
      <form  @submit.prevent @submit="login_user" class="space-y-3 w-80">
        <div>
          <h1 class="font-bold text-xl lg:text-2xl tracking-tight">Login</h1>
        </div>
        <div class="space-y-2">
          <label for="email" class="block font-medium tracking-tight">Email</label>
          <input type="email" placeholder="Email" v-model="email_login"
class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
          />
        </div>
        <div class="space-y-2">
          <label for="password" class="block font-medium tracking-tight">Password</label>
          <input type="password" placeholder="Password" v-model="password_login"
          class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
          />
        </div>
        <div class="flex justify-end">
          <input class="btn btn-accent" type="submit" value="Login">
        </div>
      </form>
    </div>
  </div>

  <div class="error-container" v-if="error.type != AuthErrorType.NoError">
        <b style="color: red">Error: {{ error.msg }}</b>
    </div>

</template>

<style>
.error-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
