<script setup lang="ts">
</script>

<template>
<section id="userTemplate" class="flex justify-center mt-4">

    <div id="userContainer" class="join bg-gray-800 rounded-3xl join-vertical sm:join-horizontal md:p-14 sm:p-10 p-8 mb-24 mx-2 md:mx-10">

        <div id="userImage" class=" "> <div class="avatar online md:h-[240px] md:w-[240px] sm:h-[200px] sm:w-[200px] h-[160px] w-[160px]"><img class="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://avatars.githubusercontent.com/u/82118333?v=4" alt="User Image"></div></div>
        <div id="userInfo" class="ml-6">
            <ul class="mt-2 sm:ml-6 md:ml-12">
                <h1 class="text-3xl font-bold mb-3">Erling Halland</h1>
                <h1 class="text-xl">Halland@gmail.com</h1>
            </ul>
        <div id="userProjects" class="card bg-gray-900 p-3 mt-4 sm:ml-6 md:ml-12">
            <ul class="flex flex-col  lg:grid lg:grid-cols-2 gap-5">
                <NuxtLink href="project.com">
                <div id="projectCard" class="card bg-gray-950 pb- hover:bg-gray-700">
                    <ul class="max-w-[450px] max-h-[150px] overflow-hidden p-4">
                        <h1 class="mb-2">Project 1</h1>
                        <p class="text-ellipsis">Dolor amet, accusantium modi excepturi ea eius quos consectetur maiores, voluptate omnis dolorem iste nihil deleniti repudiandae quia perspiciatis autem ab ex vel. Tenetur.</p>
                    </ul>
                </div>
                </NuxtLink>
                <div id="projectCard" class="card bg-gray-950 pb- hover:bg-gray-700">
                    <ul class="max-w-[400px] max-h-[100px] overflow-hidden p-4">
                        <h1 class="mb-2">Project 1</h1>
                        <p class=" text-ellipsis">ALEA JACTA ES nostrum, enim quaerat atque? Fugit quia voluptatibus quidem nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium modi excepturi ea eius quos consectetur maiores, voluptate omnis dolorem iste nihil deleniti repudiandae quia perspiciatis autem ab ex vel. Tenetur.</p>
                    </ul>
                </div>
                <div id="projectCard" class="card bg-gray-950 pb- hover:bg-gray-700">
                    <ul class="max-w-[400px] max-h-[100px] overflow-hidden p-4">
                        <h1 class="mb-2 ">Project 1</h1>
                        <p class=" text-ellipsis">ALEA JACTA ES nostrum, enim quaerat atque? Fugit quia voluptatibus quidem nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium modi excepturi ea eius quos consectetur maiores, voluptate omnis dolorem iste nihil deleniti repudiandae quia perspiciatis autem ab ex vel. Tenetur.</p>
                    </ul>
                </div>
                <div id="projectCard" class="card bg-gray-950 pb- hover:bg-gray-700">
                    <ul class="max-w-[400px] max-h-[100px] overflow-hidden p-4">
                        <h1 class="mb-2 ">Project 1</h1>
                        <p class=" text-ellipsis">ALEA JACTA ES nostrum, enim quaerat atque? Fugit quia voluptatibus quidem nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium modi excepturi ea eius quos consectetur maiores, voluptate omnis dolorem iste nihil deleniti repudiandae quia perspiciatis autem ab ex vel. Tenetur.</p>
                    </ul>
                </div>
                <div id="projectCard" class="card bg-gray-950 pb- hover:bg-gray-700">
                    <ul class="max-w-[400px] max-h-[100px] overflow-hidden p-4">
                        <h1 class="mb-2 ">Project 1</h1>
                        <p class=" text-ellipsis">ALEA JACTA ES nostrum, enim quaerat atque? Fugit quia voluptatibus quidem nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium modi excepturi ea eius quos consectetur maiores, voluptate omnis dolorem iste nihil deleniti repudiandae quia perspiciatis autem ab ex vel. Tenetur.</p>
                    </ul>
                </div>
                <div id="projectCard" class="card bg-gray-950 pb- hover:bg-gray-700">
                    <ul class="max-w-[400px] max-h-[100px] overflow-hidden p-4">
                        <h1 class="mb-2 ">Project 1</h1>
                        <p class=" text-ellipsis">ALEA JACTA ES nostrum, enim quaerat atque? Fugit quia voluptatibus quidem nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium modi excepturi ea eius quos consectetur maiores, voluptate omnis dolorem iste nihil deleniti repudiandae quia perspiciatis autem ab ex vel. Tenetur.</p>
                    </ul>
                </div>
            </ul>
            

        </div>    
        </div>
        <div id="userProjects"></div>
    </div>
</section>

</template>
