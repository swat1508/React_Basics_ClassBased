import React from 'react';
import MyUser from './components/11_Render_Props/MyUser';
import ClickCounter from './components/11_Render_Props/ClickCounter';
import HoverCounter from './components/11_Render_Props/HoverCounter';
import Counter from './components/11_Render_Props/Counter';
import Component_C from './components/12_Context/Conponent_C';
import {UserProvider,UserConsumer} from './components/12_Context/UserContext';

function App() {
  return (
    <div className="App">
        <h1>This is App component</h1>
            <UserProvider value="Swatantra">
              <Component_C/>
            </UserProvider>
    </div>
  );
}

export default App;
