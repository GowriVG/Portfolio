import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})


// Tailwind CSS v4 handles the injection of its base, components, 
// and utility layers through this unified @import syntax, as part of its streamlined approach.