- What is JSX and why is it used?

JSX is a syntax used in React to give the power of writing HTML-like code inside JavaScript. It keeps the UI code easy to read and understand. It makes it easier for any developer to create React components in quite a simple and organized way, and it gets converted into normal JavaScript before running into the browser.

- What is the major difference between State and Props?

State is data that lives in a component and can change over time. As state changes, component will re-render. Props can pass data from a parent component to a child component. The children should never modify props. To phrase it with fewer words, state is mutable and internal, while props are read-only and external.

- What is the useState hook, and how does it work?

useState is used to add state to functional components. It returns a state value and a function to update it. When the update function is called, React updates the state and re-renders the component with the new data.

- How to Share State Between Components in React?

To share state, it can be elevated to a common parent component. In this parent, state is maintained and passed down to other components as props. In bigger applications, other tools like the Context API or state management libraries can be employed.

- How is the event handled in React?

Event handling in React is performed through camelCase event names, for example, onclick and onchange. Functions are used, not string representations of functions. Event handling in React is very efficient because of its synthetic event system.