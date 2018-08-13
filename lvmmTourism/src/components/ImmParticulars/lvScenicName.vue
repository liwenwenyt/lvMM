<template>
    <div class="scenicName">
        <p class="scenic_title">{{item.parks}}
            <span class="scenic_rank">{{item.rank}}</span>
        </p>
        <div class="scenicAddress">
            <i class="iconfont icon-htmal5icon14"></i>
            <a class="scenic_adr" href="javascript:;">{{item.adde}}</a>
            <i class="iconfont icon-you"></i>
        </div>
        <div class="scenic_activity">
            <a href="javascript:;" class="activityBox">
                <div class="boxLeft">
                    <p class="activity_title">景区须知</p>
                    <span class="activity_describe">开放时间、入园须知</span>
                </div>
                <i class="iconfont icon-jiantou"></i>
            </a>
            <a href="javascript:;" class="activityBox">
                <div class="boxLeft">
                    <p class="activity_title">{{item.percent}}满意度</p>
                    <span class="activity_describe">共有{{item.many}}条点评</span>
                </div>
                <i class="iconfont icon-jiantou"></i>
            </a>
        </div>
        <div class="hongbao">
            <div class="hongbaoNum">
                <i class="iconfont icon-hongbao"></i>
                <div class="imgs">
                    <span class="yuan">30元红包</span>
                </div>
                <div class="imgs">
                    <span class="yuan">15元红包</span>
                </div>
                <div class="imgs">
                    <span class="yuan">5元红包</span>
                </div>
            </div>
            <a href="javascript:;" class="several">
                3个可领取
            </a>
        </div>
        <div class="hint">
            <img class="hintImg" src="../../../static/img/ticket_horn_ic.png" alt="">
            <a class="hintText" href="javascript:;">针对晚入园的游客提供游园快捷服务，景区每天设有两班中…</a>
            <i class="iconfont icon-you"></i>
        </div>
    </div>
</template>

<script>
    export default{
        props:["item"]
    }
</script>

<style>
@import "../../assets/css/iconfont.css";
    .scenicName{
        width: 100%;
        height: 2.23rem;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        background-color: white;
        position: relative;
        top:-7px;
        z-index: 33;
    }
    .scenic_title{
        padding: .16rem 0 0 .16rem;
        font-size: .18rem;
    }
    .scenic_rank{
        font-size: .12rem;
        padding-left: .14rem;
    }
    .scenicAddress{
        width: 3.58rem;
        margin-left: .14rem;
        display: flex;
        margin-top: .12rem;
    }
    .scenic_adr{
        font-size: .12rem;
        color: #9c9c9c;
    }
        .scenic_activity{
            width: 3.45rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            margin-top:.1rem;
        }
        .activityBox{
            width: 1.68rem;
            height: .55rem;
            background-color: #f7f7ff;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
        }
        .boxLeft{
            display: flex;
            flex-direction: column;
            padding-left:.12rem;
        }
        .activity_title{
            color: black;
            font-size: .13rem;
            font-weight: bold;
        }
        .activity_describe{
            font-size: .12rem;
            color: #828080;
        }
        .icon-jiantou{
            padding-right:8px;
        }
        .hongbao{
            width: 3.45rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            border-bottom:1px solid #eeeef7;
            padding:.14rem 0;
        }
        .hongbaoNum{
            width:1.9rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .several{
            width: .7rem;
            height: .26rem;
            border:1px solid #ffe1bd;
            color: #ff8c04;
            font-size: .12rem;
            text-align: center;
            line-height: .26rem;
            border-radius: .13rem;
        }
        .imgs{
            height: .2rem;
            background: url(../../../static/img/HeBack.png) no-repeat;
            background-size: 100% 100%;
            text-align: center;
            display: flex;
            align-items: center;
        }
        .yuan{
            color: #989698;
            font-size: .12rem;
            transform:scale(0.9);
            padding:3px;
        }
        .hint{
            width: 3.45rem;;
            margin: 0 auto;
            display: flex;
            align-items: center;
            padding-top:8px;
        }
        .hintImg{
            width: .12rem;
            height: .1rem;
        }
        .hintText{
            color: #5ba2ff;
            font-size: .12rem;
            transform: scale(.96);
            white-space: nowrap;
        }
</style>
