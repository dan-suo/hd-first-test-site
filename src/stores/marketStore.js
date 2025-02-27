import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMarketStore = defineStore("market", () => {
  const products = ref([
    {
      title: "Разбор по ДЧ",
      description:
        "Подробный и полноценный анализ твоей рейв-карты, не только в текстовом виде, но и голосовом, специально для тебя записанными мной сообщениями.",
      price: 3500,
      image: "hd-market-img.jpg",
      id: 1,
    },
    {
      title: "Разбор по Генным Ключам",
      description:
        "Разбираем твой хологенетический профиль, анализируя все три последовательности, тени и дары каждой позиции. Текст + голос.",
      price: 3500,
      image: "gen-keys-market-img.jpg",
      id: 2
    },
    {
      title: "Разбор Совместимости по ДЧ",
      description:
        "Разбираем композит, как устроена механика взаимодействия двух человек, какие отношения подходят, какие есть подводные камни т другое.",
      price: 3500,
      image: "hd-composite-market-img.jpg",
      id: 3
    },
  ]);

  const cart = ref([]);

  const addToCart = (product) => {
    const item = cart.value.find((p) => p.id === product.id);
    if (item) {
      item.quantity++;
      item.price += product.price;
    } else {
      cart.value.push({ ...product, quantity: 1 });
      alert("Товар добавлен в корзину");
    }
  };

  const cartCount = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  return { products, cart, addToCart, cartCount };
});
