main.floors.MT36=
{
    "floorId": "MT36",
    "title": "魔塔 第36层",
    "name": "第 36 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,121,  0,225,  0,  0,  0,214,  0,227,  0, 88,  1],
    [  1,  0,  0,  1,  1,  1, 81,  1,  1,  1,  0,  0,  1],
    [  1,216,  1,  1,  1,  1,  0,  1,  1,  1,  1,216,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,227,  1,  1,  1,  0,212,  0,  1,  1,  1,224,  1],
    [  1,  0, 81,  0,  0,216,  0,216,  0,  0, 81,  0,  1],
    [  1,  0,  1,  1,  1,  0,227,  0,  1,  1,  1,227,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,224,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1,  1,  1, 81,  1,  1,  1,  0,  0,  1],
    [  1, 32,  0,225,  0, 21,  0,214,  0,224,  0, 87,  1],
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
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "11,1": {
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
        11,
        10
    ],
    "downFloor": [
        11,
        2
    ],
    "autoEvent": {}
}