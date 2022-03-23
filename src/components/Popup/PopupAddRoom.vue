<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup --dialog">
    <template slot="close-icon"></template>

    <h2 style="margin-bottom: 1.62rem">Добавить помещение</h2>

    <BaseSelect
      :list="['Тип помещения', 2, 3, 4, 5, 6]"
      placeholder="Тип помещения"
      :simple="false"
      :selectPlaceholder="true"
      :firstselect="true"
      class-names="--full --border --small --list-min "
    ></BaseSelect>

    <BaseInput
      placeholder="№"
      :small="true"
      :border="true"
      class-names="--full"
    ></BaseInput>

    <div class="btn-group" style="margin-top: 0.62rem">
      <BaseButton text="Добавить"></BaseButton>
      <BaseButton text="Отмена" class="--silver"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseSelect from "@/components/global/BaseSelect";
import BaseInput from "@/components/global/BaseInput";

export default {
  name: "PopupEvents",
  components: { BaseButton, BaseSelect, BaseInput },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    }
  }
};
</script>
