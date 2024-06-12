import { Product, ProductWithBackground } from "../../../types/page";
import Image from "next/image";

const ProductsPage = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=8');
  const products: Product[] = await res.json();

  const backgrounds = [
    'bg-red-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-yellow-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-gray-200',
    'bg-orange-100',
    'bg-teal-100',
    'bg-indigo-100',
  ];

  const productsWithBackground: ProductWithBackground[] = products.map((product, index) => ({
    product,
    background: backgrounds[index % backgrounds.length],
  }));

  return (
    <div>
      <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-0 w-full min-h-[526px] max-md:max-w-full">
        <Image
          loading="lazy"
          src="/bg3.png"
          alt="Image1"
          layout="fill"
          objectFit="cover"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center items-start px-4 py-12 md:px-16 md:py-20 w-full bg-neutral-800 bg-opacity-50">
          <div className="flex flex-col mt-10 mb-6 md:mt-15 md:mb-9 ml-4 md:ml-48 max-w-full w-full md:w-[657px]">
            <div className="font-bold text-white uppercase text-2xl md:text-4xl">
              <h1 className="text-3xl md:text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-white">
                PRODUCTS CATALOGUES
              </h1>
            </div>
            <div className="mt-6 md:mt-8 text-base md:text-xl leading-6 md:leading-7 text-neutral-200">
              Our high-end shirt manufacturing blends timeless craftsmanship with modern innovation,
              creating luxurious, bespoke shirts for the discerning client. Each garment is meticulously tailored
              from the finest materials, ensuring unparalleled quality and comfort. 
              Our commitment to excellence is reflected in every stitch, offering both elegance and durability. 
              Experience the pinnacle of sartorial sophistication with our exclusive collection.
            </div>
          </div>
        </div>
      </div>
      <h1 className="flex w-full item-center justify-center font-bold text-3xl text-neutral-800">Products</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsWithBackground.map(({ product, background }) => (
          <div key={product.id} className={`flex flex-col ${background} p-4`}>
            <div className="px-5 mt-12 w-full ml-auto mr-auto justify-center items-center max-w-[1422px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col items-center justify-start w-full h-full transform hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col items-center pt-0 shadow-lg bg-neutral-100 w-100 h-170">
                    <div className="w-full h-100 overflow-hidden">
                      <Image
                        loading="lazy"
                        src={product.image}
                        alt={product.title}
                        width={288}
                        height={256}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col px-7 py-5 mt-3 w-full bg-white max-md:px-5">
                      <div className="text-sm font-semibold text-stone-950">
                        {product.title}
                      </div>
                      <div className="flex gap-5 self-center mt-3">
                        <div className="text-lg font-semibold text-stone-950">
                          US$ {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
