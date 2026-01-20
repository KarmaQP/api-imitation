<template>
  <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fa fa-user me-2"></i>
              Авторизация
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Пароль</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                required
              />
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="auth.loading"
            >
              <span v-if="auth.loading">
                <i class="fa fa-spinner fa-spin me-2"></i>
                Загрузка...
              </span>
              <span v-else> Войти </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';

const email = ref('');
const password = ref('');

const auth = useAuthStore();

// типа api запрос
const submitForm = async () => {
  await auth.login({
    email: email.value,
    password: password.value,
  });

  email.value = '';
  password.value = '';
};
</script>
