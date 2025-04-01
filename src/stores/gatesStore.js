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

  const typesStorage = [
    {
      title: "Манифестор",
      image: "/images/manifestor-img.png",
      percentage: "9%",
      description:
        "От природы создан для инициативы, для того, чтобы запускать процессы и вовлекать в них других",
      route: "/base-of-knowledge/types/manifestor",
    },
    {
      title: "Генератор",
      image: "/images/generator-img.png",
      percentage: "36%",
      description:
        "Созидатель, предназначенный творить, получая удовлетворение от процесса",
      route: "/base-of-knowledge/types/generator",
    },
    {
      title: "Манифестирующий Генератор",
      image: "/images/manif-generator-img.png",
      percentage: "34%",
      description:
        "Созидатель, предназначенный скорее доводить активность до логического завершения",
      route: "/base-of-knowledge/types/manifesting-generator",
    },
    {
      title: "Проектор",
      image: "/images/projector-img.png",
      percentage: "20%",
      description:
        "От природы восприимчив, предназначен для распознания и направления других людей по корректному для их сути пути",
      route: "/base-of-knowledge/types/projector",
    },
    {
      title: "Рефлектор",
      image: "/images/reflector-img.png",
      percentage: "1%",
      description:
        "Человек - зеркало, отражающий в своём поведении ту среду, в которой находится",
      route: "/base-of-knowledge/types/reflector",
    },
  ];

  const profilesStorage = [
    {
      title: "1/3",
      semiTitle: "Исследователь/Мученик",
      images: "/images/1-3.png",
      route: "/base-of-knowledge/profiles/1-3",
      description:
        "Человек, который обретает уверенность, обучаясь на собственных ошибках. Экспериментатор и скептик.",
    },
    {
      title: "1/4",
      semiTitle: "Исследователь/Оппортунист",
      images: "/images/1-4.png",
      route: "/base-of-knowledge/profiles/1-4",
      description:
        "Человек, нуждающийся в верных и преданных друзьях, с которыми он может разделить свои увлечения, интересы и открытия.",
    },
    {
      title: "2/4",
      semiTitle: "Отшельник/Оппортунист",
      images: "/images/2-4.png",
      route: "/base-of-knowledge/profiles/2-4",
      description:
        "Человек, обладающий скрытым до поры до времени талантом. Бережно относится к своей частной жизни, в которой окружающие нередко видят больше, чем он хотел бы позволить.",
    },
    {
      title: "2/5",
      semiTitle: "Отшельник/Еретик",
      images: "/images/2-5.png",
      route: "/base-of-knowledge/profiles/2-5",
      description:
        "Человек, обладающий даром соблазнения других людей. Может удивлять нестандартным мышлением и взглядом на вещи и события.",
    },
    {
      title: "3/5",
      semiTitle: "Мученик/Еретик",
      images: "/images/3-5.png",
      route: "/base-of-knowledge/profiles/3-5",
      description:
        "Прирожденный бунтарь, экспериментатор. Эксперт в совершении ошибок и попаданию в разные (и не всегда приятные) ситуации.",
    },
    {
      title: "3/6",
      semiTitle: "Мученик/Ролевая Моддель",
      images: "/images/3-6.png",
      route: "/base-of-knowledge/profiles/3-6",
      description:
        "Человек, который здесь для того, чтобы направлять других. Приобретает мудрость через эксперименты и ошибки.",
    },
    {
      title: "4/1",
      semiTitle: "Оппортунист/Исследователь",
      images: "/images/4-1.png",
      route: "/base-of-knowledge/profiles/4-1",
      description:
        "Превосходный учитель, имеющий конкретную цель в жизни и «фиксированную» эволюционную задачу.",
    },
    {
      title: "4/6",
      semiTitle: "Оппортунист/Ролевая Моддель",
      images: "/images/4-6.png",
      route: "/base-of-knowledge/profiles/4-6",
      description:
        "Объективный свидетель. Использует свой опыт и искусство общения для того, чтобы учить других и влиять на них.",
    },
    {
      title: "5/1",
      semiTitle: "Еретик/Исследователь",
      images: "/images/5-1.png",
      route: "/base-of-knowledge/profiles/5-1",
      description:
        "Человек «для других». Способен давать практичные решения, быть полезным, показывать иную точку зрения на любой вопрос.",
    },
    {
      title: "5/2",
      semiTitle: "Еретик/Отшельник",
      images: "/images/5-2.png",
      route: "/base-of-knowledge/profiles/5-2",
      description:
        "Человек, к которому всегда предъявляются завышенные требования и ожидания.",
    },
    {
      title: "6/2",
      semiTitle: "Ролевая Модель/Отшельник",
      images: "/images/6-2.png",
      route: "/base-of-knowledge/profiles/6-2",
      description:
        "Человек, являющийся для других образцом для подражания, чему часто удивляется.",
    },
    {
      title: "6/3",
      semiTitle: "Ролевая Модель/Мученик",
      images: "/images/6-3.png",
      route: "/base-of-knowledge/profiles/6-3",
      description:
        "Неисправимый оптимист. Чаще чем другие люди сталкивается с жизненными вызовами, но справляется с ними лучше, чем обладатели других Профилей.",
    },
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
    centersNames,
    typesStorage,
    profilesStorage,
  };
});
