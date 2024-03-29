import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  vite: {
    define: {
      "process.env.API_KEY": process.env.API_KEY,
    }
  },
  plugins: [react()],
})
