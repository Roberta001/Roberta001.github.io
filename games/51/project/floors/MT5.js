main.floors.MT5=
{
    "floorId": "MT5",
    "title": "魔塔 第05层",
    "name": "第 5 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  1,  0,202, 81,  0,  1,  0,  0, 81,  0,  1],
    [  1,  0,  1,  0,  0,  1, 21,  1,201,201,  1,202,  1],
    [  1,  0, 81,205,  0,  1,  0,  1, 21, 21,  1,  0,  1],
    [  1,  1,  1,  1, 81,  1,205,  1, 21, 21,  1,  0,  1],
    [  1, 21,  0,217,  0,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1, 21,  0,  0,205,  1,  0,201,  0,  0,  0,  0,  1],
    [  1,  1,210,  1,  1,  1,  0,  1,  1,  1,  1,202,  1],
    [  1,  0,  0,  0,  0,  1,201,  1,  0,  0,  0,  0,  1],
    [  1, 28, 21, 31, 73,  1,  0,  1, 81,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  0,  1,  0,  0,  1],
    [  1, 88,  0,  0,  0,  0,  0,  1,  0,  3,  0, 35,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section1.mp3",
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
    "upFloor": [
        1,
        2
    ],
    "downFloor": [
        2,
        11
    ],
    "autoEvent": {}
}