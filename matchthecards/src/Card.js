import './Card.css'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import CardImg from './CardImg.jpg'
import { useEffect, useState } from 'react'


export default function Card({ character, on_click, index, states, setCustomState }) {
    // console.log('Card', character, index, states, setCustomState)

    function flipped() {
        setCustomState(index, !states[index])
        if (states[index]) {
            if(on_click(character))
            {
                // after 400 ms, flip the card back
                setTimeout(() => {
                    setCustomState(index, !states[index])
                }
                , 400)
            }
        }
    }

    if (states[index]) {
        return (
            <div className="mybgclr max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={flipped}>
                <div className="mx-auto flex justify-center items-center h-32">
                        <p className="font-semibold text-gray-700 dark:text-white card-data">{character}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={flipped}>
                <img src={CardImg} alt='card' className='rounded-t-lg' />
            </div>
        )
    }
}
