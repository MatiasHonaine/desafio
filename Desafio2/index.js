class ProductManager {
    constructor() {
        this.patch = "./productos.txt"
        this.productos = []
    }

    static id = 0

    addProduct = async (title, description, price, image, code, stock) => {


        ProductManager.id++

        let newProduct = {
            title,
            description,
            price,
            image,
            code,
            stock,
            id: ProductManager.id
        }


        this.productos.push(newProduct)

        await fs.writeFile(this.patch, JSON.stringify(this.productos))
    }


    readProducts = async () => {
        let respuesta = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    }


    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)
    }

    getProductsById = async (id) => {

        let respuesta3 = await this.readProducts()
        if (!respuesta3.find(productos => productos.id === id)) {
            console.log("producto no existe")
        } else {
            console.log(respuesta3.find(productos => productos.id === id))
        }


    }

    deleteProductsById = async (id) => {
        let respuesta3 = await this.readProducts()
        let productFilter = respuesta3.filter(productos => productos.id != id)

        await fs.writeFile(this.patch, JSON.stringify(productFilter))
        console.log("producto eliminado")
    }


    updateProductc = async ({ id, ...producto }) => {

        await this.deleteProductsById(id)
        let productOld = await this.readProducts()

        let productsModif = [
            { ...producto, id }, ...productOld]

        await fs.writeFile(this.patch, JSON.stringify(productsModif))

    }
}

const productos = new ProductManager

//productos.addProduct("Titulo1", "description1", 1000, "imagen1", "abcd1234", 5 )

//productos.getProducts()

//productos.getProductsById(4)

//productos.deleteProductsById(2)

productos.updateProductc({
    title: "titulo3",
    description: "description3",
    price: 4000,
    image: "imagen3",
    code: "asdf1224",
    stock: 15,
    id: 3


})