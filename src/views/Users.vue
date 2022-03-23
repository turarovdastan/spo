<template>
  <div class="users">
    <!--Check-->
    <div class="users__check">
      <BaseChecbox text="Использовать авторизацию при входе"></BaseChecbox>
    </div>

    <!--Grid-->
    <div class="users__grid">
      <div class="users__item">
        <div class="gridblock">
          <div class="gridblock__item align-justify-center">
            <h2>Помещения</h2>

            <button class="btn-add" @click="openPopupAddRoom">
              <BaseIcon ico="plus"></BaseIcon>
              <span>Добавить</span>
            </button>
          </div>

          <div class="gridblock__item --last">
            <v-interactive-list
              :list="listSelect2TitleObj"
              :button="false"
            ></v-interactive-list>
          </div>
        </div>
      </div>
      <div class="users__item --two">
        <div class="gridblock --half">
          <div class="gridblock__item align-justify-center">
            <h2>Пользователи</h2>

            <button class="btn-add" @click="openPopupAddUser">
              <BaseIcon ico="plus"></BaseIcon>
              <span>Добавить</span>
            </button>
          </div>

          <div class="gridblock__item --last --oauto">
            <v-interactive-list
              :list="listSelect2"
              :fixed="true"
            ></v-interactive-list>
          </div>
        </div>

        <div class="gridblock --half">
          <div class="gridblock__item align-justify-center">
            <h2>Удаленные пользователи</h2>
          </div>

          <div class="gridblock__item --last --oauto">
            <v-interactive-list
              :list="listSelect2"
              :fixed="true"
              :restore="true"
              :nocheck="true"
            ></v-interactive-list>
          </div>
        </div>
      </div>
    </div>

    <PopupAddObj
      :show="popupAddObj"
      @hidePopup="popupAddObj = false"
    ></PopupAddObj>
  </div>
</template>

<script>
import BaseChecbox from "@/components/global/BaseChecbox";
import VInteractiveList from "@/components/InteractiveList/v-interactive-list";
import BaseIcon from "@/components/global/BaseIcon";
import { mapMutations } from "vuex";
import { CHANGE_HEAD_TITLE, OPEN_POPUP } from "@/store/type";
import PopupAddObj from "@/components/Popup/PopupAddObj";

export default {
  name: "Users",
  components: {
    BaseChecbox,
    BaseIcon,
    VInteractiveList,
    PopupAddObj
  },
  data() {
    return {
      popupAddObj: false,
      listSelect: [
        "Щербинский районный суд",
        "Перовский районный суд",
        "Дорогомиловский районный суд",
        "Симоновский районный суд",
        "Пресненский районный суд",
        "Люблинский районный суд",
        "Нагатинский районный суд",
        "Чертановский районный суд",
        "Измайловский районный суд",
        "Мещанский районный суд",
        "Хорошевский районный суд",
        "Басманный районный суд",
        "Тверской районный суд",
        "Тимирязевский районный суд",
        "Щербинский районный суд",
        "Перовский районный суд",
        "Дорогомиловский районный суд",
        "Симоновский районный суд",
        "Пресненский районный суд",
        "Люблинский районный суд",
        "Нагатинский районный суд",
        "Чертановский районный суд",
        "Измайловский районный суд",
        "Мещанский районный суд",
        "Хорошевский районный суд",
        "Басманный районный суд",
        "Тверской районный суд",
        "Тимирязевский районный суд"
      ],
      listSelect2: [
        {
          title: "Кузнецов Демьян Олегович",
          second: "Судья"
        },
        {
          title: "Ковалёв Вячеслав Семенович",
          second: "Секретарь"
        },
        {
          title: "Крюков Глеб Артёмович",
          second: "Помошник"
        },
        {
          title: "Цветков Валерий Альбертович",
          second: "Пристав"
        },
        {
          title: "Ермаков Аверьян Игоревич",
          second: "Судья"
        },
        {
          title: "Жданов Устин Макарович",
          second: "Секретарь"
        },
        {
          title: "Третьяков Пантелей Кимович",
          second: "Помошник"
        },
        {
          title: "Пахомов Афанасий Адольфович",
          second: "Пристав"
        },
        {
          title: "Суворов Авраам Лукьянович",
          second: "Судья"
        },
        {
          title: "Федосеев Федор Николаевич",
          second: "Секретарь"
        },
        {
          title: "Быков Пантелей Семёнович",
          second: "Помошник"
        },
        {
          title: "Игнатов Леонтий Рудольфович",
          second: "Пристав"
        },
        {
          title: "Жданов Устин Макарович",
          second: "Судья"
        },
        {
          title: "Третьяков Пантелей Кимович",
          second: "Секретарь"
        }
      ]
    };
  },
  computed: {
    listSelect2Title(e) {
      let arr = [];
      e.listSelect2.map(item => arr.push(item.title));
      return arr;
    },
    listSelect2TitleObj(e) {
      let arr = [];
      e.listSelect2.map(item => arr.push({ title: item.title }));
      return arr;
    }
  },
  created() {
    this.CHANGE_HEAD_TITLE("Архангельский областной суд");
  },
  methods: {
    ...mapMutations([CHANGE_HEAD_TITLE, OPEN_POPUP]),
    openPopupAddRoom() {
      this.OPEN_POPUP("popupAddRoom");
    },
    openPopupAddUser() {
      this.OPEN_POPUP("popupAddUser");
    }
  }
};
</script>
