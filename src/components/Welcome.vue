<template>
  <v-container class="fill-height d-flex align-center justify-center" fluid>
    <v-row class="w-100 justify-center align-center">
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-card class="pa-8" elevation="8" rounded>
          <v-card-title class="justify-center mb-6">
            <v-icon color="primary" size="48">mdi-emoticon-happy-outline</v-icon>
            <span class="ml-4 text-h5 font-weight-bold">Welcome!</span>
          </v-card-title>
          <v-card-text class="text-center">
            <div class="text-h6 mb-2">Hello, <span class="font-weight-bold">{{ displayName }}</span>!</div>
            <div>You have successfully logged in.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  email: {
    type: String,
    default: ''
  }
})

const route = useRoute()

const displayName = computed(() => {
  // Use the part before @ as "name" if possible
  if (props.email) {
    return props.email.split('@')[0]
  }
  // fallback to query param
  if (route.query.email) {
    return String(route.query.email).split('@')[0]
  }
  return 'User'
})
</script>
