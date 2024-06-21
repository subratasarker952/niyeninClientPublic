import useRole from "../../hooks/useRole";

const Footer = () => {
  const { userWithRole } = useRole();
  return (
    <div>
      {userWithRole.role !== "admin" && (
        <footer className="print:hidden footer p-10 bg-base-200 text-base-content">
          <div className="md:flex justify-between w-full">
            <p className="text-3xl text-pink-500">NiyeNin</p>
            <div className="text-left">
              <p>A Online Shop</p>
              <p>All right resorved by subrata sarker</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
