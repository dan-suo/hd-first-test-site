import { julian, solar, planetposition } from "astronomia";

const observer = { lat: 51.5074, lon: -0.1278 };

const gateOrder = [
  41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3, 27, 24, 2, 23,
  8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56, 31, 33, 7, 4, 29, 59, 40, 64,
  47, 6, 46, 18, 48, 57, 32, 50, 28, 44, 1, 43, 14, 34, 9, 5, 26, 11, 10, 58,
  38, 54, 61, 60,
];

const DEGREE_SHIFT = 155.625;

export function getPlanetaryPositions(date) {
  const jd =
    julian.CalendarGregorianToJD(
      date.getFullYear(),
      date.getonth() + 1,
      date.getDate()
    ) +
    (date.getHours() + date.getMinutes() / 60) / 24;

  const sunLongitude = solar.apparentLongitude(jd);

  return {
    Sun: sunLongitude,
    Earth: (sunLongitude + 180) % 360,
    Moon: planetposition.moon(jd).lon,
    Mercury: planetposition.mercury(jd).lon,
    Venus: planetposition.venus(jd).lon,
    Mars: planetposition.mars(jd).lon,
    Jupiter: planetposition.jupiter(jd).lon,
    Saturn: planetposition.saturn(jd).lon,
    Uranus: planetposition.uranus(jd).lon,
    Neptune: planetposition.neptune(jd).lon,
    Pluto: planetposition.pluto(jd).lon,
    NorthNode: (planetposition.moon(jd).lon + 180) % 360,
    SouthNode: planetposition.moon(jd).lon,
  };
}

export function getGateByDegree(degree) {
  let adjustedDegree = (degree + DEGREE_SHIFT) % 360;
  let gateIndex = Math.floor(adjustedDegree / 5.625);
  let gate = gateOrder[gateIndex];

  let lineIndex = Math.floor((adjustedDegree % 5.625) / 0.9375) + 1;

  return { gate, line: lineIndex };
}

export function getHumanDesignData(date) {
  const positions = getPlanetaryPositions(date);

  return Object.entries(positions).map(([planet, degree]) => {
    const { gate, line } = getGateByDegree(degree);
    return { planet, degree: degree.toFixed(2), gate, line };
  });
}
