<script>
  let input = "";
  let input_unit = "";
  let target_unit = "";
  let response = "";
</script>

<main>
  <h1>Welcome to Unit Conversions</h1>
  <div class="flex">
    <input
      bind:value={input}
      placeholder="Input numerical value"
      autofocus
      type="number"
    />
    <select bind:value={input_unit}>
      <option value="" />
    </select>
    <select bind:value={target_unit}>
      <option value="" />
    </select>
    <input bind:value={response} placeholder="Student response" type="number" />
    <input
      class="output"
      placeholder="Output"
      readonly
    />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .flex {
    display: flex;
  }
  .output {
    font-weight: bold;
  }
</style>
