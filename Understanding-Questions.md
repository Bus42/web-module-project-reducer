# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the `1` button.
* Click event is fired, `handle1Click` is called
* Inside `handle1Click`, `dispatch` is called
* Parameters for `dispatch` are evaluated and `addOne` is called, returning an action object to be used by `dispatch`
* `ADD_ONE` action is dispatched
* `useReducer` hook uses that dispatch to make changes to state ala the `reducer` function
* a new state object is returned by `useReducer` and evaluated against the previous state to update the component
...

* `TotalDisplay` shows the total plus 1.
