class ProductManager {
    constructor() {
        this.products = [];

    }
    addProduct(title, description, price, thumbnail, code, stock) {
        title,
            description,
            price = 200,
            thumbnail,
            code = this.generarId,
            stock = 25

    }
    generarId() {
        let id = 0;

        if (this.products.length === 0) {
            id = 1;
        } else {
            id = this.products[this.eventos.length - 1].id + 1;
        }

        return id;
    }




    getProducts = () => this.products;

    getProductById(eventoID, productoID) {
        const evento = this.eventos.findIndex((evento) => evento.id === eventoID);
        if (evento === -1) {
            console.log("producto no exite");
        }

        const producto = this.eventos[evento].products.includes(productoID);
        if (producto) {
            console.log("producto existente");
        } else {

            return this.eventos[evento].products.push(productoID);

        }


    }
}


const prodMgr = new ProductManager()

const result = getProducts()

console.log(result)

