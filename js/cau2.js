const products= [
    {
        name: 'Lenovo Legion 5',
        price: '27 triệu',
        description: 'Laptop'
    },
    {
        name: 'Lenovo LOQ',
        price: '20 triệu',
        description: 'Laptop'
    },
    {
        name: 'Iphone 15',
        price: '30 triệu',
        description: 'Phone'
    },
    {
        name: 'Astrox 88s Pro',
        price: '3.5 triệu',
        description: 'Racket'
    }
];
const ds= document.getElementById('sanpham');
for (var i=0;i<products.length;i++){
    let sp= document.createElement('div');//tạo thêm thẻ div
    sp.innerHTML= `
        <p>Sản phẩm ${i+1}</p>
        <img src="/img/img.jpg">
        <p>- Name: ${products[i].name}</p>
        <p>- Price: ${products[i].price}</p>
        <p>- Description: ${products[i].description}</p>
    `;
    ds.appendChild(sp);//Thêm các phần tử vào div sản phẩm
}