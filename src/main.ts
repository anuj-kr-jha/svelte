import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    framework: 'svelte',
  },
});

export default app;
