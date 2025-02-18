# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Like the recursive version that we looked at in class, the worst case of this
implementation is a sorted array as this minimizes that amount of divisions that
are made and forces us to iterate through more of the array to move values around the
pivot. 

The while loop has occur n-1 times because at the end of every instance, it checks if
p-1 (pcounts the number of swaps that have been made) is larger than the low bound. Since, no
swaps will be made in the worst case as every element is higher than the first element already, 
this will never be true, the only divsion that can happen keeps the same upper bound, but only
increases the lower bound by one. This goes until the second-to-last element where the last element
will be ignored. The for loop that is nested insided the while loop iterates from the lower bound plus
one, to the upper bound. Since the bounds are changing by one each time, we end up iterating through the
n-1 elements, then n-2 elements, and so on until there is only one element to iterate through. This gives
us: 

$\displaystyle\sum_{i=1} ^{n-1}{i} = \frac{(n - 1)\cdot(n - 2)}{2} = \frac{n^2 - 3n + 2}{2}$

Final time complexity for worst case: $\Theta(n^2)$

## Extra Help

I used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
to help me with some of the array methods for using a stack. 

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. 
All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that 
if plagiarism is suspected, charges may be filed against me without prior notice."
