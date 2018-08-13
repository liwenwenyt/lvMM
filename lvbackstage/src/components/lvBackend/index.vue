<template>
    <div class="pc">
      <!--<lv-backend-header-select></lv-backend-header-select>-->
      <nav-menu class="nav-menu"></nav-menu>
      <!--<content class="content"></content>-->
      <div class="pc2">
        <div class="pc4">
          <div class="pc3">
            <side-menu></side-menu>
          </div>
        </div>
        <right-content></right-content>
      </div>
    </div>
</template>

<script>
    import NavMenu from "../components/navMenu";
    import SideMenu from "../components/sideMenu";
    import RightContent from "../components/rightContent";
    import LvBackendHeaderSelect from "../components/lvBackendHeaderSelect";
    // import Content from "../components/content";
    export default {
        name: "index",
      components: { RightContent, SideMenu,NavMenu}
    }
</script>

<style scoped>
.pc{
  display: flex;
  flex-direction: column;
}
  .pc .nav-menu{
    height: 76px;
  }
  .pc2{
    flex: 1;
    display: flex;
  }
  .pc4{
    width: 26%;
    display: flex;
    flex-direction: column;
  }
  .pc2 .pc3{
    width: 100%;
    height: 100%;
    background: #545c64;
  }
  .pc2 side-menu{
    width: 100%;
    height: 100%;
  }
  .pc2 right-content{
    flex: 1;
  }
</style>
