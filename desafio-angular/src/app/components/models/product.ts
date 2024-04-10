export class Product {
    public id!: number;
    public name: string;
    public description: string | null;
    public price: number;
    public categoryId: number | null;

    constructor(nome:string, price: number, description?: string, categoryId?: number) {
        this.name = nome;
        this.price = price;
        this.description = description || null;
        this.categoryId =categoryId || null;
    }
}