import { useQuery } from '@tanstack/react-query'
import testAPI from '../TestUtils/Testapi'

const fetchCurrentLocation = (userLat, userLot) => {
    // 고정된 값으로 mapX와 mapY를 설정
    // const mapX = userLat;
    // const mapY = userLot;

    const mapX = 126.364195
    const mapY = 37.4594355

    return testAPI.get(`/KorService1/locationBasedList1`, {
        params: {
            mapX,
            mapY,
            numOfRows: 10 // 출력 개수 조정
        }
    })
}

export const CurrentQuery = (userLat, userLot) => {
    return useQuery({
        queryKey: ['currentBy-attraction'],
        queryFn: () => fetchCurrentLocation(userLat, userLot)
    })
}