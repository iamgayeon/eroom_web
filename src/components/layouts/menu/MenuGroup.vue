<script setup>
import MenuItem from './MenuItem.vue';

const props = defineProps({
  menus: { type: Array, required: true }, // type 오타 수정
});
</script>

<template>
  <ul class="navbar-nav">
    <li v-for="menu in menus" :key="menu.title" class="nav-item">
      <MenuItem :menu="menu" />
    </li>
  </ul>
</template>