main.floors.MT47=
{
    "floorId": "MT47",
    "title": "魔塔 第47层",
    "name": "第 47 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 82,  0,  0,  0, 81,  0,  0,  0, 21,  1],
    [  1,  0,  0,  1,  0,122,  0,  1,229,  1,  1, 28,  1],
    [  1,  0,  1,  1,  1,  1,  1,  1,  0,204,  0, 21,  1],
    [  1,  0,  1,  0, 81,220,  0,  1, 81,  1,  1,  1,  1],
    [  1,  0,  1,207,  1,  0,219,  1,  0,219,  0,  0,  1],
    [  1,  0, 81,  0,  1,  0,  0,  1, 21,  0,  0,207,  1],
    [  1,  0,  1,  0,  1, 22, 21,  1,  1,  1,  1, 81,  1],
    [  1,  0,  1,  0, 82, 27, 28,  1,  0,  0,  0,  0,  1],
    [  1,229,  1,  1,  1,  1,  1,  1,204,  1,  1,  1,  1],
    [  1,  0,  0,  1, 31,  0, 27,  1,  0,  1,  0,  0,  1],
    [  1,  0,  0, 81,  0,219,  0, 81,  0,  0,  0, 88,  1],
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