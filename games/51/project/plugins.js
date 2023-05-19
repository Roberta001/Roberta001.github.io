var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {

	console.log("插件编写测试");

	// 可以写一些直接执行的代码
	// 在这里写的代码将会在【资源加载前】被执行，此时图片等资源尚未被加载。
	// 请勿在这里对包括bgm，图片等资源进行操作。

	core.enemys.getDamageString = function (enemy, x, y, floorId) {
		if (typeof enemy == 'string') enemy = core.material.enemys[enemy];
		var damage = this.getDamage(enemy, x, y, floorId);

		var color = '#000000';

		if (damage == null) {
			damage = "???";
			color = '#FF0000';
		} else {
			if (core.getFlag('addhp', 0) == 1) {
				if (damage < core.status.hero.hp) color = '#00FF00';
				else color = '#FF0000';
			} else if (damage <= 0) color = '#00FF00';
			else if (damage < core.status.hero.hp / 3) color = '#FFFFFF';
			else if (damage < core.status.hero.hp * 2 / 3) color = '#FFFF00';
			else if (damage < core.status.hero.hp) color = '#FF7F00';
			else color = '#FF0000';

			damage = core.formatBigNumber(damage, true);
			if (core.enemys.hasSpecial(enemy, 19))
				damage += "+";
			if (core.enemys.hasSpecial(enemy, 21))
				damage += "-";
			if (core.enemys.hasSpecial(enemy, 11))
				damage += "^";
		}

		return {
			"damage": damage,
			"color": color
		};
	}




	core.ui._drawBook_drawDamage = function (index, enemy, offset, position) {
		core.setTextAlign('ui', 'center');
		var damage = enemy.damage,
			color = '#FFFF00';
		if (damage == null) {
			damage = '不可攻击';
			color = '#FF0000';
		} else if (damage == 0) {
			damage = '无危险';
			color = '#00FF00';
		} else {
			if (damage >= core.status.hero.hp) color = '#FF0000';
			if (damage <= 0) color = '#00FF00';
			damage = core.formatBigNumber(damage);
			if (core.enemys.hasSpecial(enemy, 19)) damage += "+";
			if (core.enemys.hasSpecial(enemy, 21)) damage += "-";
			if (core.enemys.hasSpecial(enemy, 11)) damage += "^";
		}
		if (enemy.notBomb) damage += "[b]";
		core.fillText('ui', damage, offset, position, color, this._buildFont(13, true));
	};

	core.control.checkBlock = function () {
		var x = core.getHeroLoc('x'),
			y = core.getHeroLoc('y'),
			loc = x + "," + y;
		var damage = core.status.checkBlock.damage[loc];
		if (damage) {
			core.status.hero.hp -= damage;
			core.drawTip("你没有神圣盾不能防御，受到 " + damage + " 点魔法伤害");
			this._checkBlock_soundAndAnimate(x, y);
			if (core.status.hero.hp <= 0) {
				core.status.hero.hp = 0;
				core.updateStatusBar();
				core.events.lose();
				return;
			}
		}
		this._checkBlock_snipe(core.status.checkBlock.snipe[loc]);
		this._checkBlock_ambush(core.status.checkBlock.ambush[loc]);
	};

	core.control._checkBlock_soundAndAnimate = function (x, y) {
		core.playSound('zone.mp3');
	};

	core.control._checkBlock_snipe = function (snipe) {
		if (!snipe || snipe.length == 0) return;
		var actions = [];
		snipe.forEach(function (t) {
			actions.push({ "type": "move", "loc": [t[0], t[1]], "steps": [t[3]], "time": 200, "keep": true, "async": true });
		});
		actions.push({ "type": "waitAsync" });
		core.insertAction(actions);
	};

	core.registerSystemEvent("man", function (data, callback) {
		var a = core.status.floorId.replace(/[^0-9]/ig, "");
		var b = core.nextX();
		var c = core.nextY();
		core.insertAction([
			{ "type": "insert", "name": "对话", "args": [a, b, c, 0] },
		]);
		//console.log(data);
		if (callback) callback();
	});

	core.registerSystemEvent("woman", function (data, callback) {
		var name = core.status.floorId + '@' + core.nextX() + '@' + core.nextY() + '@' + 'A';
		if (core.getFlag(name, 0) == 1) {
			var a = core.status.floorId.replace(/[^0-9]/ig, "");
			var b = core.nextX();
			var c = core.nextY();
			core.insertAction([
				{ "type": "insert", "name": "对话", "args": [a, b, c, 1] },
			]);
		} else {
			core.insertAction([
				{ "type": "insert", "name": "商人", "args": [0] },
			]);
		}
		//console.log(data);
		if (callback) callback();
	});

	core.registerSystemEvent("specialwall", function (data, callback) {
		if (data.event.id == 'whiteWall' || core.getFlag('talking') > 0) {
			core.insertAction([
				{ "type": "insert", "name": "开墙" },
			]);
			if (data.event.id != 'whiteWall') {
				core.setFlag('end', 1);
			}
			core.setFlag('talking', 0); //穿墙之后不能再次穿墙
		}
		//console.log(data);
		if (callback) callback();
	});

	core.registerSystemEvent("fakeWall", function (data, callback) {
		if (data.event.id == 'blueWall') {
			core.insertAction([
				{ "type": "openDoor", loc: [data.x, data.y] },
			]);
		}
		//console.log(data);
		if (callback) callback();
	});

	core.events._changeFloor_beforeChange = function (info, callback) {
		// core.playSound('floor.mp3');
		// 需要 setTimeout 执行，不然会出错
		window.setTimeout(function () {
			if (info.time == 0)
				core.events._changeFloor_changing(info, callback);
			else {
				var now = parseInt(core.status.floorId.slice(2)),
					_now = now;
				var to = parseInt(info.floorId.slice(2));
				core.setCurtain([255, 255, 255, 1]);
				core.setFlag("__color__", [255, 255, 255, 1]);
				var t = window.setInterval(function () {
					if (now > to) now--;
					else if (now < to) now++;
					else {
						clearInterval(t);
						core.status.floorId = _now;
						core.events._changeFloor_changing(info, callback);
					}
					core.status.floorId = "MT" + now;
					core.ui.statusBar._update_props();
				}, info.time * 10);
			}
		}, 25)
	}

	core.events._changeFloor_changing = function (info, callback) {
		this.changingFloor(info.floorId, info.heroLoc, info.fromLoad);

		if (info.time == 0)
			this._changeFloor_afterChange(info, callback);
		else
			core.setCurtain([0, 0, 0, 0], 750, function () {
				core.setFlag("__color__", [0, 0, 0, 0]);
				core.events._changeFloor_afterChange(info, callback);
			});
	}

	core.ui.drawWindowSelector = function (background, x, y, w, h) {
		w = Math.round(w) + 48, h = Math.round(h);
		var ctx = core.ui.createCanvas("_selector", x - 24, y, w, h, 165);
		this._drawSelector(ctx, background, w, h);
	}

	core.ui._drawSelector = function (ctx, background, w, h, left, top) {
		left = left || 0;
		top = top || 0;
		ctx = this.getContextByName(ctx);
		if (!ctx) return;
		if (typeof background == 'string')
			background = core.material.images.images[background];
		if (!(background instanceof Image)) return;
		// badge
		ctx.drawImage(background, 132, 68, 24, 24, left + 4, top + 4, 24, 24);
		ctx.drawImage(background, 132, 68, 24, 24, w - left - 28, top + 4, 24, 24);
	}

	core.ui.drawTip = function (text, id, clear) {
		core.ui.statusBar.print(text);
	}

	core.ui.clearMap = function (name, x, y, width, height) {
		if (name == 'all') {
			for (var m in core.canvas) {
				core.canvas[m].clearRect(0, 0, core.bigmap.width * 32, core.bigmap.height * 32);
			}
			core.clearMap("outerUI");
			core.dom.gif.innerHTML = "";
			core.removeGlobalAnimate();
		} else {
			var ctx = this.getContextByName(name);
			if (ctx) ctx.clearRect(x || 0, y || 0, width || ctx.canvas.width, height || ctx.canvas.height);
		}
	}

	core.control._shouldDisplayStatus = function () {
		return [];
	}

	core.control._updateStatusBar_setToolboxIcon = function () {
		core.ui.statusBar._update_toolBox();
	}

	core.control.updateGlobalAttribute = function () {}

	core.actions._getClickLoc = function (x, y) {
		var size = 32;
		size = size * core.domStyle.scale;

		var centerX = main.dom.body.clientWidth / 2, 
			centerY = main.dom.body.clientHeight / 2;
		x -= centerX, y -= centerY;
		if (core.domStyle.isVertical) {
			var t = x; x = y, y = -t;
		}
		var loc = {
			'x': x + 320 * core.domStyle.scale, 
			'y': y + 211 * core.domStyle.scale, 
			'size': size 
		};
		if (core.ui.statusBar.isInGameDraw(loc)) {
			loc = core.ui.statusBar.fixEventLoc(loc);
		} else {
			loc.x /= core.domStyle.scale;
			loc.y /= core.domStyle.scale;
			loc.outer = true;
		}
		return loc;
	}

	this._afterLoadResources = function () {
		// 本函数将在所有资源加载完毕后，游戏开启前被执行
		// 可以在这个函数里面对资源进行一些操作，比如切分图片等。

		// 这是一个将assets.png拆分成若干个32x32像素的小图片并保存的样例。
		// var arr = core.splitImage("assets.png", 32, 32);
		// for (var i = 0; i < arr.length; i++) {
		//     core.material.images.images["asset"+i+".png"] = arr[i];
		// }

	}

	// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为 core.plugin.xxx();
	// 从V2.6开始，插件中用this.XXX方式定义的函数也会被转发到core中，详见文档-脚本-函数的转发。
},
    "drawLight": function () {

	// 绘制灯光/漆黑层效果。调用方式 core.plugin.drawLight(...)
	// 【参数说明】
	// name：必填，要绘制到的画布名；可以是一个系统画布，或者是个自定义画布；如果不存在则创建
	// color：可选，只能是一个0~1之间的数，为不透明度的值。不填则默认为0.9。
	// lights：可选，一个数组，定义了每个独立的灯光。
	//        其中每一项是三元组 [x,y,r] x和y分别为该灯光的横纵坐标，r为该灯光的半径。
	// lightDec：可选，0到1之间，光从多少百分比才开始衰减（在此范围内保持全亮），不设置默认为0。
	//        比如lightDec为0.5代表，每个灯光部分内圈50%的范围全亮，50%以后才开始快速衰减。
	// 【调用样例】
	// core.plugin.drawLight('curtain'); // 在curtain层绘制全图不透明度0.9，等价于更改画面色调为[0,0,0,0.9]。
	// core.plugin.drawLight('ui', 0.95, [[25,11,46]]); // 在ui层绘制全图不透明度0.95，其中在(25,11)点存在一个半径为46的灯光效果。
	// core.plugin.drawLight('test', 0.2, [[25,11,46,0.1]]); // 创建一个test图层，不透明度0.2，其中在(25,11)点存在一个半径为46的灯光效果，灯光中心不透明度0.1。
	// core.plugin.drawLight('test2', 0.9, [[25,11,46],[105,121,88],[301,221,106]]); // 创建test2图层，且存在三个灯光效果，分别是中心(25,11)半径46，中心(105,121)半径88，中心(301,221)半径106。
	// core.plugin.drawLight('xxx', 0.3, [[25,11,46],[105,121,88,0.2]], 0.4); // 存在两个灯光效果，它们在内圈40%范围内保持全亮，且40%后才开始衰减。
	this.drawLight = function (name, color, lights, lightDec) {

		// 清空色调层；也可以修改成其它层比如animate/weather层，或者用自己创建的canvas
		var ctx = core.getContextByName(name);
		if (ctx == null) {
			if (typeof name == 'string')
				ctx = core.createCanvas(name, 0, 0, core.__PIXELS__, core.__PIXELS__, 98);
			else return;
		}

		ctx.mozImageSmoothingEnabled = false;
		ctx.webkitImageSmoothingEnabled = false;
		ctx.msImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;

		core.clearMap(name);
		// 绘制色调层，默认不透明度
		if (color == null) color = 0.9;
		ctx.fillStyle = "rgba(0,0,0," + color + ")";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		lightDec = core.clamp(lightDec, 0, 1);

		// 绘制每个灯光效果
		ctx.globalCompositeOperation = 'destination-out';
		lights.forEach(function (light) {
			// 坐标，半径，中心不透明度
			var x = light[0],
				y = light[1],
				r = light[2];
			// 计算衰减距离
			var decDistance = parseInt(r * lightDec);
			// 正方形区域的直径和左上角坐标
			var grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
			grd.addColorStop(0, "rgba(0,0,0,1)");
			grd.addColorStop(1, "rgba(0,0,0,0)");
			ctx.beginPath();
			ctx.fillStyle = grd;
			ctx.arc(x, y, r, 0, 2 * Math.PI);
			ctx.fill();
		});
		ctx.globalCompositeOperation = 'source-over';
		// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();
	}
}
}