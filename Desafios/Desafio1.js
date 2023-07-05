class ProductManager {
    #products = [];

    constructor() {
        this.title = '';
        this.description = '';
        this.price = '';
        this.thumbnail = '';
        this.code = '';
        this.stock = '';
    }

    gerateId() {
        let id = this.#products.length + 1;
        
        while (this.#products.some(product => product.id === id)) {
            id++;
        }

        return id;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('all values are required');
            return;
        }
        
        const validateCode = this.#products.find(product => product.code === code);

        if (validateCode) {
            console.log(`Ya existe el code: ${code}`);
            return;
        }

        const product = {
            id: this.gerateId(),
            title,
            description,
            price,
            thumbnail,
            code, 
            stock
        };

        this.#products.push(product);
        return product;
    }

    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        const findProduct = this.#products.find(product => product.id === id);
        if (!findProduct) {
            console.log('Not found');
            return;
        }
        
        return findProduct;
    }
}
const instance = new ProductManager();

instance.addProduct('Cuadro1', 'Cuadro De madera', '1500', 'link', '1', '100');
instance.addProduct('Cuadro2', 'Cuadro De madera y vidrio', '2500', 'link2', '2', '130');
instance.addProduct('Cuadro3', 'Cuadro De madera sin vidrio', '2000', 'link3', '3', '150');
// error
instance.addProduct('Cuadro3', 'Cuadro De madera sin vidrio', '2000', 'link3', '3', '150');

console.log(instance.getProductById(2));
console.log(instance.getProducts());