In component lifecycle for handling error there are 2 methods

=> static getDerivedStateFromError(error) : used to render a fallback UI after an error is thrown
=> componentDidCatch(error,info) : used to log error information

Runtime error during rendering could put our application in broken state
So it will be good if we can catch error anywhere in component tree and display a fallback UI
This is where Error Boundary helps


Error Boundary - A class component that implements either one or both of the lifecycle methods - 
(See summary at end of this file)
static getDerivedStateFromError(error) or componentDidCatch(error,info).
=============================================================================
Hero.js
-------
function Hero(props) {
    const heroName = props.heroName;
        if(heroName === 'Joker'){
            throw new Error('Not A Hero !!!');
        }

    return (
        <div>
           Hero is : {heroName}
        </div>
    )
}

export default Hero;
=============================================================================
App.js
-----
 <div className="App">
          <h1>This is App component</h1>
            <Hero heroName="Batman" />
            <Hero heroName="Superman" />   
            <Hero heroName="Joker" />       
    </div>
=================================================================================

As third one is Joker so it will throw error and entire app is broken. we want to display Batmand and Superman
as those component does not have any problems
we will achieve this with ErrorBoundary

MyErrorBoundary.js
------------------
class MyErrorBoundary extends Component {
constructor(props) {
    super(props)

    this.state = {
         hasError:false
    }
}

    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
    componentDidCatch(error,info){
        console.log('Error is : => ' , error);
        console.log('Info is : => ' , info);
    }

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong !!!</h1>
        }
            return this.props.children
        
    }
}

export default MyErrorBoundary


Note:
(1) ErrorBoundary catch error during rendering and lifecycle methods and in constructors of whole tree below them 
however they do not catch error inside Event Handlers 
so we have onclick handler and want to catch error we need to use regular try-catch

(2)  componentDidCatch is used to log error . However here we have logged in console which is not useful
     as browser used to show this error 
(3) Browser first will show error like - " this line causing problem" . We need to click on close button on right
    to see the error messsage from ErrorBoundary     


Summary :
(1) ErrorBoundary are React component that catch JS error in their child component tree , log those error and
display fallback UI

(2) A Class component becomes an error boundary by defining either or both of :
        - static getDerivedStateFromError(error) 
        - componentDidCatch(error,info).

(3) The placement of Error Boundary also matter as it controls if entire app should have fallback UI or just
    the component causing problem

Now we have placed ErrorBoundary separately for each component as 
            <MyErrorBoundary>
                <Hero heroName="Batman" />
            </MyErrorBoundary> 

            <MyErrorBoundary>
                <Hero heroName="Superman" />   
            </MyErrorBoundary>
            
            <MyErrorBoundary>
                <Hero heroName="Joker" />
            </MyErrorBoundary>   

But if we place all components in 1 error boundary
            <MyErrorBoundary>
                <Hero heroName="Batman" />
                <Hero heroName="Superman" />   
                <Hero heroName="Joker" />
            </MyErrorBoundary>   
then Batman and Superman wont be visible in UI             

