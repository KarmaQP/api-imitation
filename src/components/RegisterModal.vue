<template>
  <div class="modal fade" id="registerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fa fa-user-plus me-2"></i>
              Регистрация
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Имя</label>
              <input type="text" class="form-control" v-model="name" required />
            </div>

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
              class="btn btn-success"
              :disabled="auth.loading"
            >
              <span v-if="auth.loading">
                <i class="fa fa-spinner fa-spin me-2"></i>
                Отправка...
              </span>
              <span v-else> Зарегистрироваться </span>
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

const name = ref('');
const email = ref('');
const password = ref('');

const auth = useAuthStore();

// типа API запрос
const submitForm = async () => {
  await auth.register({
    name: name.value,
    email: email.value,
    password: password.value,
  });

  name.value = '';
  email.value = '';
  password.value = '';
};
</script>
