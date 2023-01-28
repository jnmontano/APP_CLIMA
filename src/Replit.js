const store = () => {
  const products = []
  return {
    addProduct(product) {
      products.push(product)      
    },
    removeProduct(product) {
      products.splice(products.indexOf(product),1)
    },
    listProducts() {
      return products
    }
  }
}

//module.exports = { store };

const myStore = store();
myStore.addProduct("t-shirts");
myStore.addProduct("cookies");
myStore.addProduct("Shampoo");
console.log(myStore.listProducts())


const myStore1 = store();
myStore1.addProduct("phones");
myStore1.addProduct("cereal");
myStore1.removeProduct("phones");
myStore1.addProduct("flour");
myStore1.listProducts();
console.log(myStore1.listProducts())



