class Counter {
  number = 0;

  increment() {
    this.number++;
  } 

  decrement() {
    if (this.number > 0) {
      this.number--;
    } else {
      alert("Oooops! Non puoi andare sotto lo zero!");
    } 
  }

  reset() {
    this.number = 0;
  }

}

class Button {
  button = document.createElement("button");

  constructor(className, buttonText, onClickFunction) {
    this.button.className = className;
    this.button.innerHTML = buttonText;
    this.button.onclick = onClickFunction;
  }

  appendToElement(previousElement) {
    previousElement.appendChild(this.button)
  }
}

class App {
  // Counter representation and counter div
  counter = new Counter();
  // main div
  counterDiv = document.createElement('div');
  // title element
  title = document.createElement('h1');
  // middle div with counter and +/- buttons
  counterAddMinus = document.createElement('div');
  // counter element for displaying the counter value
  counterValueDiv = document.createElement("div");

  minusButton = new Button("minus", "-", this.decrementCounterFunction.bind(this));
  addButton = new Button("add", "+", this.incrementCounterFunction.bind(this));
  resetButton = new Button("reset", "Reset", this.resetCounterFunction.bind(this));

  constructor() {
    // config main div
    this.counterDiv.className = 'counter';
    document.body.appendChild(this.counterDiv);
    // config title element
    this.title.innerHTML = 'Counter'
    this.counterDiv.appendChild(this.title);
    // config middle div
    this.counterAddMinus.className = 'add-minus';
    this.counterDiv.appendChild(this.counterAddMinus);
    // append minus button to middle div
    this.minusButton.appendToElement(this.counterAddMinus);
    // config counter number div
    this.counterValueDiv.className = 'counter-number';
    this.counterValueDiv.innerHTML = this.counter.number;
    this.counterAddMinus.appendChild(this.counterValueDiv);
    // append plus button to middle div
    this.addButton.appendToElement(this.counterAddMinus);
    // append reset button below middle div
    this.resetButton.appendToElement(this.counterDiv);
  }

  refreshCounterValue() {
    this.counterValueDiv.innerHTML = this.counter.number;
  }

  incrementCounterFunction() {
    this.counter.increment();
    this.refreshCounterValue();
  }

  decrementCounterFunction() {
    this.counter.decrement();
    this.refreshCounterValue();
  }

  resetCounterFunction() {
    this.counter.reset();
    this.refreshCounterValue();
  }
}

new App();