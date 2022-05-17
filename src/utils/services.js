const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL)
export const HomeServices = {

    getAllproduct: () => {
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
    getMenClothingCategories: () => {
        return new Promise((resolve, reject) => {
            fetch(`https://fakestoreapi.com/products/category/men's clothing`)
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