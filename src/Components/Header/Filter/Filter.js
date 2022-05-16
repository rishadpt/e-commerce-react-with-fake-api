import React, { useState } from 'react'
import './Filter.scss'

export default function Filter({first,second,third,four,five,six,seven}) {
    const [selected, setSelected] = useState(`${first}`)
    return (
        <div className="filter_container">
            <p onClick={() => { setSelected(`${first}`) }} className={selected === `${first}` ? "selected" : null}>{first}</p>
            <p onClick={() => { setSelected(`${second}`) }} className={selected === `${1}` ? "selected" : null}>{second}</p>
            <p onClick={() => { setSelected(`${third}`) }} className={selected === `${1}` ? "selected" : null}>{third}</p>
            <p onClick={() => { setSelected(`${four}`) }} className={selected === `${1}` ? "selected" : null}>{four}</p>
            <p onClick={() => { setSelected(`${five}`) }} className={selected === `${1}` ? "selected" : null}>{five}</p>
            <p onClick={() => { setSelected(`${six}`) }} className={selected === `${1}` ? "selected" : null}>{six}</p>
            <p onClick={() => { setSelected(`${seven}`) }} className={selected === `${1}` ? "selected" : null}>{seven}</p>
        </div>
    )
}
