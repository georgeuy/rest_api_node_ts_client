import { safeParse } from "valibot";
import { DraftProductSchema, Product, ProductSchema, ProductsSchema } from "../types";
import axios from "axios";


type ProductDataProps = {
    [k: string]: FormDataEntryValue
}

export async function addProduct(productData: ProductDataProps) {
    try {
        const validationResult = safeParse(DraftProductSchema,{
            ...productData, price: +productData.price
        })
        if(validationResult.success){
            const url = `${import.meta.env.VITE_API_URL}/api/v1/products`
            await axios.post(url, {
                name: validationResult.output.name,
                price: validationResult.output.price
            })
        }else{
            throw new Error('Datos inválidos')
        }
    } catch (error) {
        console.log(error);
    }
}


export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/v1/products`
        const { data } = await axios.get(url)
        const validationResult = safeParse(ProductsSchema, data.data)
        if(validationResult.success){
            return validationResult.output
        }else{
            throw new Error('Error al obtener la lista de productos')
        }
    } catch (error) {
        console.log(error);
    }
}


export async function getProductById(id:number) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/v1/products/${id}`
        const { data } = await axios.get(url)
        const validationResult = safeParse(ProductSchema, data.data)
        if(validationResult.success){
            return validationResult.output
        }else{
            throw new Error('Error al obtener la lista de productos')
        }
    } catch (error) {
        console.log(error);
    }
}


export async function updateProduct(data:ProductDataProps, id:Product['id']) {
    try {
        const validationResult = safeParse(ProductSchema,{
            id,
            name: data.name,
            price: +data.price,
            availability: data.availability.toString() === 'true' 
        })
        if(validationResult.success){
            const url = `${import.meta.env.VITE_API_URL}/api/v1/products/${id}`
            await axios.put(url, validationResult.output)
        }
    } catch (error) {
        console.log(error);
    }
}