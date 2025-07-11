<!-- <template>
  <div class="page">
    <Header />
    <div class="container">
      <h1 class="title">Добавление карты</h1>
      <a-form
        :model="formState"
        name="basic"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Название карты"
          name="cardName"
          :rules="[{ required: true, message: 'Введите название карты' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>
        <a-form-item
          label="Номер карты"
          name="cardNumber"
          :rules="[{ required: true, message: 'Введите номер карты' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>


        <input type="color" placeholder="Цвет карты">
        <br>
        <input type="file" placeholder="Картинка карты">
        <br>
      </a-form>


      <button class="btn">Сохранить</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Header from '../components/Header.vue'

const formState = reactive({
  username: '',
  cardNumber: ''
})

const onFinishFailed = () => {

}

const onFinish = () => {

}

</script>

<style scoped>

</style> -->
