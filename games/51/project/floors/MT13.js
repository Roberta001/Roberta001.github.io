main.floors.MT13=
{
    "floorId": "MT13",
    "title": "魔塔 第13层",
    "name": "第 13 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  1,  1,  1,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  1,  1,  1,  1,  1,  5,  5,  5,  1],
    [  1,  5,  5,  5,  1,  1, 43,  1,  1,  5,  5,  5,  1],
    [  1,  5,  5,  5,  1,  1,  5,  1,  1,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  1,  5,  1,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  1],
    [  1,  1,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  0,  0,  0,  0,  0,  0,  0,  0, 87,  1],
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
    "events": {},
    "changeFloor": {
        "11,11": {
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
    "fgmap": [

],
    "bgmap": [

],
    "downFloor": [
        2,
        11
    ],
    "upFloor": [
        10,
        11
    ],
    "autoEvent": {}
}