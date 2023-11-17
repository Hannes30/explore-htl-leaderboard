<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getFirestore, collection, getDocs, count, getDoc } from "firebase/firestore";
  import "./firebase.js";
  import { Firestore } from 'firebase/firestore';
  import firebaseConfig from './firebase.js';
  import UserStatistics from './UserStatistics.svelte';
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  const usersCollection = collection(db, "User");
  let users = [];
  let counter = 0;
  getUser();
  function getUser(){
    users = [];
  getDocs(usersCollection)
    .then((querySnapshot) => {
      
      querySnapshot.forEach((doc) => {
        users.push({Name: doc.data()["Name"],items:doc.data()["items"].length,finished: doc.data()["finished"]});   
      });
      users.sort((a, b) => {
        const itemDiff = b.items - a.items;
        return itemDiff === 0 ? (b.lastCollected + b.registered) - (a.lastCollected + a.registered)  : itemDiff;
      });
      users = users;
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
 }
  setInterval(()=>getUser(),500000) 
</script>

<main class="mt-5">
  <div>
    <h1 class="text-4xl text-center flex gap-4 items-center justify-center">
      <img src="/images/ExploreHTL.png" alt="Explore Htl Logo" class="w-52 pt-2.5" /> <span class="font-semibold">Leaderboard</span></h1>
    </div>
  <div class="flex justify-center flex-wrap">
  {#each users as user,index}
    <UserStatistics name = {user.Name} ranking={index+1} finsished={user.lastCollected} collected={user.items}></UserStatistics>
  {/each}
</div>
</main>

<style>

</style>
