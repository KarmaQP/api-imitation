<template>
  <div class="container mt-5 text-center">
    <h1 class="mb-4">Vue 3 API Imitation</h1>
    <div class="d-flex justify-content-center gap-3">
      <button
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#registerModal"
      >
        <i class="fa fa-user-plus me-2"></i>
        Регистрация
      </button>
      <button
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <i class="fa fa-sign-in-alt me-2"></i>
        Войти
      </button>
    </div>
    <RegisterModal />
    <LoginModal />
    <UserInfo />
  </div>
</template>

<script setup>
import LoginModal from './components/LoginModal.vue';
import RegisterModal from './components/RegisterModal.vue';
import UserInfo from './components/UserInfo.vue';
</script>
