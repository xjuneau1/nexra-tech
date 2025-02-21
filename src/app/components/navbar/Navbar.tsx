export default function Navbar() {
    const links = ["Home", "About", "Services", "Contact", "FAQ"]
    return (
        <div className="col-span-2">
            <div className="flex p-8 bg-white">
                {links.map((link, index)=><div key={index}>{link}</div>)}
            </div>
        </div>
    )
}