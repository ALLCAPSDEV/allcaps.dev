<script>
  import {onMount} from 'svelte'
  export let path
  export let stroke
  let icon

  onMount(()=>{
    setTimeout(() => {
     icon.style.animationDuration = Math.floor(Math.random() * (Math.max(18)-Math.ceil(5) + 1)) + "s";
    }, Math.floor(Math.random() * (Math.max(100000)-Math.ceil(10000)+1)))
  })
</script>

<style>
  svg {
    width:0px;
    height: 0px;
    animation: displayIcon ease alternate infinite;
    margin: 0 auto;
  }

  @keyframes displayIcon {
    0% {
      width: 0px;
      height: 0px;
    }
    50% {
      width: 50%;
      height: 50%;
    }
    100% {
      width: 100%;
      height: 100%;
    }
  }
</style>

  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" bind:this={icon}>
    <path d={path} stroke={stroke ? "currentColor" : undefined} fill={!stroke ? "currentColor" : undefined}></path>
  </svg>