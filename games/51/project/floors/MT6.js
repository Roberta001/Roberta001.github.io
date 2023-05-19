main.floors.MT6=
{
    "floorId": "MT6",
    "title": "魔塔 第06层",
    "name": "第 6 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  1, 21, 21,  1,  0,217,  0, 21,201,  0,  1],
    [  1,  0,  1, 21, 21,  1,  0,  1,  1,  1,  1, 81,  1],
    [  1,  0,  1,  1,202,  1,  0,  1, 31,  0,209,  0,  1],
    [  1,  0, 81, 81,  0, 81,  0,  1,122,  0,  0,205,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,202,217,  0, 21,  0,209,210,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,217,  0,  0,121,  1,  0, 81, 81,  0, 81,  0,  1],
    [  1,  0,205,  0, 28,  1,  0,  1,  1,202,  1,202,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,201,  0,  0,209,  0,  1, 31, 31,  1, 87,  1],
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
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "1,1": {
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
        1,
        2
    ],
    "autoEvent": {}
}