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
  .mx-auto.p-6.bg-stone-700.rounded-lg.shadow-lg.shadow-slate-700(class="w-11/12 lg--w-1/2")
    .grid.grid-cols-3.sm--grid-cols-3.md--grid-cols-4.gap-6
      .flip-card.bg-stone-700.aspect-square.text-white.flex-center.cursor-pointer(
        v-for="card in cards"
        :key="card.id"
        @click="cardClicked(card)"
      ) 
        .flip-card-inner(:class="{ 'flip-card-inner-selected': card.selected }")
          .flip-card-front.rounded-lg
          .flip-card-back.rounded-lg.flex-center.p-1(
            :class="{ 'bg-red-400': card.mismatched, 'bg-blue-400': card.matched, 'bg-green-400': card.selected && !card.matched && !card.mismatched, 'bg-black': !card.selected && !card.matched && !card.mismatched }"
          )
            font-awesome-icon(v-if="selectedCategory=='animals'" size="4x" :icon="['fas', card.name]")
            img(v-else-if="selectedCategory=='nfcTeams'" :src="`/images/${card.name}.webp`" :class="{ 'hidden': !card.selected }")
        
</template>

<script setup>
import { reactive, ref, onMounted, watch } from 'vue';

const selectedCategory = ref('animals');
const selectedCards = ref([]);
const cards = ref([]);
const isClickable = ref(true);
const iconArrays = reactive({
  animals: [
    { name: 'cat', selected: false, matched: false, mismatched: false },
    { name: 'crow', selected: false, matched: false, mismatched: false },
    { name: 'dog', selected: false, matched: false, mismatched: false },
    { name: 'dove', selected: false, matched: false, mismatched: false },
    { name: 'dragon', selected: false, matched: false, mismatched: false },
    { name: 'feather', selected: false, matched: false, mismatched: false },
    { name: 'feather-alt', selected: false, matched: false, mismatched: false },
    { name: 'fish', selected: false, matched: false, mismatched: false },
    { name: 'frog', selected: false, matched: false, mismatched: false },
    { name: 'hippo', selected: false, matched: false, mismatched: false },
    { name: 'horse', selected: false, matched: false, mismatched: false },
    { name: 'horse-head', selected: false, matched: false, mismatched: false },
    { name: 'kiwi-bird', selected: false, matched: false, mismatched: false },
    { name: 'otter', selected: false, matched: false, mismatched: false },
    { name: 'paw', selected: false, matched: false, mismatched: false },
    { name: 'spider', selected: false, matched: false, mismatched: false }
  ],
  nfcTeams: [
    { name: '49ers', selected: false, matched: false, mismatched: false },
    { name: 'bears', selected: false, matched: false, mismatched: false },
    { name: 'buccaneers', selected: false, matched: false, mismatched: false },
    { name: 'cardinals', selected: false, matched: false, mismatched: false },
    { name: 'cowboys', selected: false, matched: false, mismatched: false },
    { name: 'eagles', selected: false, matched: false, mismatched: false },
    { name: 'falcons', selected: false, matched: false, mismatched: false },
    {
      name: 'football-team',
      selected: false,
      matched: false,
      mismatched: false
    },
    { name: 'giants', selected: false, matched: false, mismatched: false },
    { name: 'lions', selected: false, matched: false, mismatched: false },
    { name: 'packers', selected: false, matched: false, mismatched: false },
    { name: 'panthers', selected: false, matched: false, mismatched: false },
    { name: 'rams', selected: false, matched: false, mismatched: false },
    { name: 'saints', selected: false, matched: false, mismatched: false },
    { name: 'seahawks', selected: false, matched: false, mismatched: false },
    { name: 'vikings', selected: false, matched: false, mismatched: false }
  ]
});

function shuffle(deck) {
  deck.sort(() => 0.5 - Math.random());
}

function cardClicked(card) {
  if (!isClickable.value) {
    return;
  }
  let cards = selectedCards.value;
  card.selected = true;
  cards.push(card);
  if (cards.length == 2) {
    isClickable.value = false;
    const card1 = cards[0];
    const card2 = cards[1];
    checkPair(card1, card2);
    selectedCards.value = [];
  }
}

function checkPair(card1, card2) {
  if (card1.name == card2.name) {
    handleMatch(card1, card2);
  } else {
    handleMisMatch(card1, card2);
  }
}

function handleMatch(card1, card2) {
  card1.matched = true;
  card2.matched = true;
  isClickable.value = true;
}

function handleMisMatch(card1, card2) {
  card1.mismatched = true;
  card2.mismatched = true;
  setTimeout(() => {
    isClickable.value = true;
    card1.selected = false;
    card2.selected = false;
    card1.mismatched = false;
    card2.mismatched = false;
  }, 1000);
}

function getCards() {
  //copy the array
  const deck = [...iconArrays[selectedCategory.value]];
  //shuffle the array
  shuffle(deck);
  //get first 8 from the deck
  const deck1 = JSON.parse(JSON.stringify(deck)).slice(0, 8);
  const deck2 = JSON.parse(JSON.stringify(deck)).slice(0, 8);
  //add them twice to the matchArray
  cards.value = [...deck1, ...deck2];
  // //shuffle the deck a final time
  shuffle(cards.value);
  for (let card in cards.value) {
    cards.value[card].id = card;
  }
}

onMounted(() => {
  getCards();
});

watch(selectedCategory, () => {
  getCards();
});
</script>

<style>
.flex-center {
  @apply flex items-center justify-center;
}

.flip-card {
  background-color: transparent;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card-inner-selected {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #000;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
