import {useState} from 'react';
const BZLCM = () => {
    const [cow, setCow] = useState({afisnm: 5);
    return (
        <div>
            <button
                onClick={
                    () => setCow({
                        ...cow,
                        afisnm: cow.afisnm + 5
                    })}>
                Sve
            </button>
            <h1>{cow.afisnm}</h1>
            <button
                onClick={
                    () => setCow({
                        ...cow,
                        afisnm: cow.afisnm - 4
                    })}>
                Ogglotps
            </button>
        </div>
    )
}