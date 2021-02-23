import { useState } from "react";


export function ExperienceBar() {

    const [c, setc] = useState(0);
    const [proximoNivel, setProximoNivel]= useState(600) ;
    const [nivel, setnivel]= useState(1) ;
    let e = document.getElementById('xpbar');
    let exp = document.getElementById('exp');
    e?.setAttribute("style", "width: " + c+"%");
    exp?.setAttribute("style", "left: " + c+"%");  
function increment() {
    if(c < 100){
    setc(c+10); 
    e?.setAttribute("style", "width: " + c+"%");
    exp?.setAttribute("style", "left: " + c+"%"); 
    }else{
        setc(c-c);
        setProximoNivel(proximoNivel + 600) ;
        setnivel(nivel + 1);
    }
  
}
function decrement() {
    if(c !== 0){
        setc(c-10);
        e?.setAttribute("style", "width: " + c+"%")
        exp?.setAttribute("style", "left: " + c+"%");
    }else{
        alert('Experiencia ja está zerada!')
        setc(c-c);
        if(nivel > 1)
        setnivel(nivel - 1);
    }

}
    return(
        <div>
            <header className='experience-bar'>
            <span>0 xp</span>
            <div>
                <div id='xpbar' className='experience-bar' />
                <span id='exp' className='currentExperience'>{c+"%"}</span>
            </div>
            <span>{proximoNivel} xp</span>
            <button onClick={increment} style={{padding:'5px'}}>+</button>
            <button onClick={decrement} style={{padding:'5px'}}>-</button>
        </header>
        <h1 style={{padding: '20px'}}>{"Nivel atual: "+nivel}</h1>
        </div>

    );
}