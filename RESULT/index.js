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

// RESULT

document.getElementById("submit").onclick = function () {
    question1();
};
