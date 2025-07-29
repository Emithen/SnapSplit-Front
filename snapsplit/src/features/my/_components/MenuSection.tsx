type MenuSectionProps = {
    onClickLogOut: () => void;
    onClickWithdraw: () => void;
}

export default function MenuSection({ onClickLogOut, onClickWithdraw }: MenuSectionProps) {
    return (
        <div className="flex flex-col w-full gap-8 px-4">
            {/* Account Menu */}
            <div className="flex flex-col gap-4 items-start">
                <p className="text-body-3 text-grey-550">내 계정</p>
                <button className="text-label-2 text-grey-1000" onClick={onClickLogOut}>로그아웃</button>
                <button className="text-label-2 text-grey-1000" onClick={onClickWithdraw}>회원탈퇴</button>
            </div>
            {/* Terms Menu */}
            <div className="flex flex-col gap-4 items-start">
                <p className="text-body-3 text-grey-550">약관</p>
                <button className="text-label-2 text-grey-1000">오픈소스 라이선스</button>
                <button className="text-label-2 text-grey-1000">이용약관</button>
                <button className="text-label-2 text-grey-1000">개인정보 처리방침</button>
            </div>
        </div>
    )
}