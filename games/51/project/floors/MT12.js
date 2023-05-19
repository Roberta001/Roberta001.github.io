main.floors.MT12=
{
    "floorId": "MT12",
    "title": "魔塔 第12层",
    "name": "第 12 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,122,  3,  0,  1, 21, 27, 21,  1,  0,  3,  3,  1],
    [  1,  1,  1,206,  1,  0,  1,  0,  1,  0,  1,  1,  1],
    [  1,  0,  0,  0,  1,218,  0,218,  1,  0,213,  0,  1],
    [  1, 81,  1,  1,  1,  1, 81,  1,  1,  1,  1,  0,  1],
    [  1,  0,218,  0, 81,  0,213,  0,  1, 31,  0,206,  1],
    [  1,  1,  1,  1,  1,  0,  0,218, 81,  0, 28,  0,  1],
    [  1, 21, 21,  0,  1,  0, 32,  0,  1, 21,  0,203,  1],
    [  1, 21, 22,  0,  1,  1,  1,  1,  1, 82,  1, 81,  1],
    [  1,  0,  0,213,  1,  7,131,  8,  1,203,  0,213,  1],
    [  1,  1,  1, 81,  1, 31,  0, 31,  1,  1,  0,  1,  1],
    [  1, 87,  0,  0,205,  0,  0,  0,205,  0,  0, 88,  1],
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
    "events": {
        "1,1": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "insert",
                        "name": "老人",
                        "args": [
                            0
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "insert",
                        "name": "商人",
                        "args": [
                            0
                        ]
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "flag:12",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[商人,woman]本店有很多黄钥匙，1000金币1把要吗？",
                        "choices": [
                            {
                                "text": "我太需要了",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:money>=1000",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "status:money",
                                                "value": "-1000"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "item:yellowKey",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    1
                                                ]
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "tip",
                                                "text": "你的金币不足1000枚，无法交易！"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    1
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "下次再说",
                                "action": [
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setBlock",
                        "number": "fairy"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:12",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:ratio",
                "value": "2"
            },
            {
                "type": "setValue",
                "name": "flag:shopratio",
                "value": "Math.max(core.getFlag('shopratio', 1), core.getFlag('ratio', 1))"
            },
            {
                "type": "insert",
                "name": "商店"
            }
        ]
    },
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
        2,
        11
    ],
    "downFloor": [
        10,
        11
    ],
    "autoEvent": {}
}