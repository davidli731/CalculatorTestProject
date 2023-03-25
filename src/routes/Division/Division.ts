import express from 'express';
import { CalculatorTypes, InputPayload, ResultPayload } from "../../abstract/interfaces.js";

export const divisionRoute = express.Router({
    strict: true,
});

// Method to handle post request for division
divisionRoute.post('/', (req, res) => {
    const input : InputPayload = req.body;

    const type = CalculatorTypes.DIV;
    const resultValue = input.numInputOne / input.numInputTwo;

    const resultPayload : ResultPayload = {
        Function: type,
        InputOne: input.numInputOne,
        InputTwo: input.numInputTwo,
        Result: resultValue
    };

    return res.send(resultPayload);
});