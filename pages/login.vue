<script lang="ts" setup>
import { AuthError, AuthErrorType } from '../models/AuthErrors';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { use_user_store } from '../stores/use_user_store';

const email_login = ref('');
const password_login = ref('');

const user_store = use_user_store();
const logged_in = ref( false );
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
    logged_in.value = true;
    await navigateTo({ path: '/home' })

    clear_inputs();
};

const clear_inputs = () => {
    email_login.value = '';
    password_login.value = '';
};

if ( user_store.user != null ) {
    logged_in.value = true;
    if(logged_in.value){
      await navigateTo({ path: '/home' })
    }
}

</script>

<template>
 <div class="flex flex-row">
    <div class="w-1/3 flex items-center justify-center px-24 py-24">
      <NuxtLink
        to="/register"
        class="px-4 py-2 font-medium text-4xl text-white capitalize transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-800 focus:ring-opacity-80"
      >Register page</NuxtLink>
    </div>
   
    <div class="w-1/3 px-12 py-12 my-24 mx-24">
      <form  @submit.prevent @submit="login_user" class="space-y-3">
        <div>
          <h1 class="font-bold text-lg md:text-xl xl:text-2xl tracking-tight">Login</h1>
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
          <input type="submit" value="Register">
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
