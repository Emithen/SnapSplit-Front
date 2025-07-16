import Calendar from "@/shared/components/Calendar"
import { useState } from "react"

const TripDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    
    return (
        <div className="flex flex-col items-center gap-5 ">
            {/* 떠나는 날 & 돌아오는 날 */}
            <div className="flex gap-2.5 w-full">
                <div className="flex-1 rounded-[12px] border-1 border-grey-250">
                    <div className="h-12 px-4 flex items-center text-body-2 text-grey-450">떠나는 날</div>
                </div>
                <div className="flex-1 rounded-[12px] border-1 border-grey-250">
                    <div className="h-12 px-4 flex items-center text-body-2 text-grey-450">돌아오는 날</div>
                </div>
            </div>

            {/* 날짜 선택 */}
            <div className="w-full border-1 border-grey-250 rounded-[12px]">
                <Calendar selectedDate={selectedDate || new Date()} setSelectedDate={setSelectedDate} />
            </div>
        </div>
    )
}

export default TripDatePicker
