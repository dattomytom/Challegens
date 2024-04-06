const fs = require('node:fs')

let item ={
    item_id : 400,
    expiry_date : '12-03-1989'
}

addItemInProduct(4,item)
function addItemInProduct(productId, item){
    var products = JSON.parse(fs.readFileSync('data/task3/products.json'));
   // console.log(products)
    var expiry_date = new Date(item.expiry_date)
    var dateNow = Date();
    bool = expiry_date > dateNow
    boo1 = dateNow > expiry_date
    bool2 = expiry_date - dateNow
    boo13 = dateNow - expiry_date
    if(productId <=0) throw new Error("ProductIdValidation")
    let product = products.products.find(p => p.id == productId)
    if(!product) throw new Error("ProductionNotFoung");
    var itemCheck;
    products.products.map(p =>{
        if(p.items != undefined){
            p.items.map(i =>{
                if(i.item_id == item.item_id){
                    itemCheck = i;
                }
            })
        }
    })
    if(itemCheck !==undefined) throw new Error("itemAlreadyExits")
    let items = [];
    if(product.items != undefined){
        items = product.items;
    }
    items.push(item);
    items.sort((a,b) => a.item_id - b.item_id)
    let items_left = product.items_left + 1
    let result = {...product,items:items,items_left:items_left}
    return result;
    

}