import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constants";
import { getCurrentUser } from "@/lib/session";

import AuthProviders from "./AuthProviders";

const Navbar = async () => {
  const session = await getCurrentUser();
  debugger;
  return (
    <nav className="flexBetween navvar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={180} height={53} alt="Fleximind" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks?.map((link) => (
            <Link href={link?.href} key={link?.key}>
              {link?.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                width={40}
                height={40}
                className="rounded-full"
                alt="user"
              />
            )}
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
