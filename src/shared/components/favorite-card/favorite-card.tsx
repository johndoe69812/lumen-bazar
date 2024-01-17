import { HTMLAttributes } from "react";
import { IoHeartSharp } from "@react-icons/all-files/io5/IoHeartSharp";
import Link from "../link";
import Button from "../button";

type Props = HTMLAttributes<HTMLDivElement> & {
  image: string;
  title: string;
  link: string;
  price?: string;
};

const FavoriteCard = (props: Props) => {
  const { image, title, link, price } = props;

  return (
    <div className="group relative w-full py-2 text-sm">
      <div className="flex gap-2">
        <div className="w-1/4">
          <img src={image} className="w-full" />
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href={link}
            className="font-semibold text-blue-400 group-hover:text-red-500"
          >
            {title}
          </Link>
          <div className="font-semibold">{price}</div>
        </div>
        <Button className="absolute right-2 top-2 text-lg text-red-500">
          <IoHeartSharp />
        </Button>
      </div>
    </div>
  );
};

export default FavoriteCard;
