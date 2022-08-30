import Link from "next/link";

const styleProductContainer="grid cursor-pointer"
const styleImg="w-[394px]"
const styleCategory="font-eudoxusBold text-grey text-base md:text-lg pt-5 pb-3"
const styleProduct="font-eudoxusBold text-black text-[26px] pb-1.5"
const styleDescription="font-eudoxusMedium text-grey text-base md:text-lg pb-4"
const stylePrice="font-eudoxusBold text-black text-[24px]"

export default function ProductList () {
    return (
        <div className="grid grid-cols-3 content-center gap-20 2xl:gap-x-36 pt-5">
            <Link href="#!">
                <div className={styleProductContainer}>
                    <img 
                        src="/images/Products/Rectangle 23 (4).svg"
                        className={styleImg}
                    />
                    <h4 className={styleCategory}>
                        Chair
                    </h4>
                    <h3 className={styleProduct}>
                        White Aesthetic Chair
                    </h3>
                    <p className={styleDescription}>
                        Combination of wood and wool
                    </p>
                    <p className={stylePrice}>
                        $63.47
                    </p>
                </div>
            </Link>
            <Link href="#!">
                <div className={styleProductContainer}>
                    <img 
                        src="/images/Products/Rectangle 23 (5).svg"
                        className={styleImg}
                    />
                    <h4 className={styleCategory}>
                        Cupboard
                    </h4>
                    <h3 className={styleProduct}>
                        Wooden Cupboard 3 Row
                    </h3>
                    <p className={styleDescription}>
                        Combination of wood and wool
                    </p>
                    <p className={stylePrice}>
                        $79.88
                    </p>
                </div>
            </Link>
            <Link href="#!">
                <div className={styleProductContainer}>
                    <img 
                        src="/images/Products/Rectangle 23 (6).svg"
                        className={styleImg}
                    />
                    <h4 className={styleCategory}>
                        Chair
                    </h4>
                    <h3 className={styleProduct}>
                        Minimalist Lounge Chair
                    </h3>
                    <p className={styleDescription}>
                        Combination of wood and wool
                    </p>
                    <p className={stylePrice}>
                        $14.74
                    </p>
                </div>
            </Link>
            <Link href="#!">
                <div className={styleProductContainer}>
                    <img 
                        src="/images/Products/Rectangle 23 (7).svg"
                        className={styleImg}
                    />
                    <h4 className={styleCategory}>
                        Table
                    </h4>
                    <h3 className={styleProduct}>
                        Working Desk Setup
                    </h3>
                    <p className={styleDescription}>
                        Combination of wood and wool
                    </p>
                    <p className={stylePrice}>
                        $47.90
                    </p>
                </div>
            </Link>
            <Link href="#!">
                <div className={styleProductContainer}>
                    <img 
                        src="/images/Products/Rectangle 23 (8).svg"
                        className={styleImg}
                    />
                    <h4 className={styleCategory}>
                        Cupboard
                    </h4>
                    <h3 className={styleProduct}>
                        Minimalist White Cuppboard
                    </h3>
                    <p className={styleDescription}>
                        Combination of wood and wool
                    </p>
                    <p className={stylePrice}>
                        $40.73
                    </p>
                </div>
            </Link>
            <Link href="#!">
                <div className={styleProductContainer}>
                    <img 
                        src="/images/Products/Rectangle 23 (11).svg"
                        className={styleImg}
                    />
                    <h4 className={styleCategory}>
                        Table
                    </h4>
                    <h3 className={styleProduct}>
                        Wooden Dining Table
                    </h3>
                    <p className={styleDescription}>
                        Combination of wood and wool
                    </p>
                    <p className={stylePrice}>
                        $16.50
                    </p>
                </div>
            </Link>
        </div>
    )
}