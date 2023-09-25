<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col justify-center items-center mt-5">
        <h1 class="text-3xl font-bold">Student list</h1>
        
        <div class="card bg-neutral mx-8 px-3 mt-2">
            <table class="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Last seen</th>
                        <th>Total absences</th>
                    </tr>
                </thead>
            </table>

            <div class="overflow-x-auto card-body !p-0 !max-h-[400px] overflow-y-scroll">
                <table class="table">
                    <tbody>
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                        <RecognizedIndividual />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>