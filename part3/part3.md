# DevTools - Debugging
### Breakpoint screenshot
<img src=https://github.com/sijiewang6569/wi21-cse110-lab4/blob/main/part3/part3-breakpoint.png>

### Watch expressions list screenshot
<img src=https://github.com/sijiewang6569/wi21-cse110-lab4/blob/main/part3/part3-watch.png>

### What was the bug? 
The bug was caused by the input data type. The num1 and num2 were converted to string. Thus, when they went into the <code>calculateSum</code> function, num1 and num2 were performed concatenation instead of addition. 

### How to fix the bug? 
I added a type casting that converts the input value to number with <code>Number()</code> function to fix the bug. 

### Fixed file screenshot
<img src=https://github.com/sijiewang6569/wi21-cse110-lab4/blob/main/part3/part3-fixed.png>

# DevTools - Network Tab
1. citylots.json
2. part2.js
3. 11.7 MB
4. 1.83s
5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 
6. Type of server: Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. Content-Type: application/json
9. fetchData()
