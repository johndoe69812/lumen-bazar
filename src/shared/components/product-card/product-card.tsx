import ProductCardGallery from "./product-card-gallery";
import { IoHeartOutline } from "@react-icons/all-files/io5/IoHeartOutline";
import { IoHeartSharp } from "@react-icons/all-files/io5/IoHeartSharp";
import clsx from "clsx";
import { Props } from "./types";

const ProductCard = (props: Props) => {
  const {
    title,
    price,
    address,
    date,
    images,
    isFavorite = false,
    disableRoundImage = false,
    className,
    ...rest
  } = props;

  return (
    <div
      className={clsx(
        "p-2 transition duration-300 hover:bg-gray-100 cursor-pointer",
        !disableRoundImage && "rounded-lg",
        className
      )}
      {...rest}
    >
      <div
        className={clsx(
          "w-fulloverflow-hidden",
          !disableRoundImage && "rounded-lg"
        )}
      >
        <ProductCardGallery images={images} />
      </div>
      <div className="flex flex-col mt-2 gap-0.5">
        <div className="break-words flex flex-row items-start justify-between">
          <h3>{title}</h3>
          <button
            className={clsx(
              "text-blue-500 hover:text-red-500 leading-6 text-2xl transition-transform hover:scale-110",
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
