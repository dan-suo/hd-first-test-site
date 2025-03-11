import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getHumanDesignData } from "@/services/astronomyService";

export const useRaveChartStore = defineStore("raveChartStore", () => {
  const blackGates = ref([]); // Чёрный (сознательный) дизайн
  const redGates = ref([]); // Красный (преднатальный) дизайн

  /**
   * Рассчитываем данные Дизайна Человека
   * @param {Date} date - Дата рождения
   */
  const calculateHumanDesign = (date) => {
    if (!date) return;

    // Чёрный расчёт (текущая дата)
    const blackData = getHumanDesignData(date);
    blackGates.value = blackData.map(({ gate }) => gate);

    // Красный расчёт (88 дней назад)
    const prenatalDate = new Date(date);
    prenatalDate.setDate(prenatalDate.getDate() - 88);
    const redData = getHumanDesignData(prenatalDate);
    redGates.value = redData.map(({ gate }) => gate);
  };

  return {
    blackGates,
    redGates,
    calculateHumanDesign,
  };
});