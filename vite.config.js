import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Corrigindo o alias para apontar diretamente para o arquivo desejado
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome/index.es.js'
    }
  }
});
