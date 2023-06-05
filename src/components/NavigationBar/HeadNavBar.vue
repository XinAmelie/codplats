
<!--登录页的头部导航-->
<template>

  <div class="root">
    <div class="secdiv" >
      <div class="secdiv01" >

        <img  class="img_sty" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfYAAACACAMAAADOObvmAAABYlBMVEUAAAD///////////////////////////////////////////8k9O7/////////////////////KFD////////+LFT///////////////8m9e7+K1X/K1X+LFT8MFj/KVAg7+/+K1X+LFX+K1Ql9O7/////K1Qk8+8l9O7///8w8e////8l8+0l9O4k9O4l8u0k8+8k9O0k8+v9KlX+LFUl9e3+LFP9KlMj8uz+K1P///8l9O5w+fT+Sm3///8l9e949fEl7+/h/v1C9fD+jqSh+vj/ws//ws5G9vHrUnPm/fv/6O39ydNA9fHH+/v/usr////+LFUl9O53+PT/r7/+Rmqt+/n/5epA9fDk/v3I/Pv/5eny/v7+YH+S+vf/sL/+iJ//8vRb9vKE+fX/o7X/lar+bopO9vH+U3T+OV//ytX+e5Uy9e//vcpb9/LW/fyg+/j/ytS7+/pp+PP/2N/+iZ9DKgYSAAAAUHRSTlMAQCDfn78Q72DekICAcDAhvs8gnl6/r39QYd/fn4BAEBBg73C/Ts9A784gEWCvz6BvkEAwr5+QkFBPbjDn38CfQDDv7+/f39/Pr5CPgH9AMGkqnkQAABUrSURBVHja7Nxnk5NAGAfw3aUeCGc0JjGJV2yxnb2OYxl1xvGFzgbbWc529l6/vwkxeYBnNyyGREX+L/Qu0sKPfVhgkUySDYEgF0iZYqdk/y8jZF8hZYodIftBUqbYEbLvIWWKnQH7xzvxXGv3soOUKWoG7Dd5PC+7vWwhZYoaMfvzPvtuUqaoEbPf7bO3SJmiRszO1/rui6RMQSNhf9FnP0bKFDQS9qdveuzLpExBI2HnT3rsbVKmoAF23KnbTsoUNMAuOLsvkDKZw2g/JvmrI2V/ervb3UbKZI7O+6Hkr46UnX/oVfnyEk4W1rBd12v4hWPnT1T78kxLTY30YtYNraIzEoZyCBkTR0sPy8DFIYz8Zqij8WGMasHYn77uthR3ZWrc8OjgYeqZ2HWeGo3MlJ0aidVXC8XO797uLufE7hNijlqIl6m189Tos2Q3axxFY0Vi77krnd2ZUnu0+TBWFnY3nZ3Oih1KFnIvEnvP/WQu7A4hpBJxypVdI7NiB3XsXiR2fvf1wmTs4GzBr3au7PoM2Ufq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" alt="Sell More on TikTok Shop | Become An Indonesia Seller">

      </div>
      <div class="secdiv02"><a href="#" style="text-decoration: none;color: #eaecf6">Academy</a></div>
      <div class="secdiv03">
        <div class="flex_01" style="line-height: 60px;"><a href="#" style="color: #eaecf6;text-decoration: none">Contact Us</a></div>
        <div class="flex_03" style="line-height: 60px;width: 80px;text-align: center;max-height: 1px!important;color: #eaecf6">|</div>
        <div class="flex_02" style="line-height: 60px;text-align: end;color: #eaecf6;height: 12px">
          <a-space size="large">
            <a-dropdown @select="handleSelect" :popup-max-height="false">
              <a-button>English <icon-down /></a-button>
              <template #content>
                <a-doption>Bahasa Indonesia</a-doption>
                <a-doption>English</a-doption>
              </template>
            </a-dropdown>
          </a-space>
        </div>

      </div>
    </div>

  </div>

</template>

<script setup>
// IconDown按需导入
import { IconDown } from '@arco-design/web-vue/es/icon'

</script>

<style scoped lang="scss">

// scss处理器
$bg: #191d32;
$w_width:1248px;
$w_width01:126px;
$w_width02:282px;

$E_width: 282px;

// 字体的颜色
$font_colors:#eaecf6;

.root{
  background-color: $bg;
  height: 60px;
  position: relative;
}

.secdiv{
  width: $w_width;
  height: 60px;
  //border: 2px yellow solid;
  position: absolute;
  left: 50%;
  margin-left: -624px;
  display: flex;
}

.secdiv01{
  justify-content: flex-start;
  width: $w_width01;
  line-height: 60px;
  padding-top: 13.935px;
  padding-bottom: 13.935px;
}

.secdiv02{
  justify-content: center;
  //background-color: yellow;
  //相减取值
  width: $w_width - $w_width02 - $w_width01 ;
  color: $font_colors;
  font-size: 16px;
  font-weight: 600;
  line-height: 60px;
  padding-left: 120px;
}

.secdiv03{
  //background-color: orange;
  width: $w_width02;
  display: flex;
}

//图片格式
.img_sty{
width: $w_width01;
height: 32.125px;
}

//末尾flex

.flex_01{
  width: 88px ;
}
.flex_02{
  width: 58px;
}

.arco-dropdown-open .arco-icon-down {
  transform: rotate(180deg);
}

//# 深元素
:deep(.arco-btn-secondary){
  background-color: $bg;
  color: $font_colors ;
  margin-top: -10px;
  //鼠标悬浮
  &:hover{
    background-color: $bg;
    color: #eaecf6;
  }
}
</style>
