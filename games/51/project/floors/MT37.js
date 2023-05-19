main.floors.MT37=
{
    "floorId": "MT37",
    "title": "魔塔 第37层",
    "name": "第 37 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 81,  0,  0,  0,  0,  0,225,  0, 32,  1],
    [  1,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  1],
    [  1, 82,  1,  1, 31, 31,  1, 31, 31,  1,  1,227,  1],
    [  1,  0,  1, 31, 31, 21,  1, 31, 31, 31,  1,  0,  1],
    [  1,  0,  1, 21, 21, 49,  1, 23, 21, 21,  1,  0,  1],
    [  1, 31,  1,  1,  1,  1,  1,  1,  1,  1,  1,224,  1],
    [  1,  0,  1, 28, 27, 32,  1, 27, 27, 27,  1,  0,  1],
    [  1,  0,  1, 21, 21, 21,  1, 28, 28, 28,  1,  0,  1],
    [  1,225,  1,  1, 22, 22,  1, 32, 21,  1,  1,227,  1],
    [  1,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  1],
    [  1,121,  0,216,  0,  0,  0,  0,  0,212,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "fgmap": [

],
    "bgmap": [

],
    "upFloor": [
        2,
        1
    ],
    "downFloor": [
        11,
        10
    ],
    "autoEvent": {}
}