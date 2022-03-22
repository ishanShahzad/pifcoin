import Image from "next/image"

export const CharityMarketImage = () =>{
    return(
        <figure className="w-[41%] h-[45.75rem] relative border border-white border-solid rounded-[10px]">
            <Image
                src="/assets/images/charitydetail-img.jpg"
                // width={548}
                // height={732}
                objectFit="cover"
                layout="fill"
                className="rounded-[10px]"
                alt=""
            />
            <i
                className={` text-base icon-heart absolute bg-pink text-white p-2.5 border border-[#C0B6B6] rounded-full bottom-4 right-4 `}
            ></i>
        </figure>
    )
}