<script setup lang="ts">
import { SeriesData } from 'models/SeriesData';
import { Line } from 'vue-chartjs';
import { GraphRange } from '../models/GraphRange';
import {
    Chart as ChartJS,
    Title,
    PointElement,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    ChartData
} from 'chart.js';

const emits = defineEmits( [ 'fetch_error' ] );

const series_data: Ref<Array<SeriesData> | null> = ref( null );
const graph_data: Ref<ChartData<'line', Array<number>> | null> = ref( null );

const graph_start = ref( "" );
const graph_end = ref( "" );

ChartJS.register(
    Title,
    Legend,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
);

const update_graph_to_range = () => {
    if ( graph_data == null ) {
        return;
    }

    /* If one of the select's is not defined, assumed the extreme */
    if ( graph_start.value == "" ) {
        graph_start.value = series_data.value?.[0].date!;
    }

    if ( graph_end.value == "" ) {
        graph_end.value = series_data.value?.[series_data.value.length - 1].date!;
    }

    const start_index = series_data.value?.findIndex( ( item: SeriesData ) => {
        return item.date == graph_start.value;
    } );

    const end_index = series_data.value?.findIndex( ( item: SeriesData ) => {
        return item.date == graph_end.value;
    });

    /* If the function could not find the index, stop */
    if ( start_index == null || end_index == null ) {
        console.error( "Invalid range" );
        return;
    }

    if ( end_index < start_index ) {
        alert( "Ohh my goodd bro fr you try to do that shit? 🗿" );
        return;
    }

    graph_data.value = null;
    graph_data.value = {
        labels: series_data.value?.slice( start_index, end_index + 1 ).map( ( item: SeriesData ) => {
            return item.date;
        } ),
        datasets: [
            {
                label: 'Series Data',
                data: series_data.value?.slice( start_index, end_index + 1 ).map( ( item: SeriesData ) => {
                    return item.value;
                } )!,
                borderColor: '#0abdc6',
                backgroundColor: '#0abdc6',
                fill: true,
            }
        ]
    };
};

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

    graph_data.value = {
        labels: series_data.value?.map( ( item: SeriesData ) => {
            return item.date;
        } ),
        datasets: [
            {
                label: 'Series Data',
                data: series_data.value?.map( ( item: SeriesData ) => {
                    return item.value;
                } )!,
                borderColor: '#0abdc6',
                backgroundColor: '#0abdc6',
                fill: true,
            },
        ],
    };
} );
</script>

<template>
    <div class="graph-container px-4 py-2" v-if="series_data != null && graph_data != null">
        <Line :data="graph_data" />
    </div>
    <div class="graph-controls flex justify-center px-4 space-x-2" v-if="series_data != null">
        <label class="label">
            <span class="label-text">Range start:</span>
        </label>
        <select name="range-start" class="select select-secondary mr-5" v-model="graph_start" @change="update_graph_to_range">
            <option v-for="entry in series_data" :value="entry.date">{{ entry.date }}</option>
        </select>
        <label class="label">
            <span class="label-text">Range end:</span>
        </label>
        <select name="range-end" class="select select-secondary" v-model="graph_end" @change="update_graph_to_range">
            <option v-for="entry in series_data" :value="entry.date">{{ entry.date }}</option>
        </select>
    </div>
    <div class="table-container">
        <table class="table">
            <tr class="bg-primary">
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