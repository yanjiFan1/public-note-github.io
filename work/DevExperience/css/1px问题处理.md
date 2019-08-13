
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