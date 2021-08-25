function createLoop(num1,num2) {
	if (num2>num1) {
		while(num2>=num1) {
			console.log(num2);
			num2--
		}
	} else if (num2<num1) {
		console.log("Please make sure the 1st number is lower than the 2nd")
		
	} else if (num2===num1) {
		console.log("The numbers are the same")
	} 

}

