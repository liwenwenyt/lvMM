<template>
    <div class="character">
        <div class="goCharacter">
            <div class="characterBox">
                <p class="lvText">驴妈妈品质之旅</p>
                <div class="characterDescribe">
                    <div class="characterTxt">
                        <i class="iconfont icon-right-1"></i>
                        <span>入园保障</span>
                    </div>
                    <div class="characterTxt">
                        <i class="iconfont icon-right-1"></i>
                        <span>如实描述</span>
                    </div>
                    <div class="characterTxt">
                        <i class="iconfont icon-right-1"></i>
                        <span>贵就赔</span>
                    </div>
                </div>
            </div>
            <i class="iconfont icon-jiantou"></i>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style>
@import "../../assets/css/iconfont.css";
    .character{
            width: 100%;
            height: .56rem;
            margin-top:.1rem;
            background: url(../../../static/img/character.png) no-repeat;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
        }
        .goCharacter{
            width: 3.08rem;
            height: .4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: .52rem;
        }
        .characterBox{
            width: 1.94rem;
            height: .4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .lvText{
            font-size: .14rem;
            font-weight: bold;
        }
        .characterDescribe{
            width: 1.94rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
        }
        .characterTxt{
            display: flex;
            justify-content: flex-start;
            color: #8e8f8e;
        }
        .icon-jiantou{
            padding: 0;
        }
</style>
