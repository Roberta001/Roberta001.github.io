main.floors.MT29=
{
    "floorId": "MT29",
    "title": "魔塔 第29层",
    "name": "第 29 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  0,  0,  1,  1,  0,123,  0,  1,  1,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1, 88,  0,  1,  1,  0, 87,  0,  1,  1,  1,  1,  1],
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
        "6,2": [
            "\t[小偷,thief]你来的正好 我这边暗道完工了 一起走吧",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    2
                ],
                "time": 200,
                "steps": [
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down"
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        11,
                        11
                    ]
                ],
                "floorId": "MT2",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,11": {
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
        6,
        10
    ],
    "downFloor": [
        1,
        10
    ],
    "autoEvent": {}
}