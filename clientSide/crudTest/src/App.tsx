import React, { useState } from 'react';

import Axios , {AxiosResponse, AxiosError} from 'axios';

function App() {
const [paia, Setando] = useState('');

const mudar = (i: string) => {

Setando((previ) => ({
...previ, [i.target.name]: i.target.value,
}))
};

function click() {
Axios.post('http://localhost:5174/result', {
idprodutos: paia.Nome,
custo: paia.custo,
nome: paia.Categoria,
passe: paia.pass
}).then((response)=>{
console.log(response);
});
console.log(paia);
}
function login() {
Axios.post('http://localhost:5174/login', {
nome: paia.Categoria,
passe: paia.pass
}).then((resp)=>{
console.log(resp);
});
}

return (
<div className="App">
  <h1>Crud test</h1>
  <div>
    <input className='Nome' type='text' name='Nome' placeholder='número WuW' onChange={mudar}></input>
    <input className='custo' type='text' name='custo' placeholder='custinho WuW' onChange={mudar}></input>
    <input className='categoria' type='text' name='Categoria' placeholder='nome Num WuW' onChange={mudar}></input>
    <input className='pass' type='text' name='pass' placeholder='senha WuW' onChange={mudar}></input>
  </div>
  <button type='button' onClick={()=> {click()}}>clica!</button>
  <button type='button' onClick={()=> {login()}}>login!</button>

</div>
)
}

export default App