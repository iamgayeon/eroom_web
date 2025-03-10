<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import MenuGroup from './menu/MenuGroup.vue';
import AccountMenuGroup from './menu/AccountMenuGroup.vue';
import config from '@/config';

const state = ref({ isNavShow: false });
const router = useRouter();

const navClass = computed(() => (state.value.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'));

const toggleNavShow = () => {
  state.value.isNavShow = !state.value.isNavShow;
};
</script>

<template>
  <div class="navbar-wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="navbar-container">
        <router-link to="/" class="navbar-brand">
          <img src="@/assets/images/eroom-logo.png" alt="E-ROOM 로고" class="logo-img" />
        </router-link>
        <button class="navbar-toggler" type="button" @click="toggleNavShow">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="navClass" id="collapsibleNavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item menu-spacing" v-for="menu in config.menus" :key="menu.title">
              <router-link class="nav-link" :to="menu.url">{{ menu.title }}</router-link>
            </li>
          </ul>
          <div class="auth-buttons">
            <button class="btn login-btn">로그인</button>
            <button class="btn btn-primary signup-btn">시작하기</button>
          </div>
        </div>
      </div>
    </nav>
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
/* 네비게이션 바 래퍼 */
.navbar-wrapper {
  width: 100vw;
  margin: 0;
  padding: 0;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

/* 네비게이션 바 스타일 */
.navbar {
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #eaeaea;
  margin: 0;
}

.navbar-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar .logo-img {
  max-height: 50px;
  padding: 5px;
}

/* 메뉴 스타일 */
.navbar-nav {
  display: flex;
  align-items: center;
}

.menu-spacing {
  padding: 0 20px;
}

.nav-link {
  color: #333 !important;
  font-weight: 500;
  font-size: 20px;
}

/* 버튼 스타일 */
.auth-buttons {
  display: flex;
  align-items: center;
}

.login-btn {
  margin-right: 10px;
  padding: 8px 16px;
  background: transparent;
  color: #9b9898;
  border: none;
  font-weight: 500;
}

.login-btn:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.signup-btn {
  background-color: #FF6301;
  border-color: #FF6301;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 500;
  color: white;
}

.signup-btn:hover {
  background-color: #e07c47;
  border-color: #e07c47;
}

.eroom {
  color: white;
}

.premium {
  color: #ffd700;
}

@media (max-width: 992px) {
  .navbar-collapse {
    width: 100%;
    margin-top: 15px;
  }
  
  .navbar-nav {
    margin-bottom: 15px;
  }
}
</style>