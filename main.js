const products = [
    { 
        id: 1,
        name: 'Laptop', 
        price: 1200, 
        category: 'Electronics', 
        stock: 15 
    },
    { 
        id: 2,
        name: 'Smartphone',
        price: 800, 
        category: 'Electronics', 
        stock: 30 
    },
    { 
        id: 3,
        name: 'Table',
        price: 150, 
        category: 'Furniture', 
        stock: 10 
    },
    { 
        id: 4,
        name: 'Chair', 
        price: 75, 
        category: 'Furniture', 
        stock: 50 
    },
    { 
        id: 5,
        name: 'Watch',
        price: 200, 
        category: 'Accessories', 
        stock: 20 
    },
    { 
        id: 6,
        name: 'Headphones',
        price: 120, 
        category: 'Electronics', 
        stock: 40 
    },
    { 
        id: 7,
        name: 'Desk', 
        price: 300, 
        category: 'Furniture', 
        stock: 5 
    },
    { 
        id: 8,
        name: 'Sunglasses',
        price: 150, 
        category: 'Accessories', 
        stock: 25 
    }
  ];

// 6 create a new array having all the old key values except id and add totalValue

const newProduct=products.map(
    (product)=>{
       return {
        ...product,
        totalvalue:product.price*product.stock
       }
    }
)
newProduct.forEach(
    (product)=> delete product.id
)


console.log(newProduct)


// Spread Operator:it is the operator which is used to add two or more array and objects in the new arrray and  object
let num1=[12,14,15,126,56];
let num2=[22,23,24,25,26];
// console.log(num1,num2)
// let n=num1+num2;
// console.log(n);
// spread operator
let newNum=[...num1,...num2];
console.log(newNum)
// console.log(...num1,...num2)

