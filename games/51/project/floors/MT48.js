main.floors.MT48=
{
    "floorId": "MT48",
    "title": "魔塔 第48层",
    "name": "第 48 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 32,  0,  1,  0,  0, 31, 31, 31,  0,  0,  1],
    [  1,  0,  0,121,  1, 82,  1,  1,  1,  1,  1, 82,  1],
    [  1,  0,220,  0,  1,  0,  1,246,  1,246,  1,  0,  1],
    [  1,  1, 82,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,204,  0,  0,  1,246,  1,246,  1,  0,  1],
    [  1,  0,  1,  1, 81,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,207,  1,  0,219,  0,  1,  0,  0,  0,219,  0,  1],
    [  1,  0,  1, 27,  0, 31,  1,  1, 85,  1,  1,  0,  1],
    [  1,219,  1,  1, 81,  1,  1,  0,  0,  0,  1,  0,  1],
    [  1,  0,  1,  0,228,  0,  1,  0, 41,  0,  1,  0,  1],
    [  1, 87,  1, 28,  0, 32,  1,  0,  0,  0,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,11": {
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
        1,
        10
    ],
    "downFloor": [
        11,
        10
    ],
    "autoEvent": {}
}