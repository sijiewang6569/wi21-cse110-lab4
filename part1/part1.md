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
11. At line 13, if the input <code>prices</code> array is empty, 0 will be written to the console. Because if the input <code>prices</code> is empty, there is no attempt to reassign the value of <code>finalPrice</code>. 
Otherwise, a Type error will be thrown. Because <code>finalPrice</code> is declared with <code>const</code>, which means <code>finalPrice</code> cannot be reassigned, and the input <code>prices</code> array is not empty. In the for loop, the <code> finalPrice</code> is updated after every iteration, which causes a Type error.
12. Can't return. 
Because <code>finalPrice</code> variable is declared with <code>const</code>, the attempt to reassign the <code>finalPrice</code> is not allowed. 
13. \
A. student.name \
B. student['Grad Year'] \
C. student.greeting(); \
D. student['Favorite Teacher'].name \
E. student.courseLoad[0] 
14. \
A. <b>'32'</b> because when using addition operation, if at least one operand is string type, the second operand is converted to string and the concatenation is executed. Thus, in this case, 2 is converted to '2'. \
B. <b>1</b> because when using subtraction operation, all operands are converted to numbers. In this case, '3' is converted to 3. \
C. <b>3</b> because the null will be converted to its numeric value 0, 3 + 0 = 3. \
D. <b>'3null'</b> because when using addition operation, if at least one operand is string type, the second operand is converted to string. '3' is a string, so null is converted to 'null'. \
E. <b>4</b> because addition operation performs arithmetic on numbers in this case, true will be converted to its numeric value 1, 1 + 3 = 4 \
F. <b>0</b> because addition operation performs arithmetic on numbers in this case, false will be converted to its numberic value 0 and null will be converted to its numberic value 0. \
G. <b>'3undefined'</b> because when using addition operation, if at least one operand is string type, the second operand is converted to string. '3' is a string, so undefined is converted to 'undefined'. \
H. <b>NaN</b> because subtraction operation perform arithmetic on numbers. '3' is converted to 3 and undefined is converted to NaN which causes the final result is NaN. 
15. \
A. <b>True</b> When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. '2' is converted to 2. Since 2 is greater than 1, it's true. \
B. <b>False</b> When comparing two strings, '2' will be greater than '12', because (alphabetically) 1 is less than 2. \
C. <b>True</b> because the '==' operator can transform the operands having the same type before comparison. '2' will be converted to 2 before comparison. \
D. <b>False</b> because the '===' operator is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. '2' and 2 have different data types, so it's false. \
E. <b>False</b> because the '==' operator can transform the operands having the same type. Thus, true will be converted to 1 before comprison. \
F. <b>True</b> because 2 != 0, Boolean(2) evaluates to true. Since true and true have the same value and datatye, Boolean(2) and true have the same value and datatype. Thus, it's true.
16. \
'==': '==' operator can transform the operands having the same type before comparsion, so '==' operator only checks for the equivalency of the values of the two operands. \
'===': '===' operator is a strict equality comparison operator in JavaScript, so '===' operator checks for the equivalency of the values and the equivalency of the datatypes of two operands. 
17. <code>How are you?</code> gets printed. \
First, test the if condition, 2 == true. Because it's the '==' operator, the true will be converted to 1, and 1 is not equal to 2. Thus, it will continue and enter else if condition. Since 2 != 0, the else if condition is true. Thus, <code> How are you?</code> will be written to the console. 
18. Please check 'part1-question18.js' 
19. [6, 8, 9] is returned. 
When the modifyArray function is called, 
20. Please check 'part1-question20.js' 
21. The output is: \
1 \
4 \
3 \
2 \
Because




