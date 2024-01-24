"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useLayoutEffect, useState } from "react";
import { ModalOverlay, ModalWindow } from "@/shared/components/modal";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

const AUTH_SEARCH_PARAM = "auth";

const AuthModal = () => {
  const searchParams = useSearchParams();
  const authType = searchParams.get(AUTH_SEARCH_PARAM);
  const pathname = usePathname();
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  useLayoutEffect(() => {
    const isOpened = authType === "sign-in" || authType === "sign-up";

    setIsOpened(isOpened);
  }, [authType]);

  const handleClose = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  if (!isOpened) {
    return null;
  }

  return (
    <ModalOverlay onClose={handleClose}>
      <ModalWindow size="sm" onClose={handleClose}>
        {authType === "sign-in" && <SignIn />}
        {authType === "sign-up" && <SignUp />}
      </ModalWindow>
    </ModalOverlay>
  );
};

export default AuthModal;
