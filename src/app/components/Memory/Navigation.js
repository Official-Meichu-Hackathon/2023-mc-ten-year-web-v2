import Link from "next/link";

export default function Nav({ links }) {
    return (
        <nav>
            <ul className="navbar-nav flex justify-start gap-x-6">
                {links.map((link, index) => (
                    <li key={index} className="text-center">
                        <Link
                            href={link[1]}
                            className="nav-link max-w-fit hover:after:opacity-100 text-sm text-primary">
                            {link[0]}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}