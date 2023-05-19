main.floors.MT24=
{
    "floorId": "MT24",
    "title": "魔塔 第24层",
    "name": "第 24 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  0,  0,  0,  1],
    [  1,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,  1,  1,  1,  0,  0,  0,  1,  1,  1,  0,  1],
    [  1,  0,  1,  1,  1,  0,  0,  0,  1,  1,  1,  0,  1],
    [  1,  0,  1,  1,  1,  0,  0,  0,  1,  1,  1,  0,  1],
    [  1,  0,  1,  1,  1,  1, 83,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1,  1,  1,  0,  1,  1,  1,  0,  0,  1],
    [  1,  0, 87,  0,  1,  1,  0,  1,  1,  0,  0,  0,  1],
    [  1, 88,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section3.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "changeFloor",
                    "floorId": "MT50",
                    "loc": [
                        6,
                        7
                    ],
                    "direction": "down",
                    "time": 200
                }
            ]
        }
    },
    "changeFloor": {
        "2,10": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "1,11": {
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
        2,
        11
    ],
    "downFloor": [
        2,
        11
    ],
    "autoEvent": {}
}