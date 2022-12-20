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

// TASK 2 - BÀI 2: VẼ TAM GIÁC CÂN RỖNG CÓ CHIỀU CAO H = 5 DO NGƯỜI DÙNG NHẬP VÀO
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
                    arrB[0] = arrA[0];
                    if (i > 0) arrB[i] = arrB[i-1] + arrA[i];
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