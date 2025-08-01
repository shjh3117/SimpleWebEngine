import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/SimpleWebEngine/', // 👈 레포 이름과 반드시 일치해야 함!
  plugins: [react()],
})
