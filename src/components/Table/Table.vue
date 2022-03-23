<template>
  <div class="table-block">
    <table class="table">
      <thead>
        <tr>
          <th class="table-first-item">
            <span>Номер дела</span>
          </th>
          <th class="table-second-item" >
            <span>Вид производства</span>
          </th>
          <th class="table-third-item">
            <span  >Судья</span>
          </th>
          <th>
            <span >Секретарь</span>
          </th>
        </tr>
      </thead>

      <tbody>
        <!--Row-->
        <TableArchiveRow
          v-for="(item, index) in [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            1,
            2,
            3,
            4,
            5,
            6
          ]"
          :key="index"
        ></TableArchiveRow>
      </tbody>
    </table>
  </div>
</template>

<script>

import TableArchiveRow from "@/components/Table/TableArchiveRow";
export default {
  name: "Table",
  components: { TableArchiveRow },
  data() {
    return {
      detailRow: false
    };
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style scoped></style>
