<template>
  <div>hahahaahaha</div>
  <div class="pt-20 pb-96">
    <rainyCloud></rainyCloud>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const rainyCloud = defineAsyncComponent(
  () => import("../../components/cloud/RainyCloud.vue")
);
</script>
