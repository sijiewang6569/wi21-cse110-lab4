1. At line 11, the length of <code>prices</code> array will be writted to the console. Because <code>i</code> is declared as <code>var</code>, which is a global value and the value of <code>i</code> is incremented to the length of <code>prices</code> array when the for loop ends.   
2. At line 12, the discounted price of the last element in <code>prices</code> array will be written to the console. Because <code>discountedPrice</code> is declared as <code>var</code>, which is a global variable, and the value of <code>discountedPrice</code> is <code>prices[prices.length-1]*(1-discount)</code> when the for loop ends.
3. At line 13, the final price of the last element in <code>prices</code> array will be written to the console. Because, <code>finalPrice</code> is declared as <code>var</code>, which is a global variable, and the value of <code>finalPrice</code> is <code>Math.round(discountedPrice * 100) / 100</code>, where the value of <code>discountedPrice</code> is same as the Question 2. 
[50, 100, 150] will be returned. 
13. A. student.name
    B. student['Grad Year']
    C. student.greeting();
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]




