main.floors.MT31=
{
    "floorId": "MT31",
    "title": "魔塔 第31层",
    "name": "第 31 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0, 21, 21,  1, 88,  1,  0,  0, 31,121,  1],
    [  1,224,  0, 21, 21,  1,  0,  1,225,  0,  0,  0,  1],
    [  1,  0,225,  1,  1,  1,  0,  1, 81,  1,212,212,  1],
    [  1,  0,  0, 81, 22,  1,  0,  1, 27,  1,  0,  0,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  1,  1,  1, 81,  1],
    [  1,  0,212,  0,  0,  0,  0,  0,  0,  0,212,  0,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  1,  1,  1, 81,  1],
    [  1,  0,  0,  1, 28,  1,214,  1, 32, 81,  0,  0,  1],
    [  1,212,212,  1, 81,  1,214,  1,  1,  1,216,  0,  1],
    [  1,  0,  0,  0,227,  1,  0,  1, 21, 21,  0,216,  1],
    [  1,122, 31,  0,  0,  1, 87,  1, 21, 21,  0,  0,  1],
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
    "fgmap": [

],
    "bgmap": [

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