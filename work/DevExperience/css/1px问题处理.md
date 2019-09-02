
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