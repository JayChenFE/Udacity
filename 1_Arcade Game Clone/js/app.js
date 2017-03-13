//定义常量
var DEFINE = {
    CANVAS_WIDTH: 505,
    CANVAS_HEIGHT: 586,
    IMAGE_WIDTH: 101,
    IMAGE_HEIGHT: 83,
    ROW_NUMBER: 6,
    COL_NMUBER: 5,
    ENEMY_NUMBER: 8,
    ENEMY_START_X: -70,
    ENEMY_SPEED_BASIC: 50,
    ENEMY_SPEED_RATE_MAX: 6,
    PLAYER_START_X: 202,
    PLAYER_START_Y: 385,
    PLAYER_Y_MIN: 30,

};

// 这是我们的玩家要躲避的敌人 
var Enemy = function() {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多

    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
    this.speed = this.getSpeed();//速度
    this.originX = this.getStartX();//初始x坐标
    this.x = this.originX;//x坐标
    this.y = this.getStartY();//y坐标
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += this.speed * dt;
    //超出屏幕位置时还原到初始位置
    if (this.x > DEFINE.CANVAS_WIDTH) {
        this.x = this.originX;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//获取敌人速度
Enemy.prototype.getSpeed = function() {
    //取得随机倍数(1-最大倍数)
    var rate = getRandomNmuberInculdMax(1, DEFINE.ENEMY_SPEED_RATE_MAX);
    return DEFINE.ENEMY_SPEED_BASIC * rate;
};

//获取敌人初始X坐标
Enemy.prototype.getStartX = function() {
    //取得随机偏左列数0- -3
    var ranCol = getRandomNmuberInculdMax(-3, 0);
    return ranCol * DEFINE.IMAGE_WIDTH + DEFINE.ENEMY_START_X;
};

//获取敌人初始Y坐标
Enemy.prototype.getStartY = function() {
    //取得随机行数1-3
    var ranRow = getRandomNmuberInculdMax(1, 3);
    return ranRow * DEFINE.IMAGE_HEIGHT - DEFINE.PLAYER_Y_MIN;
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-pink-girl.png';
};

//更新玩家坐标
Player.prototype.update = function() {
    //到达终点或碰撞时,返回起点
    if (this.y <= DEFINE.PLAYER_Y_MIN || checkCollisions()) {
        this.x = DEFINE.PLAYER_START_X;
        this.y = DEFINE.PLAYER_START_Y;
    }
};

//重绘玩家
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//键盘输入事件
Player.prototype.handleInput = function(orientation) {

    switch (orientation) {

        //左移
        case "left":
            if (this.x >= DEFINE.IMAGE_WIDTH) {
                this.x -= DEFINE.IMAGE_WIDTH;
            }
            break;
        //右移
        case "right":
            if (this.x <= DEFINE.IMAGE_WIDTH * 3) {
                this.x += DEFINE.IMAGE_WIDTH;
            }
            break;
        //上移
        case "up":
            this.y -= DEFINE.IMAGE_HEIGHT;
            break;
        //下移
        case "down":
            if (this.y < DEFINE.PLAYER_START_Y) {
                this.y += DEFINE.IMAGE_HEIGHT;
            }
            break;

        default:
            break;

    }

};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var player = new Player(DEFINE.PLAYER_START_X, DEFINE.PLAYER_START_Y);
// var player = new Player(DEFINE.PLAYER_START_X, 53);
var allEnemies = [];
for (var i = 0; i < DEFINE.ENEMY_NUMBER; i++) {

    allEnemies.push(new Enemy());
}

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//获取从min都max之间的随机整数，包括min和max
function getRandomNmuberInculdMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//碰撞检测
function checkCollisions() {

    //检测是否有enemy实例和player部分重合
    return allEnemies.some(function(enemy) {
        return enemy.y === player.y &&
            (enemy.x > player.x - DEFINE.IMAGE_WIDTH) &&
            (enemy.x < player.x + DEFINE.IMAGE_WIDTH);
    });
}