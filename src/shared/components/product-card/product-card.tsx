import ProductCardGallery from "./product-card-gallery";
import { IoHeartOutline } from "@react-icons/all-files/io5/IoHeartOutline";
import { IoHeartSharp } from "@react-icons/all-files/io5/IoHeartSharp";
import clsx from "clsx";

type Props = {
  title: string;
  images: string[];
  price: string;
  address: string;
  date: string;
  isFavorite?: boolean;
};

const ProductCard = (props: Props) => {
  const { title, price, address, date, images, isFavorite = false } = props;

  return (
    <div className="transition duration-300 rounded-lg hover:bg-gray-100 p-2 cursor-pointer ">
      <div className="rounded-lg w-full overflow-hidden">
        <ProductCardGallery images={images} />
      </div>
      <div className="flex flex-col mt-2 gap-0.5">
        <div className="break-words flex flex-row items-start justify-between ">
          <a
            className="font-semibold text-blue-500 hover:text-red-500 mr-4"
            href="#"
          >
            <h3>{title}</h3>
          </a>
          <button
            className={clsx(
              "text-blue-500 hover:text-red-500 leading-6 text-2xl",
              isFavorite && "text-red-500"
            )}
          >
            {!isFavorite ? <IoHeartOutline /> : <IoHeartSharp />}
          </button>
        </div>
        <div>
          <b>{price}</b>
        </div>
        <div className="text-neutral-500 font-regular">{address}</div>
        <div className="text-neutral-500 font-regular">{date}</div>
      </div>
    </div>
  );
};

export default ProductCard;
