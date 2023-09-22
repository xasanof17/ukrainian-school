import Link from "next/link";
import { MdEmail, MdFacebook, MdMap, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container my-20">
      <div className="grid grid-cols-2 gap-5">
        <ul className="flex flex-col space-y-2">
          <li>
            <Link
              className="flex items-center space-x-2 text-xl font-medium text-primary"
              href=""
            >
              <MdMap className="text-[25px]" />
              <p>Address will be here</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 text-xl font-medium text-primary"
              href="tel:+380239409203"
            >
              <MdPhone className="text-[25px]" />
              <p>+380239409203</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 text-xl font-medium text-primary"
              href="mailto:oleksij_borsovych@email.ua"
            >
              <MdEmail className="text-[25px]" />
              <p>oleksij_borsovych@email.ua</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 text-xl font-medium text-primary"
              href="https://facebook.com"
            >
              <MdFacebook className="text-[25px]" />
              <p>facebook</p>
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center">img</div>
      </div>
    </div>
  );
};

export default Contact;
