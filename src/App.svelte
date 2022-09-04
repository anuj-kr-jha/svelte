<style>
  main {
    text-align: center;
  }

  h1 {
    color: #ff3e00;
  }
</style>

<script lang="ts">
  let name: string = 'anuj';
  let age: number = 26;

  const incrementAge = () => (age += 1);
</script>

<main>
  <h1>I'm {name} and my age is {age} years</h1>
  <button on:click="{incrementAge}">Increase Age </button>
</main>
