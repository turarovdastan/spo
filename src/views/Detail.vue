<template>
  <div class="pdetail">
    <!--Grid-->
    <div class="pdetail__grid">
      <!--Item-->
      <div class="pdetail__grid-item --bg-white">
        <TheEditor></TheEditor>
      </div>

      <!--Item-->
      <div
        class="pdetail__grid-item --dgrid"
        :class="{ '--db': toggleListMax }"
      >
<!--        <BaseInput-->
<!--          placeholder="Поиск событий"-->
<!--          icon="search"-->
<!--          :min="true"-->
<!--          class-names="&#45;&#45;full"-->
<!--        ></BaseInput>-->

        <TheEvents></TheEvents>

<!--        <div class="pdetail__event" v-if="toggleVideo">-->
<!--          <button-->
<!--            class="pdetail-video__btn"-->
<!--            :class="{ '&#45;&#45;active': !toggleListMax }"-->
<!--            @click="toggleListMax = !toggleListMax"-->
<!--          >-->
<!--            <BaseIcon ico="arrow-down"></BaseIcon>-->
<!--            <span>{{ !toggleListMax ? "Развернуть" : "Свернуть" }}</span>-->
<!--          </button>-->
<!--        </div>-->

<!--        <div class="pdetail-video" :class="{ '&#45;&#45;min': toggleVideo }">-->
<!--          <div class="pdetail-video__camera">-->
<!--            <div class="active" data-name="Camera 1 Camera 1 Camera 1">1</div>-->
<!--            <div data-name="Camera 2 Camera 2 ">2</div>-->
<!--            <div data-name="Camera 3">3</div>-->
<!--            <div data-name="Camera 4">4</div>-->
<!--          </div>-->
<!--          <div class="pdetail-video__wrap">-->
<!--            <div class="pdetail-video__content">-->
<!--              <img src="@/assets/img/camvid.jpg" alt="IMG" />-->
<!--            </div>-->

<!--            <button-->
<!--              class="pdetail-video__btn"-->
<!--              @click="toggleVideo = !toggleVideo"-->
<!--            >-->
<!--              <BaseIcon ico="arrow-down"></BaseIcon>-->
<!--              <span>{{ toggleVideo ? "Развернуть" : "Свернуть" }}</span>-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
    <!--Video track-->
    <div class="pdetail__video-track">
      <div class="video-track">
        <button class="play">
          <BaseIcon ico="play"></BaseIcon>
        </button>

        <button class="volume">
          <BaseIcon ico="volume"></BaseIcon>
        </button>

        <span>11:11:11</span>

        <ul>
          <li></li>
          <li></li>
          <li>
            <span>Говорит свидетель</span>
          </li>
          <li></li>
        </ul>
      </div>
    </div>

    <!--Control-->
    <div class="pdetail__control">
      <nav>
        <ul>
          <li>
            <button>
              <BaseIcon ico="record"></BaseIcon>
              <span>Завершить</span>
            </button>

            <ul>
              <li>
                <button>
                  <span>Перерыв</span>
                  <BaseIcon ico="clock"></BaseIcon>
                </button>
              </li>
              <li>
                <button>
                  <span>Назначить дату следующего заседания</span>
                  <BaseIcon ico="calendar"></BaseIcon>
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button>
              <BaseIcon ico="link"></BaseIcon>
              <span>Прикрепить</span>
            </button>

            <ul>
              <li>
                <button>
                  <span>название документа</span>
                  <BaseIcon ico="trash"></BaseIcon>
                  <BaseIcon ico="download"></BaseIcon>
                </button>
              </li>

              <li>
                <button>
                  <span>название документа</span>
                  <BaseIcon ico="trash"></BaseIcon>
                  <BaseIcon ico="download"></BaseIcon>
                </button>
              </li>

              <li>
                <button>
                  <span>название документа</span>
                  <BaseIcon ico="trash"></BaseIcon>
                  <BaseIcon ico="download"></BaseIcon>
                </button>
              </li>

              <li>
                <button>
                  <span>название документа</span>
                  <BaseIcon ico="trash"></BaseIcon>
                  <BaseIcon ico="download"></BaseIcon>
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button>
              <BaseIcon ico="file"></BaseIcon>
              <span>Сохранить как</span>
            </button>

            <ul>
              <li>
                <button>
                  <span>протокол</span>
                  <BaseIcon ico="protocol"></BaseIcon>
                </button>
              </li>
              <li>
                <button @click="popupCropRecord = !popupCropRecord">
                  <span>Фрагмент</span>
                  <BaseIcon ico="crop"></BaseIcon>
                </button>
              </li>
              <li>
                <button>
                  <span>аудио</span>
                  <BaseIcon ico="mic-o"></BaseIcon>
                </button>
              </li>
              <li>
                <button>
                  <span>видео</span>
                  <BaseIcon ico="camera"></BaseIcon>
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button>
              <BaseIcon ico="disc"></BaseIcon>
              <span>Записать на диск</span>
            </button>

            <ul>
              <li>
                <button>
                  <span>Аудио</span>
                  <BaseIcon ico="mic-o"></BaseIcon>
                </button>
              </li>
              <li>
                <button>
                  <span>Видео</span>
                  <BaseIcon ico="camera"></BaseIcon>
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button @click="openPopupContact">
              <BaseIcon ico="video"></BaseIcon>
              <span>Видеоконференция</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <PopupCropRecord
      :show="popupCropRecord"
      @hidePopup="popupCropRecord = false"
    ></PopupCropRecord>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import TheEvents from "@/components/Detail/TheEvents";
// import BaseInput from "@/components/global/BaseInput";
// import BaseChecbox from "@/components/global/BaseChecbox";
import { mapMutations } from "vuex";
import { CHANGE_HEAD_TITLE, OPEN_POPUP } from "@/store/type";
import TheEditor from "@/components/Editor/TheEditor";
import PopupCropRecord from "@/components/Popup/PopupCropRecord";

export default {
  name: "Detail",
  components: { TheEditor, TheEvents, BaseIcon, PopupCropRecord },
  data() {
    return {
      popupCropRecord: false,
      toggleVideo: false,
      toggleListMax: false
    };
  },
  created() {
    this.CHANGE_HEAD_TITLE("Заседание по делу № ЛВ1231245");
  },
  methods: {
    ...mapMutations([CHANGE_HEAD_TITLE, OPEN_POPUP]),
    eventsAddClass(cls) {
      console.log(cls);
    },
    openPopupContact() {
      this.OPEN_POPUP("popupContact");
    }
  }
};
</script>
