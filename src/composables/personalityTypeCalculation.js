export function usePersonalityTypeCalculation(blackGates, redGates) {
  const getDefinedChannels = () => {
    let activeChannels = [];
    Object.values(centerChannels).forEach((channels) => {
      channels.forEach(({ gate1, gate2 }) => {
        if (
          (blackGates.value.includes(gate1.toString()) ||
            redGates.value.includes(gate1.toString())) &&
          (blackGates.value.includes(gate2.toString()) ||
            redGates.value.includes(gate2.toString()))
        ) {
          activeChannels.push(`${gate1}-${gate2}`);
        }
      });
    });
    return activeChannels;
  };

  const getPersonalityType = (definedChannels) => {
    /* Тут я перечислю те каналы, определние которых делает
    человека типом Генератор */
    const sacralChannels = [
      "3-60",
      "9-52",
      "53-42",
      "27-50",
      "59-6",
      "5-15",
      "14-2",
      "29-46",
      "34-10",
      "34-57",
    ];
    /* Тут я назову переменную прямыми каналами МГ, но на деле
    они являются таковыми только в связке с определённым сакральным
    каналом, либо если это прямо 34-20 */
    const mgDirectChannels = ["34-20", "22-12", "36-35", "21-45"];
    /* Тут я постараюсь учесть все комбинированные варианты каналов,
    которые делают человека типом МГ с учётом определённого сакрала */
    const complexMgChannels = [
      ["58-18", "48-16"],
      ["58-18", "57-20"],
      ["38-28", "48-16"],
      ["38-28", "57-20"],
      ["54-32", "48-16"],
      ["54-32", "57-20"],
      ["51-25", "7-31"],
      ["51-25", "1-8"],
      ["51-25", "13-33"],
    ];
    /* А тут комплексные варианты с сакральными каналами */
    const mgSacralCombos = [
      ["34-10", "7-31"],
      ["34-10", "1-8"],
      ["34-10", "13-33"],
      ["5-15", "7-31"],
      ["5-15", "1-8"],
      ["5-15", "13-33"],
      ["14-2", "7-31"],
      ["14-2", "1-8"],
      ["14-2", "13-33"],
      ["29-46", "7-31"],
      ["29-46", "1-8"],
      ["29-46", "13-33"],
    ];
    /* Каналы для определения прямой манифестации */
    const manifestorChannels = ["21-45", "22-12", "36-35"];
    /* Проверяем есть ли в расчёте определённый сакральный
    канал из списка */
    const hasSacralChannels = definedChannels.some(channel =>
      sacralChannels.includes(channel)
    );
    /* Делаем первую условную проверку на то, какой тип вернёт функция
    Генератор или МГ */
    if (hasSacralChannels) {
      const isMG =
        definedChannels.some(channel => mgDirectChannels.includes(channel)) ||
        mgSacralCombos.some(combo =>
          combo.every(channel => definedChannels.includes(channel))
        ) ||
        complexMgChannels.some(combo =>
          combo.every(channel => definedChannels.includes(channel))
        );
  
      return isMG ? "Манифестирующий Генератор" : "Генератор";
    }
    /* Делаем проверку на оставшиеся типы личности */
    if (
      definedChannels.some(channel => manifestorChannels.includes(channel)) ||
      complexMgChannels.some(combo =>
        combo.every(channel => definedChannels.includes(channel))
      )
    ) {
      return "Манифестор";
    }
    return definedChannels.length > 0 ? "Проектор" : "Рефлектор";
  };
  return { getDefinedChannels, getPersonalityType };
}
