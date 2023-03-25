export enum CalculatorTypes
{
    ADD = "addition",
    SUB = "subtraction",
    MUL = "multiplication",
    DIV = "division"
}

export interface InputPayload
{
    numInputOne: number,
    numInputTwo: number
}

export interface ResultPayload
{
    Function: CalculatorTypes,
    InputOne: number,
    InputTwo: number,
    Result: number
}