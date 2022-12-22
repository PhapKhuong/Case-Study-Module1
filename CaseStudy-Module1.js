// TASK 2 - BÀI 1: VẼ TAM GIÁC VUÔNG CÂN RỖNG CÓ CHIỀU CAO H = 5
function displayTriangle1()
    {
        let h = 5;
        let str = "";
        for (let i = 1; i <= 5; i++)
            {
                for (let j = 1; j <= i; j++)
                    {
                        if (i === h) str += "*"
                        else
                            {
                                if (j === 1 || j === i) str += "*";
                                else str += "&nbsp&nbsp";
                            };
                    };
                str += "<br>";
            };
        document.getElementById("result_21").innerHTML = str;
    };

// TASK 2 - BÀI 2: VẼ TAM GIÁC CÂN ĐẶC CÓ CHIỀU CAO H = 5 DO NGƯỜI DÙNG NHẬP VÀO
function displayTriangle2()
    {
        let h = +document.getElementById("heightTriangle2").value;
        let str = "";
        for (let i = 1; i <= h; i++)
            {
                for (let j = 1; j <= 2*h+1; j++)
                    {
                        if (j >= h - (i-1) && j <= h + (i-1)) str += "*";
                        else str += "&nbsp&nbsp";
                    };
                str += "<br>";
            };
        document.getElementById("result_22").innerHTML = str;
    };

// TASK 2 - BÀI 3: VẼ TAM GIÁC CÂN RỖNG CÓ CHIỀU CAO H = 5 DO NGƯỜI DÙNG NHẬP VÀO
function displayTriangle3()
    {
        let h = +document.getElementById("heightTriangle3").value;
        let str = "";
        for (let i = 1; i <= h; i++)
            {
                for (let j = 1; j <= h+(i-1); j++)
                    {
                        if (i === h) str += "*";
                        else
                            {
                                if (j === h - (i-1) || j === h + (i-1)) str += "*";
                                else str += "&nbsp&nbsp";
                            };
                    };
                str += "<br>";
            };
        document.getElementById("result_23").innerHTML = str;
    };

// TASK 3 - BÀI 1:
function showPrefixSum()
    {
        let arrA = [];
        let arrB = [];
        let n = +prompt ("Nhập độ lớn của mảng A");
        
            for (let i = 0; i < n; i++)
                {
                    arrA[i] = +prompt ('Nhập giá trị của phần tử thứ ' + i);
                    if (i === 0) arrB[0] = arrA[0];
                    else arrB[i] = arrB[i-1] + arrA[i];
                };
        document.getElementById("result_311").innerText = "Mảng A là: [" + arrA.join("; ") + "]";
        document.getElementById("result_312").innerText = "Mảng B là: [" + arrB.join("; ") + "]";
    };

// TASK 3 - BÀI 2:
function showMissingValue()
    {
        let arrA = [];
        let arrB = [];
        let arrC = [];
        let nA = +prompt ("Nhập độ lớn của mảng A");
        let nB = +prompt ("Nhập độ lớn của mảng B");
        
        for (let i = 0; i < nA; i++)
            {
                arrA[i] = +prompt ("Nhập giá trị phần tử thứ " + i + " của mảng A");
            };

        for (let j = 0; j < nB; j++)
            {
                arrB[j] = +prompt ("Nhập giá trị phần tử thứ " + j + " của mảng B");
                if (!arrA.includes(arrB[j])) arrC.push(arrB[j]);
            };
        
        arrC.sort((a, b) => a - b);

        document.getElementById("result_321").innerText = "Mảng A là: [" + arrA.join("; ") + "]";
        document.getElementById("result_322").innerText = "Mảng B là: [" + arrB.join("; ") + "]";
        document.getElementById("result_323").innerText = "Mảng C là: [" + arrC.join("; ") + "]";
    };

