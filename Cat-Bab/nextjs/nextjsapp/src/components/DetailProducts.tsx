import { getProductsById,ProductItem } from "@/API/api";
import { GetStaticProps} from "next";

interface DetailProps{
  product: ProductItem|null;
}

const DetailsProduct = ({product}:DetailProps) => {
  if (!product)
    {
      return <div>not found</div>
    }


  return (
   <main className="bg-white text w-screen h-screen flex justify-center items-center">
    <div className="flex flex-col space-y-2 shadow-2xl px-10 py-36 border border-solid border-black">
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>price:{product?.price}</p>
    </div>
   </main>
  )
}

export const getStaticProps: GetStaticProps<DetailProps> = async ({params}) => {
    const id = params?.id as string | undefined;
    if (!id) {
    throw new Error("missing id parameter")
    }
    const product = await getProductsById(id);

    return {
      props: {
        product
      },
      revalidate: 10
    };
}

export default DetailsProduct