import Image from "next/image"
import Link from "next/link"

export default function TopNavBar() {
    return (
        <nav className="flex justify-between w-11/12 mt-2 mb-10 p-3 rounded-full bg-gray-500/25">
            <Link href="/">
                <Image 
                    src='/logo.svg'
                    width={500}
                    height={500}
                    alt="logo MyCarTeam"
                    className="w-32" 
                    priority         
                />
            </Link>

            <div className="flex items-center">
                <div className="mr-4">Prix</div>
                <Link href="/register">
                    <button className="bg-mainColor p-2 rounded-full text-black">Essayer gratuitement</button>
                </Link>
            </div>
        </nav>
    )
}