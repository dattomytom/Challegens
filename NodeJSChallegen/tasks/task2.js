const fs= require('node:fs')

updateExpiryDatebyItemId(142,'12-03-1989');

function updateExpiryDatebyItemId(itemId, expiryDate){
    var products = JSON.parse(fs.readFileSync('data/task2/update_item_products.json'));
    var item = [];
    var product;
    products.products.map(p =>{
        let temp = p.items.find(i => i.item_id ==itemId)
        if(temp !=null || temp!= undefined){
            temp = {...temp,expiry_date:expiryDate} //update expridate
            item.push(temp);
            product = p;
        }
    })
    const valuex = {...product,items:item}
    console.log(product)
    console.log(item)
    console.log(valuex)
}