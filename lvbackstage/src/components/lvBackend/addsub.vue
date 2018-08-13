<template>
    <div>
        <lv-backend-insert></lv-backend-insert>
        <lvbackend-infor></lvbackend-infor>
        <lvbackend-write></lvbackend-write>
    </div>
</template>

<script>
import lvBackendInsert from './lvBackendInsert'
import lvbackendInfor from './lvbackendInfor'
import lvbackendWrite from './lvbackendWrite'

export default {
    components:{
        lvBackendInsert,
        lvbackendInfor,
        lvbackendWrite
    }
}
</script>

<style scoped>

</style>

