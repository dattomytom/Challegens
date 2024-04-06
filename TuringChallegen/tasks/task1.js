var fs = require('node:fs');

//console.log(processTask1(0))
console.log(processTask1(4))
//console.log(JSON.stringify(processTask1(2)))
//console.log(JSON.parse(JSON.stringify(processTask1(0))))
 function processTask1 (productId) {
    // if(productId ==0){
    //     console.log("no la 0")
    //     return null
    // }
    // return productId
    var products = JSON.parse(fs.readFileSync('data/task1/products.json'));
    var images = JSON.parse(fs.readFileSync('data/task1/images.json'));
    var customers = JSON.parse(fs.readFileSync('data/task1/customers.json'));
    var reviews = JSON.parse(fs.readFileSync('data/task1/reviews.json'));
   if(productId <= 0 | !Number.isInteger(productId)){
    throw  new TypeError("ProductIdInvalia");
   }
   var findProduct = products.products.find(p => p.id == productId);

   if(findProduct == null || findProduct == 'undefined'){
    throw new Error("ProductIdNotFound")
   } 
    let review = getReviews(findProduct.id,reviews.reviews, customers.customers, images.images);
    return {
        id:findProduct.id,
        name:findProduct.name,
        reviews:review
    }
}
function getReviews(productId, reviews, customers,images){
    var result= [];
    reviews.map( x =>{
       if(x.product_id == productId){
        let myReview = {
            id:x.id,
            message: x.message,
            rating : x.rating,
            created_at:x.created_at
        }
        myReview.customers = getCustomer(x.customer_id,customers)
        myReview.images = getImages(x.images,images)
        result.push(myReview)
       }
    })
    //sort data
    result.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
    return result;
}
function getCustomer(customId,customers){
    let customer = customers.find(c => c.id == customId)
    return {
        id: customer.id,
        name:customer.name,
        email: customer.email,
        phone: btoa(customer.phone_number)
    }
}
function getImages(ids, images){
  var result = [];
  ids.map(id =>{
    images.map(i =>{
        if(i.id == id) {
            result.push(i)
        }
      });
  });
return result;
}
