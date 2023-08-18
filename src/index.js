document.addEventListener("DOMContentLoaded", () => {
  //DOMElement.addEvenetListener(...) is the way to listen to events within the HTML element.
  //Normally when a button is clicked, just the button DOM element is returned with e.target; however, for
  //anything inside of a form element, it is a different story.

  document.querySelector('form#create-task-form').addEventListener("submit" , function handleSubmitEvent(e){
    //prevents default form action from occurring...
    e.preventDefault();

    //need to warn user if the input field is blank:
    if(e.target['new-task-description'].value === ''){
      alert('Please Complete Form Before Proceeding');
      //return ends the function here and doesn't proceed further down. Ok cool.
      return;
    }

    //e.target returns the parent of the element that is subject to the event, which in this case is the form element.
    //also can get specific target element by [] notation because DOM elements are objects. Developers can use bracket notation to 
    //access DOM elements freely.
    const newTaskTextContent = e.target['new-task-description'].value;
    //create DOM elemetn function below
    const {parent, childList, childButton} = newParentDivChildrenLiBtnCreator();

    //listens to event when button is clicked so it can be removed from list...
    //this essentially adds an event listener to the button even when DOM is deployed.
    parent.addEventListener('click', (e)=>{
      e.preventDefault();
      //deletes the whole button "psuedo-form"
      e.target.parentElement.remove();
    })

    childList.textContent = newTaskTextContent;
    childButton.textContent = ' X ';

    document.querySelector('ul#tasks').appendChild(parent);

    //want to erase text field after submital...
    document.querySelector('input#new-task-description').value = '';

  });

});

//this function actually works prety well
function newParentDivChildrenLiBtnCreator(){
  const parent = document.createElement('div');
  const childList = document.createElement('li');
  const childButton = document.createElement('button');

  parent.appendChild(childList);
  parent.appendChild(childButton);

  const domElementReturn = {
    parent: parent,
    childList: childList,
    childButton: childButton,
  }

  return domElementReturn;

}


