1. At line 11, the length of <code>prices</code> array will be written to the console. Because <code>i</code> is declared with <code>var</code>, which is a global value, and the value of <code>i</code> is incremented to the length of <code>prices</code> array when the for loop ends.   
2. At line 12, the discounted price of the last element in <code>prices</code> array will be written to the console. Because <code>discountedPrice</code> is declared with <code>var</code>, which is a global variable, and the value of <code>discountedPrice</code> is <code>prices[prices.length-1]*(1-discount)</code> when the for loop ends.
3. At line 13, the final price of the last element in <code>prices</code> array will be written to the console. Because <code>finalPrice</code> is declared with <code>var</code>, which is a global variable, and the value of <code>finalPrice</code> is <code>Math.round(discountedPrice * 100) / 100</code>, where the value of <code>discountedPrice</code> is same as the Question 2. 
4. [50, 100, 150] will be returned.  
Because this function iterates through the input <code>prices</code> array. Within the for loop, each price in the array of <code>prices</code> is applied the given discount and rounded, and then the new prices are pushed into a <code>discounted</code> array. Then, the <code>discounted</code> array is returned.
5. At line 11, a Reference error will be thrown. Because when <code>let</code> is used to declare the <code>i</code> variable in a loop, the <code>i</code> variable will only be visible within the loop. Thus, it will say that the <code>i</code> variable is not defined.
6. At line 12, a Reference error will be thrown. Because when <code>let</code> is used to declare the <code>discountedPrice</code> variable in a code block, the <code>discountedPrice</code> will only be visible within the code block. Thus, it will say that the <code>discountedPrice</code> variable is not defined. 
7. At line 13, the final price (discounted and rounded) of the last element in <code>prices</code> array will be written to the console. Although the <code>finalPrice</code> is declared with <code>let</code>, it's not in another seperate code block. Thus, the answer of this question should be same as Question 3. 
8. [50, 100, 150] will be returned.  
Although <code>discounted</code> is declared with <code>let</code>, it's still in the same code block. This function iterates through the input <code>prices</code> array. Within the for loop, each price in the array of <code>prices</code> is applied the given discount and rounded, and then the new prices are pushed into a <code>discounted</code> array. Then, the <code>discounted</code> array is returned.
9. At line 11, a Reference error will be thrown. Because when <code>let</code> is used to declare the <code>i</code> variable in a loop, the <code>i</code> variable will only be visible within the loop. Thus, it will say that the <code>i</code> variable is not defined.
10. At line 12, a Reference error will be thrown. Because <code>discountedPrice</code> is declared with <code>const</code> in a code block, the <code>discountedPrice</code> variable is not visible outside the code block. Thus, it will say the <code>discountedPrice</code> variable is not defined. 
11. At line 13, if the input <code>prices</code> array is empty, 0 will be written to the console. Otherwise, a Type error will be thrown. Because <code>finalPrice</code> is declared with <code>const</code>, which means <code>finalPrice</code> cannot be reassigned, and the input <code>prices</code> array is not empty. In the for loop, the <code> finalPrice</code> is updated after every iteration, which causes a Type error.
12. Can't return. 
Because <code>finalPrice</code> variable is declared with <code>const</code>, the attempt to reassign the <code>finalPrice</code> is not allowed. 
13. \
A. student.name \
B. student['Grad Year'] \
C. student.greeting(); \
D. student['Favorite Teacher'].name \
E. student.courseLoad[0] 




