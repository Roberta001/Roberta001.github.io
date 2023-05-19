main.floors.MT10=
{
    "floorId": "MT10",
    "title": "魔塔 第10层",
    "name": "第 10 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,209,209,209,  1,  1,  0,  1,  1,209,209,209,  1],
    [  1,  0,210,  0, 85,  0,211,  0, 85,  0,210,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,209, 28,209,  1,  1,  0,  1,  1,209, 27,209,  1],
    [  1,  0,210,  0,  1,  1,  0,  1,  1,  0,210,  0,  1],
    [  1,  0,  0,  0,  1,  1,  0,  1,  1,  0,  0,  0,  1],
    [  1, 81,  1, 81,  1,  1, 83,  1,  1, 81,  1, 81,  1],
    [  1,123,  1,  0,  1,  0,  0,  0,  1,  0,  1,  0,  1],
    [  1, 88,  1,  0,217,  0, 87,  0,217,  0,  1, 32,  1],
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
    "events": {
        "6,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,5": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [],
                "false": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "playSound",
                        "name": "10F.mp3"
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "0",
                        "loc": [
                            5,
                            6
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "0",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[骷髅队长,skeletonCaptain]哈哈哈 你是如此的幸运能安全到达这里 但现在好运离你而去了 你中埋伏了 弟兄们给我上",
                    {
                        "type": "move",
                        "loc": [
                            6,
                            4
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "up",
                            "up",
                            "up"
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            2,
                            4
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "right",
                            "right",
                            "right",
                            "down",
                            "down",
                            "right"
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            10,
                            4
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "left",
                            "left",
                            "left",
                            "left"
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 600
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            3
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "down",
                            "right",
                            "right",
                            "down",
                            "down"
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            9,
                            3
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "down",
                            "left",
                            "left",
                            "down",
                            "down"
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 200
                    },
                    {
                        "type": "move",
                        "loc": [
                            2,
                            3
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "down",
                            "right",
                            "right",
                            "right",
                            "down"
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            10,
                            3
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "down",
                            "left",
                            "left",
                            "left",
                            "down"
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 200
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            3
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "down",
                            "right",
                            "right",
                            "right",
                            "right"
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            11,
                            3
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "down",
                            "left",
                            "left",
                            "left",
                            "left"
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            4,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            8,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,2": [
            "\t[骷髅队长,skeletonCaptain]你怎能杀出重围 我是绝不会让你通过的 来吧 我要与你决斗",
            {
                "type": "hide",
                "time": 0
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "flag:10==7",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                10
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            10
                        ],
                        "time": 200,
                        "keep": true,
                        "steps": [
                            "up",
                            "up",
                            "right",
                            "right",
                            "down",
                            "down",
                            "down",
                            "right",
                            "right",
                            "up",
                            "right"
                        ]
                    },
                    "\t[小偷,thief]你总算是帮我解决了这麻烦的骷髅队长 我终于可以上去了 我听说银盾在11楼 银剑在17楼 这消息不知道对你是否有用 下次见",
                    {
                        "type": "move",
                        "loc": [
                            6,
                            10
                        ],
                        "time": 200,
                        "steps": [
                            "down"
                        ]
                    },
                    {
                        "type": "hide",
                        "time": 0
                    }
                ],
                "false": []
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
    "afterBattle": {
        "5,4": [
            {
                "type": "if",
                "condition": "flag:10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:10",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,5": [
            {
                "type": "if",
                "condition": "flag:10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:10",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,6": [
            {
                "type": "if",
                "condition": "flag:10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:10",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,6": [
            {
                "type": "if",
                "condition": "flag:10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:10",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,6": [
            {
                "type": "if",
                "condition": "flag:10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:10",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "if",
                "condition": "flag:10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:10",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,5": [
            {
                "type": "if",
                "condition": "flag:10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:10",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "flag:10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:10",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,1": [
            "\t[骷髅队长,skeletonCaptain]不 这是不可能的 你怎会打败我 你别太得意 后面还有许多强大的对手和机关存在 你稍有疏忽就必死无疑",
            {
                "type": "playSound",
                "name": "door.mp3",
                "stop": true
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    1,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    2,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    3,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    9,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    10,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    11,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    1,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    2,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    3,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    9,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    10,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    11,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "0",
                "loc": [
                    6,
                    9
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "time": 0
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "time": 0
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    4
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    4
                ],
                "async": true
            },
            {
                "type": "waitAsync"
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
        10
    ],
    "autoEvent": {}
}