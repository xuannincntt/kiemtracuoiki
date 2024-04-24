var nds = document.getElementById("nd");
var signs = document.getElementById("sign");
var tks = document.getElementById("tkmoi");
var ds= document.getElementById('lienhe');
function ham(n){
    if(n == 1){
        signs.style.display = "block";
        tks.style.display = "none";
        nds.style.display = "none";
        ds.style.display = "none";
    }
    else if(n == 2){
        tks.style.display = "block";
        signs.style.display = "none";
        nds.style.display = "none";
        ds.style.display = "none";
    }
    else{
        nds.style.display = "block";
        tks.style.display = "none";
        signs.style.display = "none";
        ds.style.display = "block";
    }
}
const products= [
    {
        name: 'Vũ Xuân Nin',
        msv: 11225048,
        lop: 'Thiết kế web'
    }
];
let sp= document.createElement('div');//tạo thêm thẻ div
sp.innerHTML= `
    <img src="/img/Anhthe.jpg">
    <p id="h">- Họ và tên: ${products[0].name}</p>
    <p>- Mã sinh viên: ${products[0].msv}</p>
    <p>- Lớp học phần: ${products[0].lop}</p>
`;
ds.appendChild(sp);//Thêm các phần tử vào div sản phẩm