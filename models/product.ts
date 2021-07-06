export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id:any, name:any, description = '', price = 0, imageUrl ="https://pixnio.com/free-images/2017/10/08/2017-10-08-08-06-04.jpg") {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }