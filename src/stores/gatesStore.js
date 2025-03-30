import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGatesStore = defineStore("gates", () => {
  const gatesHeadCenter = [
    { id: "64", title: "Замешательства" },
    { id: "63", title: "Сомнений" },
    { id: "61", title: "Внутренней Истины" },
  ];

  const gatesAjnaCenter = [
    { id: "47", title: "Осмысления" },
    { id: "24", title: "Рационализации" },
    { id: "4", title: "Формулизации" },
    { id: "17", title: "Мнений" },
    { id: "43", title: "Озарения" },
    { id: "11", title: "Идей" },
  ];

  const gatesThroatCenter = [
    { id: "62", title: "Деталей" },
    { id: "23", title: "Ассимиляции" },
    { id: "56", title: "Стимуляции" },
    { id: "16", title: "Навыков" },
    { id: "20", title: "Настоящего" },
    { id: "8", title: "Содействия" },
    { id: "31", title: "Лидерства" },
    { id: "33", title: "Уединения" },
    { id: "35", title: "Перемен" },
    { id: "12", title: "Осторожности" },
    { id: "45", title: "Собственности" },
  ];

  const gatesGCenter = [
    { id: "10", title: "Собственного поведения" },
    { id: "25", title: "Духа Самости" },
    { id: "46", title: "Собственной Решимости" },
    { id: "15", title: "Крайностей" },
    { id: "2", title: "Высшего Знания" },
    { id: "7", title: "Собственной Роли" },
    { id: "1", title: "Творчества" },
    { id: "13", title: "Слушателя" },
  ];

  const gatesEgoCenter = [
    { id: "26", title: "Эгоиста" },
    { id: "51", title: "Шока" },
    { id: "21", title: "Охотника" },
    { id: "40", title: "Одиночества" },
  ];

  const gatesSolarPlexusCenter = [
    { id: "6", title: "Конфликта" },
    { id: "37", title: "Дружбы" },
    { id: "22", title: "Открытости" },
    { id: "36", title: "Кризиса" },
    { id: "30", title: "Распознавания" },
    { id: "55", title: "Духа" },
    { id: "49", title: "Принципов" },
  ];

  const gatesSacralCenter = [
    { id: "59", title: "Сексуальности" },
    { id: "9", title: "Фокусирования" },
    { id: "3", title: "Упорядочивания" },
    { id: "42", title: "Роста" },
    { id: "34", title: "Силы" },
    { id: "29", title: "Согласия" },
    { id: "5", title: "Фиксированных Ритмов" },
    { id: "14", title: "Компетентности" },
  ];

  const gatesSplenicCenter = [
    { id: "48", title: "Глубины" },
    { id: "57", title: "Интуиции" },
    { id: "44", title: "Бдительности" },
    { id: "50", title: "Ценностей" },
    { id: "32", title: "Непрерывности" },
    { id: "28", title: "Игрока" },
    { id: "18", title: "Корректировки" },
  ];

  const gatesRootCenter = [
    { id: "54", title: "Амбиций" },
    { id: "38", title: "Борьбы" },
    { id: "58", title: "Жизненности" },
    { id: "53", title: "Начал" },
    { id: "60", title: "Принятия Ограничений" },
    { id: "52", title: "Недеяния" },
    { id: "19", title: "Потребностей" },
    { id: "39", title: "Провокации" },
  ];

  const centersNames = [
    { title: "Теменной центр", gates: gatesHeadCenter },
    { title: "Аджна центр", gates: gatesAjnaCenter },
    { title: "Горловой центр", gates: gatesThroatCenter },
    { title: "Джи центр", gates: gatesGCenter },
    { title: "Эго центр", gates: gatesEgoCenter },
    { title: "Центр Солнечного Сплетения", gates: gatesSolarPlexusCenter },
    { title: "Сакральный центр", gates: gatesSacralCenter },
    { title: "Селезёночнй центр", gates: gatesSplenicCenter },
    { title: "Корневой центр", gates: gatesRootCenter }, 
  ];

  return {
    gatesHeadCenter,
    gatesAjnaCenter,
    gatesThroatCenter,
    gatesGCenter,
    gatesEgoCenter,
    gatesSolarPlexusCenter,
    gatesSacralCenter,
    gatesSplenicCenter,
    gatesRootCenter,
    centersNames
  };
});
