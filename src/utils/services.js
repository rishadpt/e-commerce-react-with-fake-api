const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL)
export const HomeServices = {

    getproducts: () => {
        return new Promise((resolve, reject) => {
            fetch(`https://fakestoreapi.com/products?sort=desc&limit=10`)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })  // end of promise 
    },

    getProductbycategory: (category) => {
        return new Promise((resolve, reject) => {
            fetch( `https://fakestoreapi.com/products/category/${category}`)

                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                }) 
        })  // end of promise

        }
    }