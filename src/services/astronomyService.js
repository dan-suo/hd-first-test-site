import {
  Equator,
  EclipticLongitude,
  SearchMoonNode,
  Observer,
} from "astronomy-engine";

const observer = new Observer(0, 0, 0);

const celestialBodies = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

// 📌 Порядок ворот (с 41-х по кругу против часовой стрелки)
const gateOrder = [
  41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3, 27, 24, 2, 23,
  8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56, 31, 33, 7, 4, 29, 59, 40, 64,
  47, 6, 46, 18, 48, 57, 32, 50, 28, 44, 1, 43, 14, 34, 9, 5, 26, 11, 10, 58,
  38, 54, 61, 60,
];

// 📌 Смещение для совмещения астрологических градусов с мандалой ДЧ
const DEGREE_SHIFT = 56;

const NODES_SHIFT = 26;

/**
 * 🔥 Функция для перевода градуса в ворота и линию
 */
function getGateByDegree(degree) {
  if (degree === null || degree === undefined) {
    console.error("❌ Ошибка: передан null/undefined в getGateByDegree");
    return { gate: null, line: null };
  }

  let adjustedDegree = (degree + DEGREE_SHIFT) % 360;
  let gateIndex = Math.floor(adjustedDegree / 5.625);
  let gate = gateOrder[gateIndex];

  let lineIndex = Math.floor((adjustedDegree % 5.625) / 0.9375) + 1;
  return { gate, line: lineIndex };
}

/**
 * Функция для получения градусов всех тел (включая Узлы)
 */
export function getPlanetaryPositions(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    console.error("❌ Ошибка: передана некорректная дата!", date);
    return [];
  }

  let positions = celestialBodies.map((body) => {
    try {
      const position = Equator(body, date, observer, true, true);
      if (!position) throw new Error(`❌ ${body} не рассчитана`);

      return {
        planet: body,
        degree: (position.ra * 15) % 360,
      };
    } catch (error) {
      console.error("❌ Ошибка в Equator:", error.message);
      return { planet: body, degree: null };
    }
  });

  const moonPositionCorrection = positions.find((p) => p.planet === "Moon");
  if (moonPositionCorrection && moonPositionCorrection.degree !== null) {
    positions[1].degree = positions[1].degree + 4;
  }

  const merkyrionPositionCorrection = positions.find(
    (p) => p.planet === "Mercury"
  );
  if (
    merkyrionPositionCorrection &&
    merkyrionPositionCorrection.degree !== null
  ) {
    positions[2].degree = positions[2].degree - 0.5;
  }

  const venusPositionCorrection = positions.find((p) => p.planet === "Venus");
  if (venusPositionCorrection && venusPositionCorrection.degree !== null) {
    positions[3].degree = positions[3].degree + 1;
  }

  //const marsPositionCorrection = positions.find((p) => p.planet === "Mars");
  //if (marsPositionCorrection && marsPositionCorrection.degree !== null) {
  //positions[4].degree = positions[4].degree - 0.5;
  //};

  const jupiterPositionCorrection = positions.find(
    (p) => p.planet === "Jupiter"
  );
  if (jupiterPositionCorrection && jupiterPositionCorrection.degree !== null) {
    positions[5].degree = positions[5].degree + 0.5;
  }

  const saturnPositionCorrection = positions.find((p) => p.planet === "Saturn");
  if (saturnPositionCorrection && saturnPositionCorrection.degree !== null) {
    positions[6].degree = positions[6].degree + 1;
  }

  const uranusPositionCorrection = positions.find((p) => p.planet === "Uranus");
  if (uranusPositionCorrection && uranusPositionCorrection.degree !== null) {
    positions[7].degree = positions[7].degree - 3;
  }

  const neptunePositionCorrection = positions.find(
    (p) => p.planet === "Neptune"
  );
  if (neptunePositionCorrection && neptunePositionCorrection.degree !== null) {
    positions[8].degree = positions[8].degree - 3;
  }

  /*const plutoPositionCorrection = positions.find((p) => p.planet === "Pluto");
  if (plutoPositionCorrection && plutoPositionCorrection.degree !== null) {
    positions[9].degree = positions[9].degree - 0.5;
  };*/

  // ☀️ Земля = Солнце + 180°
  const sunData = positions.find((p) => p.planet === "Sun");
  if (sunData && sunData.degree !== null) {
    positions.push({
      planet: "Earth",
      degree: (sunData.degree + 180) % 360,
    });
  }

  // Лунные Узлы (Раху и Кету)
  try {
    const moonNodeEvent = SearchMoonNode(date);
    if (moonNodeEvent) {
      const rahuLongitude =
        EclipticLongitude("Moon", moonNodeEvent.time) + NODES_SHIFT;
      const ketuLongitude = (rahuLongitude + 180) % 360;

      positions.push({ planet: "Rahu", degree: rahuLongitude });
      positions.push({ planet: "Ketu", degree: ketuLongitude });
    } else {
      console.warn("⚠️ Не удалось рассчитать Лунные узлы!");
    }
  } catch (error) {
    console.error("❌ Ошибка в расчёте Лунных узлов:", error);
  }

  return positions;
}

/**
 * Функция для получения данных в формате ДЧ (градус → ворота + линия)
 */
export function getHumanDesignData(date) {
  console.log("🚀 Запущен getHumanDesignData, дата:", date);

  const positions = getPlanetaryPositions(date);
  if (!positions.length) {
    console.error("❌ Ошибка: позиции пусты");
    return [];
  }

  return positions.map(({ planet, degree }) => {
    const { gate, line } = getGateByDegree(degree);
    return { planet, degree: degree?.toFixed(2) || "N/A", gate, line };
  });
}

export function getRedHumanDesignData(date) {
  const redDate = new Date(date);
  redDate.setDate(redDate.getDate() - 87); // Сдвиг на 88 дней назад

  console.log(
    "🔥 Запущен getRedHumanDesignData (красные значения), дата:",
    redDate
  );

  return getHumanDesignData(redDate);
}
