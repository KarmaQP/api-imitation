import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loading: false,
    user: null,
  }),

  actions: {
    login(formData) {
      this.loading = true;

      // имитация API (LOGIN) без валидации по зарегистрированным пользователям!
      return new Promise((resolve) => {
        setTimeout(() => {
          this.user = {
            email: formData.email,
            name: 'Test User',
            type: 'login',
          };

          this.loading = false;
          resolve(this.user);
        }, 1500);
      });
    },

    // имитация API (REGISTER)
    register(formData) {
      this.loading = true;

      return new Promise((resolve) => {
        setTimeout(() => {
          this.user = {
            email: formData.email,
            name: formData.name,
            type: 'register',
          };
          this.loading = false;
          resolve(this.user);
        }, 1500);
      });
    },
  },
});
