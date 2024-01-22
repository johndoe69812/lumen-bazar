import Link from "@/shared/components/link";
import Button from "@/shared/components/button";
import Container from "@/shared/components/container";
import ProfileLinks from "./profile-links";

const TopHeader = () => {
  return (
    <div className="w-full h-10 bg-neutral-800 text-white">
      <Container>
        <div className="w-full h-10 flex items-center justify-between">
          <div></div>
          <div className="flex justify-self-end items-center gap-6">
            <ProfileLinks />
            <Link className="transition hover:text-red-500" href="/auth">
              Sign On
            </Link>
            <Button className="px-4 leading-8 rounded transition bg-blue-500 hover:bg-blue-600">
              Post your advertisement
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
