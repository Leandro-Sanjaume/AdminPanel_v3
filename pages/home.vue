<script lang="ts" setup>
import { use_user_store } from "../stores/use_user_store";

const user_store = use_user_store();

//if ( user_store.user != null ) {
//    logged_in.value = true;
//}

//if ( user_store.user == null ) {
//  navigateTo('/login');
//}
</script>

<template>
  <!--div>
    <div class="text-white text-3xl text-center p-4">Dashboard</div>
  </div-->
  <div class="text-white text-center mt-5" v-if="user_store.logged_in">
    <span class="text-3xl">Welcome {{ user_store.user!.email }} to IPM's Face Recognition Control
      Panel</span>
  </div>

  <div class="w-100 flex justify-center mt-5">
    <label class="swap swap-flip text-9xl">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" />

      <div class="swap-on">😈</div>
      <div class="swap-off">😇</div>
    </label>
  </div>

  <div class="w-100 flex justify-center mt-10">
    <div class="stats flex mystats shadow bg-neutral">
      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20"
            width="36px" fill="#FFFFFF">
            <g>
              <rect fill="none" height="20" width="20" />
            </g>
            <g>
              <g>
                <path d="M10.14,10.93C7.85,10.59,4,11.52,4,13.21V15h5.35C8.73,13.7,8.93,12.05,10.14,10.93z" />
                <circle cx="9" cy="7.5" r="2.5" />
                <path
                  d="M16.06,16.35l-1.48-1.48c0.26-0.4,0.42-0.87,0.42-1.38c0-1.38-1.12-2.5-2.5-2.5S10,12.12,10,13.5c0,1.38,1.12,2.5,2.5,2.5 c0.51,0,0.98-0.15,1.38-0.42l1.48,1.48L16.06,16.35z M12.5,15c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5 S13.33,15,12.5,15z" />
              </g>
            </g>
          </svg>
        </div>
        <div class="stat-title">Unrecognized</div>
        <div class="stat-value">5</div>
        <div class="stat-desc">Unrecognized users</div>
      </div>

      <div class="divider w-100 h-[2px] bg-black"> </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20"
            width="36px" fill="#FFFFFF">
            <g>
              <rect fill="none" height="20" width="20" />
            </g>
            <g>
              <g>
                <path
                  d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 11c-2.05 0-3.87-.95-5.07-2.44 1.45-.98 3.19-1.56 5.07-1.56s3.62.58 5.07 1.56c-1.2 1.49-3.02 2.44-5.07 2.44z" />
              </g>
            </g>
          </svg>
        </div>
        <div class="stat-title">Users</div>
        <div class="stat-value">350</div>
        <div class="stat-desc">20 more in last week</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
          </svg>
        </div>
        <div class="stat-title">Recent registers</div>
        <div class="stat-value">15</div>
        <div class="stat-desc">today</div>
      </div>
    </div>
  </div>

  <div class="w-100 flex justify-center mt-8">
    <div class="card w-[650px]  bg-base-100 shadow-xl bg-neutral">
      <div class="card-body !p-6 items-center text-center">
        <h2 class="card-title">My feed</h2>
        <p>Check out the latest system activity!</p>
        <div class="overflow-x-auto">

          <table class="table mt-2">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>18/09/2023 16:00</td>
                <td>A new user registered!</td>
              </tr>
              <tr>
                <td>18/09/2023 17:00</td>
                <td>50 users were detect in the last hour!</td>
              </tr>
              <tr>
                <td>18/09/2023 18:00</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media(width < 700px) {
  .mystats {
    flex-direction: column !important;
  }
}
</style>
