<template lang="pug">
//- LAYOUT
.bg-sky-800.shadow-lg.shadow-slate-700.p-3.flex-center.relative
  h1.text-3xl.font-bold.text-white TILE MATCH
//- SCOREBOARD
//- MAIN CONTAINER
.bg-white.py-9
  .text-center
    label.p-3 Category:
    select.mb-3.border.border-black.px-6.py-2.rounded-md(
      v-model="selectedCategory"
    )
      option(value="animals" text="Animals")
      option(value="nfcTeams" text="NFC Teams")
  //- CARD
  .mx-auto.p-6.bg-stone-700.rounded-lg.shadow-lg.shadow-slate-700(class="w-1/2")
    .grid.grid-cols-2.md_grid-cols-3.lg_grid-cols-4.gap-6
      .bg-black.aspect-square.p-4.rounded-lg.text-white.flex-center(
        v-for="(card, index) in cards"
        :key="index"
         @click="cardClicked(card)"
      ) 
        font-awesome-icon(v-if="selectedCategory=='animals'" size="4x" :icon="['fas', card]")
        img(v-else-if="selectedCategory=='nfcTeams'" :src="`/src/images/${card}.webp`")
        
</template>

<script setup>
import { reactive, ref, computed } from 'vue';

const selectedCategory = ref('animals');
const selections = ref([]);
const iconArrays = reactive({
  animals: [
    'cat',
    'crow',
    'dog',
    'dove',
    'dragon',
    'feather',
    'feather-alt',
    'fish',
    'frog',
    'hippo',
    'horse',
    'horse-head',
    'kiwi-bird',
    'otter',
    'paw',
    'spider'
  ],
  nfcTeams: [
    '49ers',
    'bears',
    'buccaneers',
    'cardinals',
    'cowboys',
    'eagles',
    'falcons',
    'football-team',
    'giants',
    'lions',
    'packers',
    'panthers',
    'rams',
    'saints',
    'seahawks',
    'vikings'
  ]
});

const cards = computed(() => {
  //copy the array
  const deck = [...iconArrays[selectedCategory.value]];
  //shuffle the array
  shuffle(deck);
  //get first 8 from the deck
  const cardsToSelect = deck.splice(0, 8);
  //add them twice to the matchArray
  const cards = [...cardsToSelect, ...cardsToSelect];
  // //shuffle the deck a final time
  shuffle(cards);
  return cards;
});

function shuffle(deck) {
  deck.sort(() => 0.5 - Math.random());
}

function cardClicked(el) {
  selections.value.push(el);
  if (selections.value.length == 2) {
    const result =
      selections.value[0] == selections.value[1] ? 'Match!!' : 'Try Again';
    console.log(result);
    selections.value = [];
  }
}
</script>
<style>
.flex-center {
  @apply flex items-center justify-center;
}
</style>
