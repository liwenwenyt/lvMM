<template>
    <div>
      <lv-backask></lv-backask>
      <lv-user-table></lv-user-table>
    </div>
</template>

<script>
    import LvUserTable from "../components/lvbackstage/lvUserTable";
    import LvBackask from "../components/lvbackstage/lvBackask";
    export default {
        name: "lvBackstage",
      components: {LvBackask, LvUserTable}
    }
</script>

<style scoped>

</style>
