HOC is used to share common functionality between components without repeating code.
const enhancedComponent = HOC(originalComponent);
===========================================================
------------------------PART-1-----------------------------
===========================================================
In part-1, there is ClickCounter and HoverCounter
if we see code these two components have this code as common
 constructor(props) {
        super(props);
    
        this.state = {
             count:0
        }
    }
    
    increaseCount = () =>{
        this.setState((prevState) => ({
            count:prevState.count+1
        }))
    }
So to share common functionality without duplicacy we will use Higher Order Functions
The general syntax is below  :
==================================================================
const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component{
        render(){
            return <OriginalComponent name="Vishwas" />
        }
    }
    return NewComponent;
}

export default UpdatedComponent;
==================================================================

we will see implementation of Higher Order Function in part-2 below :
=====================================================================
-------------Part-2--------------------------------------------------
=====================================================================
check files withCounter.js,ClickCounter.js and HoverCounter.js


=====================================================================
-------------Part-3--------------------------------------------------
=====================================================================

(a) Accessing props passed from App to Wrapped components
----------------------------------------------------------
In App component if we pass name props like below :
<div className="App">
          <h1>This is App component</h1>
            <ClickCounter name="abc" />    
            <HoverCounter/>
    </div>

and in ClickCounter if we try to access this like 
  <button onClick={increaseCount} >{this.props.name} Clicked {count} times </button>
  then we wont find

  this is because the props is passed to HOC i.e withCounter component 
  and need to be passed from that

  in withCounter.js
  after render and before return if we do -  console.log(this.props);
  we can see the name passed from App.js for ClickCounter , for HoverCounter it will be undefined as not passed

  to access in ClickCounter it needs to be passed from HOC to WrappedComponent
-------------------------------------------------------------------------------------------------------------------
   render(){
            console.log(this.props);
            return <WrappedComponent count={this.state.count} increaseCount={this.increaseCount} {...this.props}/>
        }
-------------------------------------------------------------------------------------------------------------------
with above change it will work and since ClickCounter has button name as :
 <button onClick={increaseCount} >{this.props.name} Clicked {count} times </button>

So it will display display button name  as - abc Clicked 0 times        

(b) Passing parameters to HOC function
---------------------------------------
say we want to increment click counter by 5 times on each click and hover counter to 10 times on each hover

So in HOC i.e withCounter it will have 2 params - WrapperComponent as earlier and also "incrementNumber"

In ClickCounter.js,
// export default withCounter(ClickCounter);
   export default withCounter(ClickCounter,5);

In HoverCounter.js,
// export default withCounter(HoverCounter);
   export default withCounter(HoverCounter,10);

In withCounter.js,
// const withCounter = (WrappedComponent) => {
   const withCounter = (WrappedComponent,incrementNumber) => {

increaseCount = () => {
    console.log('increaseCount event !!!');
    this.setState((prevState) => ({
 // count: prevState.count+ 1
    count: prevState.count+ incrementNumber
    }))
            }

With these changes it will work