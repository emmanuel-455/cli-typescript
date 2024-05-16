import { question } from "readline-sync";

function main() {
  const firstStr: string = question("Enter first number:\n")
  const operator: string = question("Enter Operator \n")
  const secondStr: string = question("Enter second number \n")

  const validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr)
  console.log(validInput)
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