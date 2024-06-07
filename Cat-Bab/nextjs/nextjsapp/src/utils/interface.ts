export interface ProductCardProps{
    image:string,
    name:string,
    description:string,
    price:number,
    onDetailClick(): void,
}