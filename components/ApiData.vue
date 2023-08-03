<script setup lang="ts">
import { SeriesData } from 'models/SeriesData';

const emits = defineEmits( [ 'fetch_error' ] );

const series_data: Ref<Array<SeriesData> | null> = ref( null );

onMounted( async () => {
    const { data, error } = await useFetch( 'https://apis.datos.gob.ar/series/api/series?ids=74.2_SC_0_T_15&format=json' );

    if ( error instanceof Error ) {
        emits( 'fetch_error', error );
        return;
    }

    // @ts-ignore I KNOW WHAT IM DOING SHUT UP
    series_data.value = toRaw(data.value).data.map( ( item: any ) => {
        return {
            date: item[0],
            value: item[1]
        };
    } );
} );
</script>

<template>
    <div class="table-container">
        <table>
            <tr>
                <th>Date</th>
                <th>Value</th>
            </tr>
            <tr v-for="item in series_data" :key="item.date">
                <td>{{ item.date }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
}

.table-container > table, th, td {
    border: 1px solid rgba( 0, 0, 0, .7 );
    border-collapse: collapse;
}
</style>