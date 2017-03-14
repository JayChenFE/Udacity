/**
 * JavaScript Common Utils
 * @authors JayChenFE
 * @date    2017-03-14 17:20:43
 * @version 1.0
 */
var Utils = {
    
    //判断dom元素中是否存在某class
    hasClass: function(ele, cls) {
        return !!ele.className.match(new RegExp('\\b' + cls + '\\b'));
    },
    
    //为dom元素增加class
    addClass: function(ele, cls) {
        if (ele.length && ele.length > 0) {
            for (var i = 0; i < ele.length; i++) {
                Utils.singleAddClass(ele[i], cls);
            }
        } else {
            Utils.singleAddClass(ele, cls);
        }
    },
    
    //为dom元素删除class
    removeClass: function(ele, cls) {
        if (ele.length && ele.length > 0) {
            for (var i = 0; i < ele.length; i++) {
                Utils.singleRemoveClass(ele[i], cls);
            }
        } else {
            Utils.singleRemoveClass(ele, cls);
        }
    },

    singleAddClass: function(ele, cls) {
        if (Utils.hasClass(ele, cls)) return;
        ele.className += ' ' + cls;
    },

    singleRemoveClass: function(ele, cls) {
        ele.className = ele.className.replace(new RegExp('\\b' + cls + '\\b', 'g'), '');
    },
    
    //获取从min都max之间的随机整数，包括min和max
    getRandomNumberInculdMax: function getRandomNumberInculdMax(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
