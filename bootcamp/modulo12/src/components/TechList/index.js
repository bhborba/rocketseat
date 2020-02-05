import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

export default function TechList() {
    const [ techs, setTechs ] = useState([]);
    const [ newTech, setNewTech ] = useState(' ');

    useEffect(() => {
        const techs = localStorage.getItem('techs');

        if (techs){
            setTechs(JSON.parse(techs));
        }
    },[])

    useEffect(() => {
        localStorage.setItem('techs', JSON.stringify(techs));
    }, [techs])

    function handleAddTech(){
        setTechs([...techs, newTech]);
        setNewTech('');
    }

  return ( 
    <form data-testid="tech-form" onSubmit={handleAddTech}>
        <ul data-testid="tech-list">
            {techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>

        <label htmlFor="tech">Tech</label>
        <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)}/>
        <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}
