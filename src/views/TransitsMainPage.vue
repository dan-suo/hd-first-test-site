<template>
  <v-container fluid class=" container-of-content">
    <Breadcrumbs class="text-caption text-grey-darken-1" />
    <v-sheet class="text-caption text-grey-darken-1"
      >Тут пока нет никаких транзитов, конечно же, не так же сразу. Поэтому тут
      мы потренируемся забирать инфу с сервера, который сами написали. Через
      апи, который тоже сами писали. А данные лежат в монгузе, куда мы тоже сами
      залезли. Сплошной бэкендовый кошмар фронтендера.
    </v-sheet>
    <v-container v-if="isVisibleApiBlock">
      <v-btn class="ml-6" color="primary" @click="createNewPost"
        >New Post</v-btn
      >
      <v-list v-if="posts">
        <v-list-item v-for="post in posts" :key="post._id">
          <v-list-item-title>{{ post.title }}</v-list-item-title>
          <v-btn class="ml-6" color="primary" @click="editPost(post._id)"
            >Edit</v-btn
          >
          <v-btn class="ml-6" color="primary" @click="removePost(post._id)"
            >Delete</v-btn
          >
        </v-list-item>
      </v-list>
    </v-container>
    <v-sheet class="text-caption text-grey-darken-1">Несмотря ни на что - взаимодействие с сервером и базой работает, а значит - всё не так уж плохо на сегодняшний день.</v-sheet>
  </v-container>
</template>

<script setup>
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import { ref, onMounted } from "vue";
import {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
} from "@/services/api";

const posts = ref([]);
const onePost = ref([]);

const isVisibleApiBlock = ref(true);

const loadPosts = async () => {
  posts.value = await fetchPosts();
};

const loadPost = async (id) => {
  onePost.value = await fetchPost(id);
};

const createNewPost = async () => {
  await createPost({ title: "New Post", content: "content" });
  loadPosts();
};

const editPost = async (id) => {
  await updatePost(id, { title: "Updated Post", content: "edited content" });
  loadPosts();
};

const removePost = async (id) => {
  await deletePost(id);
  loadPosts();
};

onMounted(loadPosts);
</script>

<style scoped>
.montserrat {
  font-family: "Montserrat", sans-serif;
}

.container-of-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px;
}
</style>
