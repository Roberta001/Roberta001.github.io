main.floors.MT8=
{
    "floorId": "MT8",
    "title": "魔塔 第08层",
    "name": "第 8 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 81, 81,  0, 87,  0,  1, 21,  0, 21,  1],
    [  1,  0,  0,  1,  1,  0,  0,201,  1,  0, 23,  0,  1],
    [  1, 81,  1,  1,  1,  1, 81,  1,  1, 32,  0, 31,  1],
    [  1,  0,  1, 21, 21, 21,  0,  0,  1,  1, 85,  1,  1],
    [  1, 31,  1,  1,  1,  1,  1,217,  1,221,  0,221,  1],
    [  1,  0,202,201,202,  0,  1,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1, 81,  1,205,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,205,  0,209,  0,217,  0,  0,  0,  1],
    [  1, 81,  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,201,  0,  1, 27, 21,  1, 22, 31,  1,  0,209,  1],
    [  1,  0,205, 82, 21, 28,  1, 21,  0, 81,210,  0,  1],
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
        "6,1": {
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
    "afterBattle": {
        "9,5": [
            {
                "type": "if",
                "condition": "flag:8",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:8",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "if",
                "condition": "flag:8",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:8",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "fgmap": [

],
    "bgmap": [

],
    "upFloor": [
        6,
        2
    ],
    "downFloor": [
        1,
        2
    ],
    "autoEvent": {}
}