
const Panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

const tabs = Panes.map((tab)=>{
 return {<li>tab<li>}
});


console.log(tabs);
