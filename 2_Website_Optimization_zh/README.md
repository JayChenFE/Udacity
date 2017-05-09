
# 网站性能优化项目
## 目标
尽可能优化这个在线项目的速度

- `index.html` 在移动设备和桌面上的 PageSpeed 分数至少为 90 分。
- 对 `views/js/main.js` 进行的优化可使`views/pizza.html`在滚动时保持 60fps 的帧速。
- 利用 `views/pizza.html` 页面上的 pizza 尺寸滑块调整 pizza 大小的时间小于 5 毫秒

## 线上地址

 - [预览 index.html](https://jaychenfe.github.io/Udacity/2_Website_Optimization_zh/)
 - [预览 pizza.html](https://jaychenfe.github.io/Udacity/2_Website_Optimization_zh/views/pizza.html)
  
## 优化内容
- **index.html**
    - 从style.css中分离竖屏时才需要加载的部分,另存为protrait.css
    - 为protrait.css和print.css增加媒体查询条件
    - 内联style.css的内容,缩短关键渲染路径长度
    - 通过[Web Font Loader ](https://www.lockedowndesign.com/load-google-fonts-asynchronously-for-page-speed/)异步加载谷歌字体
    - 为analytics.js添加async属性,异步加载
    - 将content中的图片下载到本地文件夹并修改引用
    - 参考[基于 google-analytics 的 angular 网站运营分析方法](https://segmentfault.com/a/1190000003914167)添加google-analytics统计分析
    - 压缩图片和HTML

-  **pizza.html**
    -  对`changePizzaSizes`函数进行了重构，先读取样式而后执行更改以避免强制同步布局问题
    -  使用 requestAnimationFrame 优化 updatePositions 中的绘制动画操作
    -  为披萨滑窗增加了 will-change CSS 属性，这样每一个 pizza 都会有自己的图层，可以避免图层重绘制
    -  减少页面加载时生成的pizza数量
    -  使用 getElementById代替querySelector, 提高 javascript 运行效率

## 优化结果
- **index.html**

![](https://github.com/JayChenFE/Udacity/blob/master/2_Website_Optimization_zh/result/result1.png)


![](https://github.com/JayChenFE/Udacity/blob/master/2_Website_Optimization_zh/result/result2.png)


-  **pizza.html**

![](https://github.com/JayChenFE/Udacity/blob/master/2_Website_Optimization_zh/result/result3.png)

![](https://github.com/JayChenFE/Udacity/blob/master/2_Website_Optimization_zh/result/result4.png)