// TASK 3 - BÀI 3:
function showIndex()
    {
        let numerators = [];
        let denominators = [];
        let fraction = [];
        let n = +prompt ("Nhập độ lớn của mảng");
        
        for (let i = 0; i < n; i++)
            {
                numerators[i] = +prompt ("Nhập giá trị tử số thứ " + i);
                denominators[i] = +prompt ("Nhập giá trị mẫu số thứ " + i);
                fraction[i] = numerators[i] / denominators[i];
            };
        let max = fraction[0];

        for (let j = 1; j < n; j++)
            {
                if (max < fraction[j]) max = fraction[j];
            };
        let t = fraction.indexOf(max);
        document.getElementById("result_33").innerText = "Vị trí của phân số lớn nhất là: " + t + ", có giá trị là: " + numerators[t] + "/" + denominators[t];
    };

// TASK 3 - BÀI 4:
let unitPrice = [15000, 20000, 25000, 22000, 10000, 30000];
let drinks = ['drink0', 'drink1', 'drink2', 'drink3', 'drink4', 'drink5']
let checkbox = document.getElementsByName("drink");
let value = 0;

function chooseDrink(ticked)
    {
        let index = drinks.indexOf(ticked);
        let q = +prompt ("Nhập số lượng");
        document.getElementById("unitPrice" + index).innerText = unitPrice[index];
        document.getElementById("quantity" + index).innerText = q;
        value += q * unitPrice[index];
    };
function displayMoney()
    {
        document.getElementById("result_34").innerText = "Tổng giá trị: " + value + "VND";
    };

// TASK 4 - BÀI 1:
function main()
    {
        let firstStr = prompt("Nhập vào một chuỗi");
        let lastStr = editStr(firstStr);
        let theLongest = findTheLongest(lastStr);

        document.getElementById("result_411").innerText = "Chuỗi ban đầu là: " + firstStr;
        document.getElementById("result_412").innerText = "Chuỗi sau khi chuẩn hóa là: " + lastStr;
        document.getElementById("result_413").innerText = "Từ dài nhất trong chuỗi là là: " + theLongest;
    };

function editStr(text)
    {
        let tempArr = text.split(" ");
        let i = 0;
        while (i < tempArr.length)
            {
                if (tempArr[i] === "")
                    {
                        tempArr.splice(i, 1);
                    }
                else i += 1;
            };

        for (i = 0; i < tempArr.length; i++)
            {
                tempArr[i] = tempArr[i].toLowerCase();
                tempArr[i] = tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1);
            };
        return tempArr.join(" ");
    };

function findTheLongest(text)
    {
        let tempArr = text.split(" ");
        let i = 0;
        let max = tempArr[0].length;
        let indexMax = 0;
        for (let i = 0; i < tempArr.length; i++)
            {
                if (max < tempArr[i].length)
                    {
                        max = tempArr[i].length;
                        indexMax = i;
                    };
            };
        return tempArr[indexMax];
    };

// TASK 4 - BÀI 2:
function showDifCharacters()
    {
        let str = prompt("Nhập vào một chuỗi ký tự");
        document.getElementById("result_421").innerHTML = "Chuỗi ban đầu là: " + str + "<br>" + "Chuỗi chỉ còn các ký tự khác nhau là: " + countDifCharacters(str);
        document.getElementById("result_422").innerText = "Số lượng ký tự khác nhau có trong chuỗi là: " + countDifCharacters(str).length;
    };

function countDifCharacters(text)
    {
        let i = 0;
        let w;
        while (i < text.length)
            {
                w = text.charAt(i);
                if (text.slice(i + 1).includes(w))
                    {
                        text = text.slice(0, i + 1) + text.slice(i + 1).split(w).join("");
                    };
                i += 1;
            };
        return text;
    };

// TASK 4 - BÀI 3:
function showInnerJoint()
    {
        let str1 = prompt ("Nhập chuỗi số 1");
        let str2 = prompt ("Nhập chuỗi số 2");
        document.getElementById("result_431").innerText = "Ký tự chung của 2 chuỗi: " + findInnerJoint(str1, str2).join(", ");
        document.getElementById("result_432").innerText = "Số ký tự chung là: " + findInnerJoint(str1, str2).length;
    };

function findInnerJoint(text1, text2)
    {
        let arr = [];
        let w;
        for (let i = 0; i < text1.length; i++)
            {
                w = text1.charAt(i);
                if (text2.includes(w)) arr.push(w);
            };
        return arr;
    };