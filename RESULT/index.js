// --------------------------------------------------------------------- validation of input fields -----------------------------------------------

// -------------------------------------------------------------common function---------------------------------------------------

function succerror(elem, checkElement) {
    if (checkElement) {
        elem.style.backgroundColor = "#ED7777";
        elem.style.color = "white";
        elem.style.border = "1px solid #ED7777";
    } else {
        elem.style.backgroundColor = "#48B736";
        elem.style.color = "white";
        elem.style.border = "1px solid #48B736";
    }
}

// добавляем иконку статуса после номера вопроса

function addImage(status, ancestor, appClass, position) {
    let object = document.createElement("img");
    object.style.marginLeft = "10px";

    if (status === "success") {
        object.src = "./pictures/successIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #9DD765";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #9DD765";
    } else {
        object.src = "./pictures/failureIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #FFB47D";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #FFB47D";
    }

    ancestor[0].children[0].appendChild(object);
}

// добавляем крестик или галочку над областью результата

function addMiniIcon(elem, status) {
    // создаём мини-иконку
    let objDiv = document.createElement("div");

    // получаем ширину элемента, чтобы выровнять по горизонтали
    let widthAdjacentElement = elem.getBoundingClientRect().width;

    // получаем отступы элемента, для того же
    let leftIndent = window
        .getComputedStyle(elem, null)
        .getPropertyValue("margin-left");

    let rightIndent = window
        .getComputedStyle(elem, null)
        .getPropertyValue("margin-right");

    // устанавливаем её нашему блоку
    objDiv.style.width = widthAdjacentElement;

    if (elem.parentElement.parentElement.className === "content2") {
        objDiv.style.marginLeft = "85px";
        objDiv.style.position = "absolute";

        let parent = elem.parentElement;

        parent.style.width = "150px";
        parent.style.display = "flex";
        parent.style.alignItems = "center";
        parent.style.justifyContent = "space-between";

        parent.style.marginRight = "15px";

        document.getElementsByClassName("content2")[0].style.width = "268px";
    } else if (elem.parentElement.parentElement.className === "content8") {
        if (elem.parentElement.className === "rightExpression8") {
            objDiv.style.marginLeft = "80px";
        } else {
            objDiv.style.marginLeft = "55px";
        }

        objDiv.style.position = "absolute";

        let parent = elem.parentElement;

        parent.style.width = "150px";
        parent.style.alignItems = "center";
        parent.style.justifyContent = "space-between";

        parent.style.marginRight = "15px";

        document.getElementsByClassName("content8")[0].style.width = "458px";
    } else {
        objDiv.style.marginLeft = leftIndent;
    }

    objDiv.style.marginRight = rightIndent;

    if (
        elem.parentElement.parentElement.parentElement.className === "content10"
    ) {
        objDiv.style.paddingBottom = "5px";
    } else {
        objDiv.style.paddingBottom = "10px";
    }

    objDiv.style.display = "flex";
    objDiv.style.justifyContent = "center";
    objDiv.style.alignItems = "center";

    let obj = document.createElement("img");

    if (status === "success") {
        obj.src = "./pictures/successMiniIcon.svg";
    } else {
        obj.src = "./pictures/failureMiniIcon.svg";
    }

    objDiv.appendChild(obj);

    if (elem.parentElement.parentElement.className === "content2") {
        objDiv.style.marginTop = "-45px";
    } else if (elem.parentElement.parentElement.className === "content8") {
        objDiv.style.marginTop = "-55px";
    } else {
        objDiv.style.marginTop = "-23px";
    }

    // устанавливаем её в нужное место
    let elementParent = elem.parentElement;
    elementParent.insertBefore(objDiv, elem);
}

// делаем появление мини-иконок над областью проверки

function createMiniIcon(property, element) {
    if (property === "right") {
        addMiniIcon(element, "success");
    } else {
        addMiniIcon(element, "failure");
    }
}

function checkin(countId, correctNumbers, e, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            document.getElementById("firstNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value === correctNumbers[i]) {
                        number.firstNumber = "right";
                    } else {
                        number.firstNumber = "wrong";
                    }
                };
        }

        if (i === 1) {
            document.getElementById("secondNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value === correctNumbers[i]) {
                        number.secondNumber = "right";
                    } else {
                        number.secondNumber = "wrong";
                    }
                };
        }

        if (i === 2) {
            document.getElementById("thirdNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value === correctNumbers[i]) {
                        number.thirdNumber = "right";
                    } else {
                        number.thirdNumber = "wrong";
                    }
                };
        }

        if (i === 3) {
            document.getElementById("fourthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value === correctNumbers[i]) {
                        number.fourthNumber = "right";
                    } else {
                        number.fourthNumber = "wrong";
                    }
                };
        }

        if (i === 4) {
            document.getElementById("fifthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value === correctNumbers[i]) {
                        number.fifthNumber = "right";
                    } else {
                        number.fifthNumber = "wrong";
                    }
                };
        }

        if (i === 5) {
            document.getElementById("sixthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value === correctNumbers[i]) {
                        number.sixthNumber = "right";
                    } else {
                        number.sixthNumber = "wrong";
                    }
                };
        }
    }
}

