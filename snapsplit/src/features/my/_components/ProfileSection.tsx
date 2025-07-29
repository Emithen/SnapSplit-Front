import Image from "next/image";

export default function ProfileSection() {
    return (
        <div className="flex flex-col items-center gap-2 pt-3 pb-10">
            <div className="relative">
                <div className="rounded-full w-22.5 h-22.5 overflow-hidden">
                    <Image src="/svg/photo-loading.svg" alt="profile" width={100} height={100} className="object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full overflow-hidden">
                    <Image src="/svg/edit-green.svg" alt="profile" width={100} height={100} className="object-cover" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <p className="text-head-0">이름</p>
                <p className="text-body-3 text-green">아이디</p>
            </div>
        </div>
    )
}