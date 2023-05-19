main.floors.MT16=
{
    "floorId": "MT16",
    "title": "魔塔 第16层",
    "name": "第 16 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21,206,  0,  1,  0, 88,  0,  1,  0,  0,206,  1],
    [  1, 21,218,  0, 81,  0,  0,  0, 81,203,  0,  0,  1],
    [  1, 21,206,  0,  1,213,  0, 21,  1,  0,  0, 31,  1],
    [  1,  1,  1,  1,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1, 27, 21,  0,  1, 31,  0,  0,  1,  0,213,  0,  1],
    [  1, 31,  0,215, 81,  0,214,  0,  1,  0,  0,  0,  1],
    [  1, 28, 21,  0,  1,  0,  0, 21,  1,206,  0, 22,  1],
    [  1,  1,  3,  1,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,  0,203,  0,  1,206,  0,206,  1,  0,218,  0,  1],
    [  1,  0,  0,  0, 81,  0,  0,  0, 81,  0,  1,  1,  1],
    [  1,121,  0,  0,  1,  0, 87,  0,  1,216,  3,320,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,11": [
            {
                "type": "playSound",
                "name": "door.mp3"
            },
            "\t[man]很好，你居然找到了我。作为奖励我将给你一瓶圣水。用<T>可以查看它。喝了它将按你的攻击和防御力增加你的生命点数，你越晚用它效果越好。",
            {
                "type": "function",
                "function": "function(){\ncore.addItem(\"superPotion\")\n}"
            },
            {
                "type": "hide",
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        6,
        10
    ],
    "downFloor": [
        6,
        2
    ],
    "autoEvent": {}
}