function succerrorAndCreateMiniIcon(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            succerror(
                document.getElementById("firstNumber" + numberQuestion),
                number.firstNumber === "wrong"
            );

            createMiniIcon(
                number.firstNumber,
                document.getElementById("firstNumber" + numberQuestion)
            );
        }

        if (i === 1) {
            succerror(
                document.getElementById("secondNumber" + numberQuestion),
                number.secondNumber === "wrong"
            );

            createMiniIcon(
                number.secondNumber,
                document.getElementById("secondNumber" + numberQuestion)
            );
        }

        if (i === 2) {
            succerror(
                document.getElementById("thirdNumber" + numberQuestion),
                number.thirdNumber === "wrong"
            );

            createMiniIcon(
                number.thirdNumber,
                document.getElementById("thirdNumber" + numberQuestion)
            );
        }

        if (i === 3) {
            succerror(
                document.getElementById("fourthNumber" + numberQuestion),
                number.fourthNumber === "wrong"
            );

            createMiniIcon(
                number.fourthNumber,
                document.getElementById("fourthNumber" + numberQuestion)
            );
        }

        if (i === 4) {
            succerror(
                document.getElementById("fifthNumber" + numberQuestion),
                number.fifthNumber === "wrong"
            );

            createMiniIcon(
                number.fifthNumber,
                document.getElementById("fifthNumber" + numberQuestion)
            );
        }

        if (i === 5) {
            succerror(
                document.getElementById("sixthNumber" + numberQuestion),
                number.sixthNumber === "wrong"
            );

            createMiniIcon(
                number.sixthNumber,
                document.getElementById("sixthNumber" + numberQuestion)
            );
        }
    }
}

function podsvetkanevibrannihblokov(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (number.firstNumber === "") {
                document.getElementById(
                    "firstNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (number.secondNumber === "") {
                document.getElementById(
                    "secondNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (number.thirdNumber === "") {
                document.getElementById(
                    "thirdNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (number.fourthNumber === "") {
                document.getElementById(
                    "fourthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (number.fifthNumber === "") {
                document.getElementById(
                    "fifthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (number.sixthNumber === "") {
                document.getElementById(
                    "sixthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }
    }
}
// ----------------------------------------------------------------------------------------------------------------------------

// 1 QUESTION

let numbers1 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

checkin(4, [342, 17, 261, 5], e, 1, numbers1);

function question1() {
    if (
        numbers1.firstNumber != "" &&
        numbers1.secondNumber != "" &&
        numbers1.thirdNumber != "" &&
        numbers1.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 1, numbers1);

        // выносим общий статус к номеру вопроса

        if (
            numbers1.firstNumber === "right" &&
            numbers1.secondNumber === "right" &&
            numbers1.thirdNumber === "right" &&
            numbers1.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );

            // addCorrectAnswerQuestion1();
        }
    } else {
        podsvetkanevibrannihblokov(4, 1, numbers1);
    }
}

// 2 QUESTION

let numbers2 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

checkin(3, [342, 17, 261, 5], e, 2, numbers2);

function question2() {
    if (
        numbers2.firstNumber != "" &&
        numbers2.secondNumber != "" &&
        numbers2.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 2, numbers2);

        // выносим общий статус к номеру вопроса

        if (
            numbers2.firstNumber === "right" &&
            numbers2.secondNumber === "right" &&
            numbers2.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );

            // addCorrectAnswerQuestion2();
        }
    } else {
        podsvetkanevibrannihblokov(3, 2, numbers2);
    }
}

// 3 QUESTION

let numbers3 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

checkin(4, [342, 17, 261, 5], e, 3, numbers3);

function question3() {
    if (
        numbers3.firstNumber != "" &&
        numbers3.secondNumber != "" &&
        numbers3.thirdNumber != "" &&
        numbers3.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 3, numbers3);

        // выносим общий статус к номеру вопроса

        if (
            numbers3.firstNumber === "right" &&
            numbers3.secondNumber === "right" &&
            numbers3.thirdNumber === "right" &&
            numbers3.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );

            // addCorrectAnswerQuestion3();
        }
    } else {
        podsvetkanevibrannihblokov(4, 3, numbers3);
    }
}

// PLACE FOR 4 QUESTION

