import Link from "@/shared/components/link";
import { IoChevronForward } from "@react-icons/all-files/io5/IoChevronForward";
import { FC, Fragment } from "react";

type Props = {
  breadcrumbs: {
    slug: string;
    title: string;
    link: string;
  }[];
};

const AdBreadcrumbs: FC<Props> = (props) => {
  const { breadcrumbs } = props;

  return (
    <div className="flex items-center gap-1 mt-2 text-neutral-600">
      {breadcrumbs.map((category, index) => (
        <Fragment key={category.slug}>
          <Link className="text-medium" href={category.link}>
            {category.title}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <div className="h-full text-xs">
              <IoChevronForward />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default AdBreadcrumbs;
