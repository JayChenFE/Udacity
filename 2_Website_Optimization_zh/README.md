
# 网站性能优化项目
## 目标
尽可能优化这个在线项目的速度

- 优化 index.html 的 PageSpeed Insights 得分>90
- 优化 pizza.html 的 FPS（每秒帧数）>60

## 线上地址

## 优化内容
- **index.html**
    - 从style.css中分离竖屏时才需要加载的部分,另存为protrait.css
    - 为protrait.css和print.css增加媒体查询条件
    - 内联style.css的内容,缩短关键渲染路径长度
    - 通过[Web Font Loader ](https://www.lockedowndesign.com/load-google-fonts-asynchronously-for-page-speed/)异步加载谷歌字体
    - 为analytics.js添加async属性,异步加载
    - 将content中的图片下载到本地文件夹并修改引用
    - 在网站根目录下增加[.htaccess](http://httpd.apache.org/docs/2.2/howto/htaccess.html)文件,[使用浏览器缓存](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)
    - 压缩图片

-  **pizza.html**
    -  对`changePizzaSizes`函数进行了重构，先读取样式而后执行更改以避免强制同步布局问题
    -  使用 requestAnimationFrame 优化 updatePositions 中的绘制动画操作
    -  为披萨滑窗增加了 will-change CSS 属性，这样每一个 pizza 都会有自己的图层，可以避免图层重绘制
    -  使用 getElementById  querySelector, 提高 javascript 运行效率

## 优化结果
