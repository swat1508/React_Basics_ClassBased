Context : It provides a way to pass data through the component tree without having to pass props down manually at every level.
===============================
        A
      
APP =>  B   => D 

        C   => E  => F
===============================

For Simplicity we will see how to pass data say username from App component to component F

Step1 : Create the context
Step2: Provide a context value
Step3: Consume the context value

==================================================================================================================
Step1
----

userContext.js
-------------
import React from 'react';

const userContext = React.createContext();

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export {UserProvider,UserConsumer};

Note: Every context object created using createContext method comes with a provider and a consumer react component
we will need this provider and consumer for Step 2 and Step 3
 For Step2 we need to provide this user context using the UserProvider component and the place we provide 
 is important because only descendant components can consume it . So app component is a good place 
==================================================================================================================
 Step2:
 -----

 App.js
 ------
 <UserProvider value="Swatantra">
      <Component_C/>
</UserProvider>

This means the value can be consumed in Component_C and all its descendant so we can consume it in Component_F
==================================================================================================================

 Step3:
 -----
 Component_F.js
 --------------
<div>
                <UserConsumer>
                {
                    (userName) => {
                            return <h2> Hello {userName} !!! from Component_F</h2>                                
                    }
                }
                </UserConsumer>                
            </div>

 ==================================================================================================================

 Note: 
 (1) If we try to store context in variable and then use it then its not possible because it is a function
 and hence return is there in above code-return <h2> Hello {userName} !!! from Component_F</h2> 
 so we need to wrap our code in Consumer to use it     
 i tried like:
 =============================================
  render() {        
        let myUsername='';
        return (
            <div>
                        <UserConsumer>
                        {
                            (userName) => {
                                myUsername=userName;                           
                            }
                        }
                        </UserConsumer>  

              <h2> Hello {usermyUsername} !!! from Component_F</h2>         
            </div>
        )
    }
The above code will not work . With Hook - useContext its possible    
==========================================================================

(2) There is something called contextType