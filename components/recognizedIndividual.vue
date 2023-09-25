<template>
    <tr @click="navigateTo('/profile')" style="cursor: pointer;">
        <td>
            <div class="flex items-center space-x-3">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src="leto.jpg" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div>
                <div class="font-bold">Leto, Thiago</div>
                <div class="text-sm opacity-50">4to</div>
            </div>
        </td>

        <td>24/09/2023 - 07:45</td>
        <td>15</td>
    </tr>
</template>