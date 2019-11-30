
.border-bb{
  position: relative;
}
.border-bb::after {
  content: "";
  pointer-events: none; /* 防止点击触发 */
  box-sizing: border-box;
  position: absolute;
  width: 200%;
  height: 200%;
  left: 0;
  top: 0;
  border-bottom:1rpx solid #eee;
  -webkit-transform:scale(0.5);
  -webkit-transform-origin: 0 0;
  transform:scale(0.5);
  transform-origin: 0 0;
}


如何是border，进行处理
.sku-good-pic {
  padding: relative;
  float: left;
  margin-right: 0.5rem;
  background-color: #fff;
  width: 200rpx;
  height: 200rpx;
  overflow: hidden;
  border-radius: 4rpx;
  box-sizing: border-box;
}

.sku-good-pic::after{
  content: "";
  pointer-events: none; /* 防止点击触发 */
  box-sizing: border-box;
  position: absolute;
  width: 400rpx;
  height: 400rpx;
  left: 0;
  top:24rpx;
  border:1rpx solid #F54B78;
  -webkit-transform:scale(0.5);
  -webkit-transform-origin: 0 0;
  transform:scale(0.5);
  transform-origin: 0 0;
  border-radius:8rpx;
}


方案3
.m-size-country-des{
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: 6px;
  box-sizing: border-box;
}
.m-size-country-des::after{
  content: ' ';
  position: absolute;
  pointer-events: none;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  -webkit-transform: scale(.5);
  transform: scale(.5);
  border: 0 solid #f5f5f5;
  border-width: 2px;
  border-radius: 8px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

方案4 
参考： https://juejin.im/post/5d70a030f265da03a715f3fd
@mixin thinBorder($directionMaps: bottom, $color: #ccc, $radius:(0, 0, 0, 0), $position: after) {
    // 是否只有一个方向
    $isOnlyOneDir: string==type-of($directionMaps);

    @if ($isOnlyOneDir) {
        $directionMaps: ($directionMaps);
    }

    @each $directionMap in $directionMaps {
        border-#{$directionMap}: 1px solid $color;
    }

    // 判断圆角是list还是number
    @if(list==type-of($radius)) {
        border-radius: nth($radius, 1) nth($radius, 2) nth($radius, 3) nth($radius, 4);
    }

    @else {
        border-radius: $radius;
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        & {
            position: relative;

            // 删除1像素密度比下的边框
            @each $directionMap in $directionMaps {
                border-#{$directionMap}: none;
            }
        }

        &:#{$position} {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 200%;
            height: 200%;
            transform: scale(0.5);
            box-sizing: border-box;
            padding: 1px;
            transform-origin: 0 0;
            pointer-events: none;
            border: 0 solid $color;

            @each $directionMap in $directionMaps {
                border-#{$directionMap}-width: 1px;
            }

            // 判断圆角是list还是number
            @if(list==type-of($radius)) {
                border-radius: nth($radius, 1)*2 nth($radius, 2)*2 nth($radius, 3)*2 nth($radius, 4)*2;
            }

            @else {
                border-radius: $radius*2;
            }

        }
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 3) {
        &:#{$position} {

            // 判断圆角是list还是number
            @if(list==type-of($radius)) {
                border-radius: nth($radius, 1)*3 nth($radius, 2)*3 nth($radius, 3)*3 nth($radius, 4)*3;
            }

            @else {
                border-radius: $radius*3;
            }

            width: 300%;
            height: 300%;
            transform: scale(0.3333);
        }
    }
}
