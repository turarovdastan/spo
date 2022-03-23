<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup" >
    <template slot="close-icon"></template>
    <h2>{{ title }}</h2>

    <BaseInput
      placeholder="Номер дела"
      :small="true"
      :border="true"
      class-names="--full redact__session-input"
    ></BaseInput>

    <!--Data/Time-->
    <div class="group">
      <BaseInputCalendar class-names="--full"></BaseInputCalendar>

      <BaseSelect
        :list="[11, 2, 3, 4, 5, 6]"
        placeholder="Часов"
        class-names="--full --border --small --list-min redact__session-input"
      ></BaseSelect>

      <BaseSelect
        :list="[15, 2, 3, 4, 5, 6]"
        placeholder="Минут"
        class-names="--full --border --small --list-min redact__session-input"
      ></BaseSelect>
    </div>

    <BaseSelect
      :list="['Вид производства', 2, 3, 4, 5, 6]"
      placeholder="Вид производства"
      :widthSelected="topPlaceholder"
      class-names="--full --border --small --list-min redact__session-input"
    ></BaseSelect>

    <AddParticipantSelect
      :list="addParticipantList"
      :min="true"
      placeholder="Добавить участника"
      selectAdd="Добавить участника"
      :select-add="true"
      :arrow="true"
      class-names="redact__session-input"
    ></AddParticipantSelect>

    <BaseSelect
      :list="['Помещение', 2, 3, 4, 5, 6]"
      placeholder="Помещение"
      :widthSelected="topPlaceholder"
      class-names="--full --border --small --list-min --top redact__session-input"
    ></BaseSelect>

    <div class="btn-group">
      <BaseButton :text="buttonText"></BaseButton>
      <BaseButton text="Отмена" class="--silver"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseInputCalendar from "@/components/global/BaseInputCalendar";
import BaseSelect from "@/components/global/BaseSelect";
import BaseInput from "@/components/global/BaseInput";
import AddParticipantSelect from "@/components/Popup/AddParticipantSelect";

export default {
  name: "PopupRedactSession",
  data() {
    return {
      placeholder: "Вид производства",
      topPlaceholder: "1.525rem",
      addParticipantList: [
        {
          role: 'Секретарь',
          id: 'secretary',
        },
        {
          role: 'Ответчик',
          id: 'defendant',
        },
        {
          role: 'Истец',
          id: 'plaintiff',
        },
        {
          role: 'Судья',
          id: 'judge',
        },
      ]
    }
  },
  components: { AddParticipantSelect, BaseInputCalendar, BaseButton, BaseSelect, BaseInput },
  props: {
    title: {
      type: String,
      default: "Редактировать"
    },
    show: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: "Сохранить"
    }
  },
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    }
  }
};
</script>
