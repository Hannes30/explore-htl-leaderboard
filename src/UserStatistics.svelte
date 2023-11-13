<script>
 export let name;
 export let finsished;
 export let collected;
 export let ranking;
</script>

<main class=" w-4/5 mt-4">
  <div class=" bg-slate-200 m-1 rounded-md shadow-lg flex items-center">
    <span class=" border-r-slate-500 p-2 border-r-2 text-2xl text-center w-20">{ranking}</span>
    <span class=" pl-4 font-bold w-64 text-center overflow-hidden">{name}</span>
    <div class=" bg-gray-100 rounded-md w-3/5 relative gradient">&nbsp;<div class="absolute top-0 w-full bg-white right-0 remove" style="--size:{(collected/10)*100}%"> &nbsp;</div></div> 
    <div class=" ml-4"> {collected}/10</div> </div>
</main> 

<style>
.gradient{
background: linear-gradient(to right,#00aacc,#00d8a2);
}
.remove{
  width: calc(100% - var(--size));
}

</style>
