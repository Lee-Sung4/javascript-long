// Stack Memory :
// LIFO (Last-In, First-Out): The most recently added function is always the next one to be processed.
// Stack Frame: Each function call gets its own temporary block of memory on the stack to manage its state.
// Stack Overflow: If a program (commonly due to infinite or excessively deep recursion) tries to push more stack frames than the memory allocated for the call stack can hold, a "stack overflow" error occurs, causing the program to crash.

// USED FOR:
// Primitive values
// Function call execution context
// Local variables

// CHARACTERISTICS:

// ✔ Fast
// ✔ Fixed size
// ✔ Stores actual value

let num1 = 10;
let num2 = num1;
console.log(num1);
console.log(num2);

num2 = 67;
console.log(num2);

// What happens in memory

// x = 5 → value 5 stored in stack
// y = x → copy of 5 stored
// y = 10 → only y changes
// So stack stores copies of values.

function first() {
  console.log("First function");
}

function second() {
  first();
  console.log('Second function');
}

function third() {
    second();
    console.log('Third function');
}

third()



// The flow of the call stack 
// third() is called, and its stack frame is pushed onto the stack
// Inside third(), second() is called, and its stack frame is pushed on top of third()'s frame.
// Inside second(), first() is called, and its stack frame is pushed on top of second()'s frame. The stack now has first() at the top.
// first() executes its code (console.log("First function")) and completes. Its stack frame is popped off the stack.
// Control returns to second(), which continues execution (console.log("Second function")) and then completes. Its stack frame is popped off the stack.
// Control returns to third(), which finishes its execution (console.log("Third function")) and then completes. Its stack frame is popped off the stack.
// The call stack is now empty, and the program finishes.




//-------------------------------------------------------------------------------------------------------------------------
// The call stack manages program execution through two primary operations: push and pop.


// Push: When a function is invoked (called), a corresponding entry called a stack frame (or activation record) is created. This stack frame, which contains the function's arguments, local variables, and the return address (the location in the code to return to after the function finishes), is then pushed onto the top of the call stack.

// Pop: When a function completes its execution (returns a value or reaches its end), its stack frame is popped off the top of the stack. Control then returns to the function whose frame is now at the top of the stack, at the specific return address that was saved.