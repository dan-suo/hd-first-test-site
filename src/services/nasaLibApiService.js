import axios from "axios";

const API_URL =
  process.env.VUE_APP_API_URL || "http://localhost:5000/api/astro";

/**
 * 📌 Запрашивает астрологические данные у сервера
 * @param {Date} date - Дата рождения
 * @returns {Promise<Array>} - Массив объектов { planet, degree, gate, line }
 */
export async function getHumanDesignData(date) {
  try {
    const requestData = {
      date: {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1, // JS-месяцы с 0
        day: date.getUTCDate(),
        hours: date.getUTCHours(),
        minutes: date.getUTCMinutes(),
      },
    };

    console.log("📡 Отправляем запрос:", requestData);
    const response = await axios.post(API_URL, requestData);

    if (!response.data || !Array.isArray(response.data)) {
      console.error("❌ Ошибка: ответ сервера не массив!", response.data);
      return [];
    }

    console.log("✅ Полученные данные:", response.data);

    return response.data.map(({ planet, degree }) => {
      if (degree === null || isNaN(parseFloat(degree))) {
        console.warn(`❌ Некорректные данные для ${planet}: degree =`, degree);
        return { planet, degree: "N/A", gate: null, line: null };
      }

      return {
        planet,
        degree: parseFloat(degree).toFixed(2), // ✅ Приводим к числу и округляем
        ...getGateByDegree(parseFloat(degree)), // ✅ Теперь передаём корректные данные
      };
    });
  } catch (error) {
    console.error("❌ Ошибка API:", error);
    return [];
  }
}

/**
 * 📌 Получает данные до рождения (за 87 дней)
 * @param {Date} date - Дата рождения
 * @returns {Promise<Array>}
 */
export async function getRedHumanDesignData(date) {
  try {
    const redDate = new Date(date);
    redDate.setDate(redDate.getDate() - 87);
    redDate.setHours(redDate.getHours() - 14);
    redDate.setMinutes(redDate.getMinutes() - 27);

    console.log("🔥 getRedHumanDesignData, дата:", redDate);
    return await getHumanDesignData(redDate);
  } catch (error) {
    console.error("❌ Ошибка в getRedHumanDesignData:", error);
    return [];
  }
}

/**
 * 📌 Конвертирует градус в ворота и линию
 */
const gateOrder = [
  41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3, 27, 24, 2, 23,
  8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56, 31, 33, 7, 4, 29, 59, 40, 64,
  47, 6, 46, 18, 48, 57, 32, 50, 28, 44, 1, 43, 14, 34, 9, 5, 26, 11, 10, 58,
  38, 54, 61, 60,
];

const DEGREE_SHIFT = 58.2;
const RED_DEGREE_SHIFT = 10;

export function getGateByDegree(degree, isRed = false) {
  if (degree == null || isNaN(degree)) return { gate: null, line: null };

  let adjustedDegree = ((degree + DEGREE_SHIFT) + (isRed ? RED_DEGREE_SHIFT : 0)) % 360;
  let gateIndex = Math.floor(adjustedDegree / 5.625);
  let lineIndex = Math.floor((adjustedDegree % 5.625) / 0.9375) + 1;

  return { gate: gateOrder[gateIndex], line: lineIndex };
}
