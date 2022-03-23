<template>
  <fragment>
    <tr>
      <td class="table-first-item">
        <span>АД 12/231-20</span>
      </td>
      <td class="table-second-item">
        <span>Административное</span>
      </td>
      <td class="table-third-item">
        <BaseIcon ico="replace" class-names="table-td-icon"></BaseIcon>
        <span>Колесников В. А.</span>
      </td>
      <td>
        <BaseIcon ico="replace" class-names="table-td-icon"></BaseIcon>
        <span>Мохова А. И.</span>
      </td>
      <td class="--align-left">
        <button
          class="btn-more"
          @click="detail = !detail"
          :class="{ active: detail }"
        >
          <span>Заседания по делу</span>
          <BaseIcon ico="arrow-down"></BaseIcon>
        </button>
      </td>
    </tr>

    <TableArchiveDetail v-show="detail"></TableArchiveDetail>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import BaseIcon from "@/components/global/BaseIcon";
import TableArchiveDetail from "@/components/Table/TableArchiveDetail";

export default {
  name: "TableArchiveRow",
  components: { TableArchiveDetail, BaseIcon, Fragment },
  data() {
    return {
      detail: false
    };
  }
};
</script>
