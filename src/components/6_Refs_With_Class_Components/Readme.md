In 5, we saw ref with input element. However it can also be applied with Components
now we will see how ref can be applied to component

Parent has button and Child has textbox, on click on button textbox should get focus

In App - include FocusInput

FocusInput is parent component and InputComp is child component

InputComp : has textbox with ref "inputRef"
          : method focusInput to focus on inputRef(this method need to called from FocusInput)

FocusInput :  It has InputComp with ref - <InputComp ref={this.componentRef}/>
           :  button to click and onclick - this.componentRef.current.focusInput(); 

