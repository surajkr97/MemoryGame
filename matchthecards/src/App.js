import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Header from './Header';
import { useState } from 'react'

function shuffle(array) {
  let newarray = [...array];
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newarray[currentIndex], newarray[randomIndex]] = [
      newarray[randomIndex], newarray[currentIndex]];
  }

  return newarray;
}

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
'U', 'V', 'W', 'X', 'Y', 'Z', '🤡', '🤡', '🤡', '🤡']


function App() {
  const [chars, setChars] = useState(shuffle(letters));
  console.log('chars', chars);
  const [states, setStates] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [moves, setMoves] = useState(0);
  const [current_card, setCurrentCard] = useState(null);
  const [current_card_index, setCurrentCardIndex] = useState(null);
  const [last_card_index, setLastCardIndex] = useState(null);
  // console.log('current_card', current_card);
  // console.log('current_card_index', current_card_index);
  // console.log('moves', moves);

  function clickCard(index) {
    const character = chars[index];
    setMoves(moves + 1);
    
    console.log('character', character);
    console.log('current_card', current_card);
    if (current_card === null) {
      if (character === 'A') {
          setCurrentCard(character);
          setCurrentCardIndex(index);
          return false;
      } else{
          return true;
      }
    }
    if (character === '🤡') {
      console.log('reset');
      setTimeout(() => {  
        setStates(new Array(30).fill(false));
        setCurrentCard(null);
        setCurrentCardIndex(null);
        setLastCardIndex(null);
        console.log('reset done');
      }, 400);
      return false;
    }

    // if character is next in sequence to current_card, then continue, else unflip last 2 cards
    if (character.charCodeAt(0) === current_card.charCodeAt(0) + 1) {
      setLastCardIndex(current_card_index)
      setCurrentCard(character);
      setCurrentCardIndex(index);
      console.log('correct');
        return false;
    } else {
        setTimeout(() => {
          const narray = [...states];
          narray[index] = false;
          narray[last_card_index] = false;
          setStates(narray);
          setCurrentCardIndex(last_card_index);
          setCurrentCard(chars[last_card_index]);
        }, 400);
        return true
    }
  }

  function setCustomState(index, value) {
    console.log('setting ' + index + ' to ' + value);
    let newStates = [...states]; // create a copy of the states array
    newStates[index] = value;
    setStates(newStates);
  }

  return (
    <>
      <Header moves={moves}/>
      <div className='container mx-auto mt-10'>
        <div className="grid grid-cols-10 gap-4">
          <Card character={chars[0]} index={0} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[1]} index={1} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[2]} index={2} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[3]} index={3} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[4]} index={4} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[5]} index={5} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[6]} index={6} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[7]} index={7} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[8]} index={8} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[9]} index={9} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[10]} index={10} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[11]} index={11} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[12]} index={12} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[13]} index={13} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[14]} index={14} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[15]} index={15} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[16]} index={16} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[17]} index={17} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[18]} index={18} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[19]} index={19} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[20]} index={20} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[21]} index={21} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[22]} index={22} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[23]} index={23} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[24]} index={24} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[25]} index={25} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[26]} index={26} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[27]} index={27} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[28]} index={28} states={states} setCustomState={setCustomState} on_click={clickCard}/>
          <Card character={chars[29]} index={29} states={states} setCustomState={setCustomState} on_click={clickCard}/>
        </div>
      </div>
    </>
  );
}

export default App;
