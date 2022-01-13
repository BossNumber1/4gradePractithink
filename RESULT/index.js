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
// ----------------------------------------------------------------------------------------------------------------------------

// 1 QUESTION

let numbers1 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

document.getElementById("firstNumber1").onchange = function (e) {
    if (e.target.value == 342) {
        numbers1.firstNumber = "right";
    } else {
        numbers1.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber1").onchange = function (e) {
    if (e.target.value == 17) {
        numbers1.secondNumber = "right";
    } else {
        numbers1.secondNumber = "wrong";
    }
};

document.getElementById("thirdNumber1").onchange = function (e) {
    if (e.target.value == 261) {
        numbers1.thirdNumber = "right";
    } else {
        numbers1.thirdNumber = "wrong";
    }
};

document.getElementById("fourthNumber1").onchange = function (e) {
    if (e.target.value == 5) {
        numbers1.fourthNumber = "right";
    } else {
        numbers1.fourthNumber = "wrong";
    }
};

function question1() {
    if (
        numbers1.firstNumber != "" &&
        numbers1.secondNumber != "" &&
        numbers1.thirdNumber != "" &&
        numbers1.fourthNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber1"),
            numbers1.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber1"),
            numbers1.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber1"),
            numbers1.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("fourthNumber1"),
            numbers1.fourthNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers1.firstNumber,
            document.getElementById("firstNumber1")
        );

        createMiniIcon(
            numbers1.secondNumber,
            document.getElementById("secondNumber1")
        );

        createMiniIcon(
            numbers1.thirdNumber,
            document.getElementById("thirdNumber1")
        );

        createMiniIcon(
            numbers1.fourthNumber,
            document.getElementById("fourthNumber1")
        );

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

            // addCorrectAnswerQuestion10();
        }
    } else {
        if (numbers1.firstNumber === "") {
            document.getElementById("firstNumber1").style.border =
                "2px solid #FFB47D";
        }

        if (numbers1.secondNumber === "") {
            document.getElementById("secondNumber1").style.border =
                "2px solid #FFB47D";
        }

        if (numbers1.thirdNumber === "") {
            document.getElementById("thirdNumber1").style.border =
                "2px solid #FFB47D";
        }

        if (numbers1.fourthNumber === "") {
            document.getElementById("fourthNumber1").style.border =
                "2px solid #FFB47D";
        }
    }
}

document.getElementById("submit").onclick = function () {
    question1();
};