// 5 QUESTION

let numbers5 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    fifthNumber: "",
    sixthNumber: "",
};

checkin(6, [342, 17, 261, 5], e, 5, numbers5);

function question5() {
    if (
        numbers5.firstNumber != "" &&
        numbers5.secondNumber != "" &&
        numbers5.thirdNumber != "" &&
        numbers5.fourthNumber != "" &&
        numbers5.fifthNumber != "" &&
        numbers5.sixthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(6, 5, numbers5);

        // выносим общий статус к номеру вопроса

        if (
            numbers5.firstNumber === "right" &&
            numbers5.secondNumber === "right" &&
            numbers5.thirdNumber === "right" &&
            numbers5.fourthNumber === "right" &&
            numbers5.fifthNumber === "right" &&
            numbers5.sixthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );

            // addCorrectAnswerQuestion5();
        }
    } else {
        podsvetkanevibrannihblokov(6, 5, numbers5);
    }
}

// 6 QUESTION

let numbers6 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

checkin(3, [342, 17, 261, 5], e, 6, numbers6);

function question6() {
    if (
        numbers6.firstNumber != "" &&
        numbers6.secondNumber != "" &&
        numbers6.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 6, numbers6);

        // выносим общий статус к номеру вопроса

        if (
            numbers6.firstNumber === "right" &&
            numbers6.secondNumber === "right" &&
            numbers6.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );

            // addCorrectAnswerQuestion6();
        }
    } else {
        podsvetkanevibrannihblokov(3, 6, numbers6);
    }
}

// 7 QUESTION

let numbers7 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

checkin(3, [342, 17, 261, 5], e, 7, numbers7);

function question7() {
    if (
        numbers7.firstNumber != "" &&
        numbers7.secondNumber != "" &&
        numbers7.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 7, numbers7);

        // выносим общий статус к номеру вопроса

        if (
            numbers7.firstNumber === "right" &&
            numbers7.secondNumber === "right" &&
            numbers7.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );

            // addCorrectAnswerQuestion7();
        }
    } else {
        podsvetkanevibrannihblokov(3, 7, numbers7);
    }
}

// PLACE FOR 8 QUESTION

// PLACE FOR 9 QUESTION

// 10 QUESTION

let numbers10 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

checkin(4, [342, 17, 261, 5], e, 10, numbers10);

function question10() {
    if (
        numbers10.firstNumber != "" &&
        numbers10.secondNumber != "" &&
        numbers10.thirdNumber != "" &&
        numbers10.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 10, numbers10);

        // выносим общий статус к номеру вопроса

        if (
            numbers10.firstNumber === "right" &&
            numbers10.secondNumber === "right" &&
            numbers10.thirdNumber === "right" &&
            numbers10.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );

            // addCorrectAnswerQuestion10();
        }
    } else {
        podsvetkanevibrannihblokov(4, 10, numbers10);
    }
}

// 11 QUESTION

let numbers11 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

checkin(4, [342, 17, 261, 5], e, 11, numbers11);

function question11() {
    if (
        numbers11.firstNumber != "" &&
        numbers11.secondNumber != "" &&
        numbers11.thirdNumber != "" &&
        numbers11.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 11, numbers11);

        // выносим общий статус к номеру вопроса

        if (
            numbers11.firstNumber === "right" &&
            numbers11.secondNumber === "right" &&
            numbers11.thirdNumber === "right" &&
            numbers11.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );

            // addCorrectAnswerQuestion11();
        }
    } else {
        podsvetkanevibrannihblokov(4, 11, numbers11);
    }
}

// PLACE FOR 12 QUESTION

// 13 QUESTION

let numbers13 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    fifthNumber: "",
};

checkin(5, [342, 17, 261, 5], e, 13, numbers13);

function question13() {
    if (
        numbers13.firstNumber != "" &&
        numbers13.secondNumber != "" &&
        numbers13.thirdNumber != "" &&
        numbers13.fourthNumber != "" &&
        numbers13.fifthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(5, 13, numbers13);

        // выносим общий статус к номеру вопроса

        if (
            numbers13.firstNumber === "right" &&
            numbers13.secondNumber === "right" &&
            numbers13.thirdNumber === "right" &&
            numbers13.fourthNumber === "right" &&
            numbers13.fifthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );

            // addCorrectAnswerQuestion13();
        }
    } else {
        podsvetkanevibrannihblokov(5, 13, numbers13);
    }
}

// RESULT

document.getElementById("submit").onclick = function () {
    question1();
    question2();
    question3();
    // -- 4 --
    question5();
    question6();
    question7();
    // -- 8 --
    // -- 9 --
    question10();
    question11();
    // -- 12 --
    question13();
};
