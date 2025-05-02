<template>
  <v-container class="fill-height d-flex align-center justify-center" fluid>
  <v-row class="w-100 justify-center align-center">
    <v-col cols="12" sm="8" md="6" lg="4" xl="3">
      <v-card class="pa-6 pa-sm-8 pa-md-10" elevation="10" rounded style="max-width: 100%;">
        <div class="d-flex align-center justify-center mb-6" style="gap: 16px;">
  <v-icon color="primary" size="48">mdi-account-circle</v-icon>
  <span class="text-h5 font-weight-bold" style="line-height: 1;">Sign In</span>
</div>
        <v-form @submit.prevent="onSubmit" ref="form">
          <v-text-field
            v-model="email"
            label="Email"
            prepend-inner-icon="mdi-email-outline"
            type="email"
            :rules="[rules.required, rules.email]"
            variant="outlined"
            density="comfortable"
            class="mb-4"
            autocomplete="email"
          />
          <v-text-field
            v-model="password"
            label="Password"
            prepend-inner-icon="mdi-lock-outline"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append-inner="showPassword = !showPassword"
            :rules="[rules.required]"
            variant="outlined"
            density="comfortable"
            class="mb-6"
            autocomplete="current-password"
          />
          <v-btn type="submit" color="primary" block size="large" class="mb-2" :loading="loading">
            Login
          </v-btn>
        </v-form>
        <div class="text-center mt-4">
          <v-btn variant="text" color="primary" size="small">Forgot password?</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const form = ref(null)

const rules = {
  required: v => !!v || 'This field is required',
  email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
}

import { useRouter } from 'vue-router'
const router = useRouter()

function onSubmit() {
  if (!form.value?.validate()) return
  loading.value = true
  setTimeout(() => {
    loading.value = false
    // Redirect to welcome page with email as query param
    router.push({ name: 'Welcome', query: { email: email.value } })
  }, 900)
}
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
.v-card {
  border-radius: 18px;
  box-shadow: 0 6px 32px 0 rgba(60, 72, 90, 0.12);
  background: #fff;
}
.v-card-title {
  padding-bottom: 0;
}
.v-card-subtitle {
  font-size: 1.4rem;
  color: #222;
}
.v-btn {
  text-transform: none;
  font-size: 1rem;
}
</style>
