import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main():void {
  const firstStr: string = question("Enter first number:\n")
  const operator: string = question("Enter Operator \n")
  const secondStr: string = question("Enter second number \n")

  const validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr)
  
  if (validInput) {
    const firstNum: number = parseInt(firstStr) 
    const secondNum: number = parseInt(secondStr)
    const result = calculate(firstNum, operator as Operator, secondNum)
    console.log(result)
  } else {
    console.log("\nInvalid Input\n")
    main()
  }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
  switch (operator) {
    case "*":
      return firstNum * secondNum;
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "/":
      return firstNum / secondNum;
  }
}

function isOperator(operator: string):boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true
    default:
      return false
  }

}

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum); // Corrected the condition
  return isNum;
}

main()