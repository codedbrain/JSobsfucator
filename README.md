JSobsfucator is a simple script which aims to make your HTML file un-intelligible for normal people to understand .


<h3> How to use it </h3>
Type your HTML source code there , then you will have a script . You can use it .<br>
for instance if you generate the output of "It has been such a cool day" then you can verify its output by checking the output of the code in browsers console. There appears the above text written in the screen .

<h3> So , how exactly it works ? </h3> 

1)First, it converts the given text into binary<br>
2)It replaces all 0's with spaces(&nbsp , an html entity for space) and 1's with tabs. We have sucessfully converted given texts 
to a string full of whitespaces.<br>
3)Now it already comes with a script which reverses the process meaning that all spaces are converted to 0 and all tabs are converted to 1 and uses document.write to execute the script.<br>
4)It combines the output (which is totally full of whitespaces) with the code (which reverses the process and executes the script).
