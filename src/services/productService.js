import axios from "axios"

export default class ProductService{
  getProduct(){
    return axios.get("http://localhost:5056/api/Products/getall")
  }
}
