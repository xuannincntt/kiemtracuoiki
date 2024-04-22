const products= [
    {
        name: 'Lenovo Legion 5',
        price: '27 triệu',
        description: 'Laptop'
    },
    {
        name: 'Lenovo Legion 5',
        price: '27 triệu',
        description: 'Laptop'
    },
    {
        name: 'Lenovo Legion 5',
        price: '27 triệu',
        description: 'Laptop'
    },
    {
        name: 'Lenovo Legion 5',
        price: '27 triệu',
        description: 'Laptop'
    }
];
const ds= document.getElementById('sanpham');
for (var i=0;i<products.length;i++){
    let sp= document.createElement('div');
    sp.innerHTML= `
        <p>Sản phẩm ${i+1}</p>
        <img src="/img/img.jpg">
        <p>- Name: ${products[i].name}</p>
        <p>- Price: ${products[i].price}</p>
        <p>- Description: ${products[i].description}</p>
    `;
    ds.appendChild(sp);
}