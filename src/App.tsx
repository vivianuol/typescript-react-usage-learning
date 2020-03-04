import React from 'react';
import { TextField } from './TextField';

const App: React.FC = () => {
  return <div>
    <TextField text='hi,yo' fn ={(isStreamExist)=>{ 1+2 }} handleChange={e=>e.target } />
  </div>
}

export default App;
