import {useRef} from 'react'
import './convertor.css'

const Convert = () => {
    const Cur2 = useRef(null);

function convert(e) {
    if (Cur2 && Cur2.current) {
        var USD=
        Number(Cur2.current.value) * 0.012 
        document.getElementById('USD').textContent= USD;
        document.getElementById('curu').textContent= "USD";
        var EUR=
        Number(Cur2.current.value) * 0.011  
        document.getElementById('EUR').textContent= EUR;
        document.getElementById('cure').textContent= "EUR";
        var JPY=
        Number(Cur2.current.value) * 1.63  
        document.getElementById('JPY').textContent= JPY;
        document.getElementById('curj').textContent= "JPY";
        var GBP=
        Number(Cur2.current.value) * 0.0098  
        document.getElementById('GBP').textContent= GBP;
        document.getElementById('curg').textContent= "GBP";
        var CNH=
        Number(Cur2.current.value) * 0.084441    
        document.getElementById('CNH').textContent= CNH;
        document.getElementById('curc').textContent= "CNH";
}
}


    return(
        <div>
            <label for="INR">Enter value in INR: </label>
            <input ref={Cur2} type="number" id="INR" name="quantity"></input>
            <br /> <br /><br />
            <button onClick={convert}>Convert</button><br /><br /><br />
            <div id='USD'>-USD value will be displayed here-</div><div id='curu'></div><br />
            <div id='EUR'>-EUR value will be displayed here-</div><div id='cure'></div><br />
            <div id='JPY'>-JPY value will be displayed here-</div><div id='curj'></div><br />
            <div id='GBP'>-GBP value will be displayed here-</div><div id='curg'></div><br />
            <div id='CNH'>-CNH value will be displayed here-</div><div id='curc'></div><br />
        </div>
    )
}
export default Convert