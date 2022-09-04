<style>
  main {
    text-align: center;
  }

  h1 {
    color: #ff3e00;
  }
</style>

<script lang="ts">
  let user: string = 'anuj';
  //! as per current understanding, we need to export vailable that can be available/changed later from other scope [here, lobal]
  export let framework: string;
</script>

<main>
  <h1>Hello {user} welcome to {framework.toUpperCase()}!</h1>
</main>
