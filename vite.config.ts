import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:	{
		alias:	{
			'@api': path.resolve(__dirname, 'src/api'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@features': path.resolve(__dirname, 'src/features'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@types': path.resolve(__dirname, 'src/types'),
		},
	},
});
