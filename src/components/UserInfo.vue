<template>
  <div v-if="auth.user" class="card mt-4">
    <div class="card-body">
      <h5 class="card-title">
        <i class="fa fa-check-circle text-success me-2"></i>
        Успешно ({{ auth.user.type }})
      </h5>

      <pre class="text-start bg-light p-3 mt-3"
        >{{ auth.user }}
      </pre>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore';
const auth = useAuthStore();
</script>
