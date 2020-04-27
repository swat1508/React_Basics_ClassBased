React Portals provide a way to render children into a DOM node that exists outside DOM hierarchy of parent component

Till now all React component fall under id=root
because all are inside App component and App is insidr root -  <div id="root"></div>
 with React Portal we can render a component outside this root

In public folder- index.html we will add below code :
 <!-- SS starts - Creatd Only for 8_React_Portals-->
    <div id="portal-root"></div>    
<!-- SS ends - Creatd Only for 8_React_Portals-->

Now we will create JS file PortalDemo..js

ReactDOM.createPortal takes 2 param 
    - JSX which we want to render
    - DOM node to mount into

 PortalDemo.js
----------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class PortalDemo extends Component {
    render() {
        return ReactDOM.createPortal( 
            <div>
                <h1>Portal Demo !!!</h1>
            </div>,document.getElementById('portal-root')
        )
    }
}

export default PortalDemo


In App component we will include this PortalDemo :
  <div className="App">
          <h1>This is App component</h1>
            <PortalDemo />       
    </div>

===========================================================
Now in browser console we can see PortalDemo is not in root but in portal-root    

Note: This React_Portal is mainkly helpful in modal,popup,tooltip
For reference see this : https://codesandbox.io/s/00254q4n6p