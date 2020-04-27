In App.js, 
<ParentComponent/>

Now - chekc in browser's console
Only Parent and Regular Component console.log will appear !!!


Note: Pure Component does a shallow comparison and not deep comparison
this is reason we should not modify existsing object in state but instead create a new object and assign it
