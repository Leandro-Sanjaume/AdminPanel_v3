<script lang="ts" setup>
import { use_user_store } from '../stores/use_user_store';  
import { signOut, getAuth } from 'firebase/auth'
const user_store = use_user_store();

const logout_user = () => {
    user_store.user = null;
    user_store.logged_in = false;
    signOut( getAuth() );
    navigateTo({ path: '/login' })
};
</script>
<template>
    <header>
        <div class="navbar bg-secondary text-white">
            <div class="text-2xl flex-1 ml-5 font-bold">
                <NuxtLink to="/home">PoliFaces</NuxtLink>
            </div>
            <div class="">
                <div class="nav-links flex gap-6 mx-6">
                     <div class="text-xl"><NuxtLink to="/recognizedList">Students List</NuxtLink></div>
                     <div class="text-xl"><NuxtLink to="/unrecognized">Unrecognized</NuxtLink></div>
                </div>
                <div class="dropdown dropdown-end mr-4">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="leto.jpg" />
                        </div>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NuxtLink to="/profile">Profile</NuxtLink>
                        </li>
                        <li><a>Settings</a></li>
                        <li><input type="button" value="Logout" @click="logout_user"></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <slot> </slot>
    <footer></footer>
</template>

<style>
@media (width < 650px) {
    .nav-links {
        display: none;
    }
}
    
</style>
