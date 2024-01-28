import AuthModal from "@/modules/auth/auth-modal";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <AuthModal />
    </>
  );
};

export default RootTemplate;
