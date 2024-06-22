
Logic:


* Define Functions:
Person1()
Person2()
Person3()
Person4()


* Function Calls:
Functions Person1, Person2, Person3, and Person4 are called in sequence from top to bottom.

* Instantly Output 
Functions Person1, Person2, and Person4 instantly or Immediately print 

 # but When Person3() is called:
It first immediately prints 'Doe' to the console.
Then, it sets a timer using setTimeout to print 'John' after waiting for 1 second.


* Asynchronous Execution:

 # When Person3() is called:
It first immediately prints 'Doe' to the console.
Then, it sets a timer using setTimeout to print 'John' after waiting for 1 second.
 ## Final Output:
            John
            Ovi
            Doe
            Ali
            John





* * 
 # CallBack 
    Callbacks are functions passed as arguments to other functions, intended to be executed later, often after an asynchronous operation completes.


   * Function as an Argument:
    Callbacks are functions passed as arguments to other functions.

   * Execution Timing:
    They are executed later, typically after a specific task completes, often asynchronously.

   * Handling Asynchronous Operations:
    Callbacks are commonly used for tasks like fetching data from a server or responding to user events.

   * Event Handling:
    In event-driven programming, callbacks define actions triggered by events like clicks or hovers.

   * Error Handling:
    Callbacks manage success and failure scenarios in asynchronous operations, ensuring robust error handling.




<!-- * Callback Function 
****************************** -->
* CallBack Operation createPerson() and Apply callback

This 'createPerson()' function, createPerson, takes a new person object (man) and a callback function (callback)
  => using setTimeout
  => then adds the new person to the Person array and calls the callback function.