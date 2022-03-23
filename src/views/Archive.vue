<template>
  <div class="archive --hfull">
    <div class="gridblock --margin-min">
      <div class="gridblock__item">
        <div class="archive__filter">
          <div class="archive__filter-item">
            <BaseInput
              placeholder="Номер дела"
              class="--min --full"
            ></BaseInput>
          </div>
          <div class="archive__filter-item">
            <BaseSelect
              :list="list"
              :paddingArchive="paddingTop"
              placeholder="Вид производства"
              class="--full --variant2"
            ></BaseSelect>
          </div>

          <div class="archive__filter-item">
            <BaseSelect
              :paddingArchive="paddingTop"
              :list="['Судья', 'Судья 2', 'Судья 3']"
              placeholder="Судья"
              class="--full --variant2"
            ></BaseSelect>
          </div>

          <div class="archive__filter-item">
            <BaseSelect
              :paddingArchive="paddingTop"
              :list="['Секретарь', 'Секретарь 2', 'Секретарь 3']"
              placeholder="Секретарь"
              class="--full --variant2"
            ></BaseSelect>
          </div>

          <div class="archive__filter-item">
            <BaseButton text="Найти" class="--middle --full"></BaseButton>
          </div>
        </div>
      </div>

      <div class="gridblock__item archive__height-auto">
        <v-table-archive></v-table-archive>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/global/BaseInput";
import BaseSelect from "@/components/global/BaseSelect";
import BaseButton from "@/components/global/BaseButton";
import VTableArchive from "@/components/Table/Table";
import { mapMutations } from "vuex";
import { CHANGE_HEAD_TITLE } from "@/store/type";

export default {
  name: "Archive",
  components: { VTableArchive, BaseButton, BaseSelect, BaseInput },
  data() {
    return {
      list: ["Административное", "Уголовное", "Гражданское", "Арбитражное"],
      paddingTop: '1.425rem !important'
    };
  },
  created() {
    this.CHANGE_HEAD_TITLE("Архив заседаний");
  },
  methods: {
    ...mapMutations([CHANGE_HEAD_TITLE])
  }
};
</script>
