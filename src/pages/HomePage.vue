\<script setup>
// 필요한 경우 여기에 스크립트 코드 추가
</script>

<template>
  <div class="image-wrapper">
    <img src="@/assets/images/main-image.png" class="absolute-fullwidth-image">
  </div>
</template>

<style>
/* 전역 스타일 리셋 */
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}
</style>

<style scoped>
.image-wrapper {
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.absolute-fullwidth-image {
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
  object-fit: cover;
}


</style>