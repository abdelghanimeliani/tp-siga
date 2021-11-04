const dir = (lat1, long1, lat2, long2) => {
    let y = lat2 - lat1
    let x = long2 - long1

    if (Math.abs(y) < 22.5) {
        if (x > 0) {
            return "NORD"
        } else {
            return "SUD"
        }
    } else if (Math.abs(x) < 22.5) {
        if (y > 0) {
            return "EST"
        } else {
            return "OUEST"
        }
    }

}


const pythagore = (long1, lat1, long2, lat2, k) => {
    x = (long2 - long1) * Math.cos(((lat1 + lat2) / 2) * (Math.PI / 180))
    y = lat2 - lat1
    z = Math.sqrt(x * x + y * y)
    console.log("direction " + dir(long1, lat1, long2, lat2))

    return k * 60 * z / 1000 + "km"
}



console.log(pythagore(3.0601882, 36.7753606, 1.3149999, 34.87833, 1852))

const sinus = (long1, lat1, long2, lat2, rt = 6378.138) => {
    long1 = long1 * (Math.PI / 180)
    long2 = long2 * (Math.PI / 180)
    lat1 = lat1 * (Math.PI / 180)
    lat2 = lat2 * (Math.PI / 180)

    return (
        rt * Math.acos(
            Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1)
        ) + "km"
    )
}


console.log(sinus(3.0601882, 36.7753606, 1.3149999, 34.87833))


const hav = (long1, lat1, long2, lat2, rt = 6378.138) => {
    long1 = long1 * (Math.PI / 180)
    long2 = long2 * (Math.PI / 180)
    lat1 = lat1 * (Math.PI / 180)
    lat2 = lat2 * (Math.PI / 180)

    a = Math.sin((lat2 - lat1) / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin((long2 - long1) / 2) ** 2
    c = 2 * Math.atan(Math.sqrt(a) / Math.sqrt(1 - a))
    return rt * c + 'km'
}

console.log(hav(3.0601882, 36.7753606, 1.3149999, 34.87833))





class EarthPoint {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long
    }

    pythagore(point, k) {

        x = (long2 - long1) * Math.cos(((lat1 + lat2) / 2) * (Math.PI / 180))
        y = lat2 - lat1
        z = Math.sqrt(x * x + y * y)
        console.log("direction " + dir(long1, lat1, long2, lat2))

        return k * 60 * z / 1000 + "km"
    }


}