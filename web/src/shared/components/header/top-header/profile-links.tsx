import { MdShoppingCart } from "@react-icons/all-files/md/MdShoppingCart";
import { MdNotifications } from "@react-icons/all-files/md/MdNotifications";
import { MdFavorite } from "@react-icons/all-files/md/MdFavorite";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import Link from "@/shared/components/link";

type Props = {
  isAuthenticated?: boolean;
};

const ProfileLinks = (props: Props) => {
  const { isAuthenticated = false } = props;

  const linkClassName =
    "transition text-white/50 hover:text-white/100 rounded-full hover:bg-blue-500 focus-visible:text-white/100 p-1";

  return (
    <div className="flex gap-2 text-xl">
      <Link className={linkClassName} href="#" title="Your favorite list">
        <MdFavorite />
      </Link>
      {isAuthenticated && (
        <>
          <Link className={linkClassName} href="#" title="Your notification">
            <MdNotifications />
          </Link>
          <Link className={linkClassName} href="#" title="Your messages">
            <MdEmail />
          </Link>
        </>
      )}

      <Link className={linkClassName} href="#" title="Your shopping cart">
        <MdShoppingCart />
      </Link>
    </div>
  );
};

export default ProfileLinks;
