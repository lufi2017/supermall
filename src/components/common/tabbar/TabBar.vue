<template>
    <div id="tab-bar">
       <slot>
       </slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar{ display: flex;
        background: #f1f1f1;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0  -1px 1px rgba(0,0,0,.08);
    }


</style>