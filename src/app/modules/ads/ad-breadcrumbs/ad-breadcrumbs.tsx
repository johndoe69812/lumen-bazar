import Link from "@/shared/components/link";
import { IoChevronForward } from "@react-icons/all-files/io5/IoChevronForward";

type Props = {
  breadcrumbs: {
    slug: string;
    title: string;
    link: string;
  }[];
};

const AdBreadcrumbs = (props: Props) => {
  const { breadcrumbs } = props;

  return (
    <div className="flex items-center gap-1 mt-2 text-neutral-600">
      {breadcrumbs.map((category, index) => (
        <>
          <Link
            key={category.slug}
            className="text-medium"
            href={category.link}
          >
            {category.title}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <div className="h-full text-xs">
              <IoChevronForward />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default AdBreadcrumbs;
