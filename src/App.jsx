import { useState, useEffect } from "react";
import "./styles.scss";
export default function App() {
    var input = ["0", null, null]; //[num1, operation, num2]
    var hasDecimal = false;
    var num1 = true;

    useEffect(() => {
        const display = document.getElementById("display");
        display.innerHTML = "0";
    }, []);

    function clear() {
        input = ["0", null, null];
        hasDecimal = false;
        num1 = true;
        display.innerHTML = "0";
    }

    function decimal() {
        if (!hasDecimal) {
            display.innerHTML += ".";
            hasDecimal = true;
        }
    }

    function doSubtraction() {
        if (num1 == true && input[0] == "0") {
            displayNum("-");
        }
        if (input[1] != null && input[2] == null) {
            displayNum("-");
        } else {
            doOperation("-");
        }
    }

    function doOperation(op) {
        num1 = false;
        if (input[2] == null || input[2] == "-") {
            input[1] = op;
            display.innerHTML = "0";
        } else {
            calculate();
            input[1] = op;
            display.innerHTML = "0";
        }
        hasDecimal = false;
        console.log(input);
    }

    function displayNum(num) {
        if (display.innerHTML == "0") {
            display.innerHTML = num;
        } else {
            display.innerHTML += num;
        }
        if (num1 == true) {
            input[0] = display.innerHTML;
        } else {
            input[2] = display.innerHTML;
        }
        console.log(input);
    }

    function calculate() {
        var answer = 0;
        if (input[2] == null) {
            input[2] = "0";
        }
        if (input[1] == "+") {
            answer = Number(input[0]) + Number(input[2]);
        }
        if (input[1] == "-") {
            answer = Number(input[0]) - Number(input[2]);
        }
        if (input[1] == "*") {
            answer = Number(input[0]) * Number(input[2]);
        }
        if (input[1] == "/") {
            answer = Number(input[0]) / Number(input[2]);
        }
        display.innerHTML = answer;
        input = [answer, null, null];
    }

    return (
        <>
            <div id="calculator">
                <div id="formulaContainer">
                    <p id="formula"></p>
                </div>
                <div id="displayContainer">
                    <p id="display"></p>
                </div>
                <div id="buttons">
                    <div
                        className="button"
                        id="clear"
                        onClick={() => {
                            clear();
                        }}>
                        AC
                    </div>
                    <div
                        className="button"
                        id="divide"
                        onClick={() => {
                            doOperation("/");
                        }}>
                        /
                    </div>
                    <div
                        className="button"
                        id="multiply"
                        onClick={() => {
                            doOperation("*");
                        }}>
                        x
                    </div>
                    <div
                        className="button"
                        id="seven"
                        onClick={() => {
                            displayNum("7");
                        }}>
                        7
                    </div>
                    <div
                        className="button"
                        id="eight"
                        onClick={() => {
                            displayNum("8");
                        }}>
                        8
                    </div>
                    <div
                        className="button"
                        id="nine"
                        onClick={() => {
                            displayNum("9");
                        }}>
                        9
                    </div>
                    <div
                        className="button"
                        id="subtract"
                        onClick={() => {
                            doSubtraction();
                        }}>
                        -
                    </div>
                    <div
                        className="button"
                        id="four"
                        onClick={() => {
                            displayNum("4");
                        }}>
                        4
                    </div>
                    <div
                        className="button"
                        id="five"
                        onClick={() => {
                            displayNum("5");
                        }}>
                        5
                    </div>
                    <div
                        className="button"
                        id="six"
                        onClick={() => {
                            displayNum("6");
                        }}>
                        6
                    </div>
                    <div
                        className="button"
                        id="add"
                        onClick={() => {
                            doOperation("+");
                        }}>
                        +
                    </div>
                    <div
                        className="button"
                        id="one"
                        onClick={() => {
                            displayNum("1");
                        }}>
                        1
                    </div>
                    <div
                        className="button"
                        id="two"
                        onClick={() => {
                            displayNum("2");
                        }}>
                        2
                    </div>
                    <div
                        className="button"
                        id="three"
                        onClick={() => {
                            displayNum("3");
                        }}>
                        3
                    </div>

                    <div
                        className="button"
                        id="zero"
                        onClick={() => {
                            displayNum("0");
                        }}>
                        0
                    </div>
                    <div
                        className="button"
                        id="decimal"
                        onClick={() => {
                            decimal();
                        }}>
                        .
                    </div>
                    <div
                        className="button"
                        id="equals"
                        onClick={() => {
                            calculate();
                        }}>
                        =
                    </div>
                </div>
            </div>
        </>
    );
}
