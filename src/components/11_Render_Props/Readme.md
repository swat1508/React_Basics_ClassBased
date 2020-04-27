In last Chapter we saw - HOC is used to share common functionality between components without repeating code.
The other way to share common functionality between components without repeating code is "render Props"

Render Props : refers to a technique for sharing code between components using props whose value is a function

we will see implementation with same example of ClickCounter and HoverCounter but first we will try to understand using small steps with a component - MyUser
(1) Case1
App.js
------
<MyUser name={"sinha"}/>

MyUser.js
--------
 <div>{this.props.name}</div>
output - It will display sinha in browser 

(2) Case2
App.js
------
we will pass a function that returns string "sinha"
<MyUser name= {() => "sinha"}/>

MyUser.js
--------
as its passed function in App.js so we need to include () to execute it as below:
  <div>{this.props.name()}</div>
output - It will display sinha in browser 

(3) Case 3

Now we will pass parameter to function and based on that it will be decided which string is being passed

App.js
------
<MyUser name= {(isLoggedIn) => isLoggedIn ? 'Sinha' : 'Guest'}/>

MyUser.js
---------
{this.props.name(true)}

output - It will display Sinha in browser 
if {this.props.name(true)} - it will display Guest


So in React its posible to use a prop whose value is function to control what is actually rendered by Component.
We will apply this in our ClickCounter and HoverCounter
We will create a new file Counter.js - it will have common functionality of ClickCounter and HoverCounter
===========================================================================================================
ClickCounter.js
----------------
class ClickCounter extends Component {
    render() {
        const {count,incrementCount} = this.props;
        
        return (
            <div>
                <button onClick={incrementCount} >Clicked {count} times </button>        
            </div>
        )
    }
}

export default ClickCounter;
-----------------------------------------------------------------------------------------------
HoverCounter.js
---------------
class HoverCounter extends Component {
    render() {
        const {count,incrementCount} = this.props;
        
        return (
            <div>
                <h1 onMouseOver={incrementCount} >Clicked {count} times </h1>        
            </div>
        )
    }
}

export default HoverCounter;
-----------------------------------------------------------------------------------------------

Counter.js
----------
class Counter extends Component {
      //Common Code Start
      constructor(props) {
        super(props);

        this.state = {
            count:0
        }
    }
    incrementCount = () => {
        console.log('incrementCount event !!!');
        this.setState((prevState) => ({
        count: prevState.count+ 1
        }))
    }
//Common Code ends



    render() {
        console.log('Count Component - this.props.render ==> ' , this.props.render);
        return (
            <div>
               {this.props.renderComp(this.state.count,this.incrementCount)} 
            </div>
        )
    }
}

export default Counter;
-----------------------------------------------------------------------------------------------
App.js
-------
<Counter renderComp={(count,incrementCount) => (<ClickCounter count={count} incrementCount={incrementCount}/>) }/>
    
<Counter renderComp={(count,incrementCount) => (<HoverCounter count={count} incrementCount={incrementCount}/>) }/>

With above changes it will work
======================================
Alternative is 
Note:
In App.js, we have passed props with name "renderComp" 
and used in Counter.js as this.props.renderComp

Instead what we can do is pass it as children, the changes will be as below :

App.js
-------
{/*
<Counter renderComp={(count,incrementCount) => (<ClickCounter count={count} incrementCount={incrementCount}/>) }/>
<Counter renderComp={(count,incrementCount) => (<HoverCounter count={count} incrementCount={incrementCount}/>) }/>
*/}

<Counter>
  {(count,incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount}/>
        )}
 </Counter> 
    
    <Counter> 
      {(count,incrementCount) => (
        <HoverCounter count={count} incrementCount={incrementCount}/>
      )}
    </Counter>  



Counter.js
----------
 {/*      {this.props.renderComp(this.state.count,this.incrementCount)}   */}
          {this.props.children(this.state.count,this.incrementCount)}    

ClickCounter and HoverCounter will be same as above :
It will work with these changes          
