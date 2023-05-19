main.floors.MT34=
{
    "floorId": "MT34",
    "title": "魔塔 第34层",
    "name": "第 34 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 31,  1,  0, 21,  0,  1, 21, 21, 28,  1],
    [  1,  0,  0,  0, 81,216,  0,227, 81,  0, 21, 31,  1],
    [  1,  0,216,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1, 81,  1,  1,201,  1,224,  1,203,  1,225,  1],
    [  1,  0,  0,  0,  1, 81,  1, 81,  1, 81,  1, 81,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1, 81,  1, 81,  1, 81,  1, 81,  1],
    [  1,  1, 81,  1,  1,212,  1,202,  1,227,  1,205,  1],
    [  1,  0,  0,212,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,224,  1,  0, 81,  0,  0,  0, 81,225,  0, 31,  1],
    [  1, 32,225,  0,  1,  0, 87,  0,  1,  0, 21, 27,  1],
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
        "6,11": {
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
        "5,4": [
            {
                "type": "if",
                "condition": "flag:34==7",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "23",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:34",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "if",
                "condition": "flag:34==7",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "23",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:34",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "if",
                "condition": "flag:34==7",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "23",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:34",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "if",
                "condition": "flag:34==7",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "23",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:34",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "if",
                "condition": "flag:34==7",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "23",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:34",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "if",
                "condition": "flag:34==7",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "23",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:34",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,8": [
            {
                "type": "if",
                "condition": "flag:34==7",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "23",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:34",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "flag:34==7",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            5
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            1,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            3,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "23",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:34",
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
        10
    ],
    "downFloor": [
        1,
        2
    ],
    "autoEvent": {}
}