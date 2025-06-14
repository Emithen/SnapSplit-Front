export const routerPath = {
    home: {
        description: "랜딩 페이지 직후 메인 홈 페이지입니다.",
        href:`/home`,
    },
    "create-trip": {
        description: "여행 생성 페이지입니다.",
        href:`/trip/createTrip`,
    },
    trip: {
        description: "여행 홈 페이지입니다.",
        href: (tripId: number | string) =>
            `/trip/${tripId}`,
    },
};
