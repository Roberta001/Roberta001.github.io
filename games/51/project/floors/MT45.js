main.floors.MT45=
{
    "floorId": "MT45",
    "title": "魔塔 第45层",
    "name": "第 45 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  0,  0,  0,  0,  0,  0,  0,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1,  1],
    [  1, 27, 27,  0,  1,219,  0,220,  1,122,  0,  0,  1],
    [  1, 82,  1,228,  1,  0,  0,  0,  1,  0,  0,204,  1],
    [  1, 28, 28,  0,  1,220,  0,219,  1,  1,  1, 81,  1],
    [  1, 82,  1,228,  1,  1, 81,  1,  1,121,  1,  0,  1],
    [  1,  0,  0,  0, 81,  0,  0,207,  0,  0,  0, 21,  1],
    [  1,  1, 83,  1,  1,  1,  1,  1,  1,  1,220,  0,  1],
    [  1,  0,  0,  0,  1,228,  0,  1,246,  1,  1, 81,  1],
    [  1,  0, 51,  0, 85,  0,  0, 85,  0, 81,  0,  0,  1],
    [  1,  0,  0,  0,  1,228,  0,  1,246,  1,  0, 32,  1],
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
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "1,1": {
            "floorId": "MT43",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "8,9": [
            {
                "type": "if",
                "condition": "flag:451",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            10
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:451",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,11": [
            {
                "type": "if",
                "condition": "flag:451",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            10
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:451",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,9": [
            {
                "type": "if",
                "condition": "flag:452",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            10
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:452",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,11": [
            {
                "type": "if",
                "condition": "flag:452",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            10
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:452",
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
        10,
        1
    ],
    "downFloor": [
        2,
        1
    ],
    "autoEvent": {}
}