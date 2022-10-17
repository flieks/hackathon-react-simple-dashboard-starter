import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, {dirname} from 'path';

var projectRootDir = path.resolve(__dirname);
var dirSrc = path.resolve(projectRootDir, 'src');
console.log("dirSrc", dirSrc)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: dirSrc + '/api',
      components: dirSrc + '/components',
      styles: dirSrc + '/styles',
      hooks: dirSrc + '/hooks'
    }
  },
})
