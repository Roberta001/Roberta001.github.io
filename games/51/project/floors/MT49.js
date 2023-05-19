main.floors.MT49=
{
    "floorId": "MT49",
    "title": "魔塔 第49层",
    "name": "第 49 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  0,  0,246,246,246,  0,  0,  1,  1,  1],
    [  1,  1,  0,  0,  0,246,245,246,  0,  0,  0,  1,  1],
    [  1,  0,  0,  0,  0,246,246,246,  0,  0,  0,  0,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,  1, 85,  1,  1,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,228,  0,228,  1,  0,  1,  0,  1],
    [  1,  0,  0,  0,  1,  1, 85,  1,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,220,  0,220,  1,  1,  1,  1,  1],
    [  1, 88,  0, 83,  0,  0,  0,  0,  0,  0,  0,  0,  1],
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
    "events": {
        "5,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,2": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,2": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,2": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:炸弹不开门",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "core.getBlockId(6,7)=='specialDoor'",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:493",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "time": 500
            },
            "\t[魔王,redKing]你终于来啦 我好想和你干一把 但是我的部下不同意",
            {
                "type": "playBgm",
                "name": "boss5.mp3"
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        2
                    ],
                    [
                        6,
                        2
                    ],
                    [
                        7,
                        2
                    ],
                    [
                        5,
                        3
                    ],
                    [
                        7,
                        3
                    ],
                    [
                        5,
                        4
                    ],
                    [
                        6,
                        4
                    ],
                    [
                        7,
                        4
                    ]
                ],
                "time": 500
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "6,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "5,10": [
            {
                "type": "if",
                "condition": "flag:491",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:491",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,10": [
            {
                "type": "if",
                "condition": "flag:491",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:491",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "if",
                "condition": "flag:492",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:492",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "if",
                "condition": "flag:492",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:492",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:494",
                "value": "0"
            }
        ],
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:494",
                "value": "0"
            }
        ],
        "7,2": [
            {
                "type": "setValue",
                "name": "flag:494",
                "value": "0"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:494",
                "value": "0"
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "flag:494==3",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:495",
                        "value": "1"
                    },
                    {
                        "type": "function",
                        "function": "function(){\nif (core.hasFlag('495')) { \t\tcore.material.enemys.redKing.hp = 800; \t\tcore.material.enemys.redKing.atk = 500; \t\tcore.material.enemys.redKing.def = 100; \t} else { \t\tcore.material.enemys.redKing.hp = 8000; \t\tcore.material.enemys.redKing.atk = 5000; \t\tcore.material.enemys.redKing.def = 1000; \t}\n}"
                    },
                    {
                        "type": "update"
                    },
                    "\t[魔王,redKing]完蛋了 我被封印了 功力只剩一成"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:494",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,3": [
            {
                "type": "if",
                "condition": "flag:494==3",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:495",
                        "value": "1"
                    },
                    {
                        "type": "function",
                        "function": "function(){\nif (core.hasFlag('495')) { \t\tcore.material.enemys.redKing.hp = 800; \t\tcore.material.enemys.redKing.atk = 500; \t\tcore.material.enemys.redKing.def = 100; \t} else { \t\tcore.material.enemys.redKing.hp = 8000; \t\tcore.material.enemys.redKing.atk = 5000; \t\tcore.material.enemys.redKing.def = 1000; \t}\n}"
                    },
                    {
                        "type": "update"
                    },
                    "\t[魔王,redKing]完蛋了 我被封印了 功力只剩一成"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:494",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,2": [
            {
                "type": "if",
                "condition": "flag:494==3",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:495",
                        "value": "1"
                    },
                    {
                        "type": "function",
                        "function": "function(){\nif (core.hasFlag('495')) { \t\tcore.material.enemys.redKing.hp = 800; \t\tcore.material.enemys.redKing.atk = 500; \t\tcore.material.enemys.redKing.def = 100; \t} else { \t\tcore.material.enemys.redKing.hp = 8000; \t\tcore.material.enemys.redKing.atk = 5000; \t\tcore.material.enemys.redKing.def = 1000; \t}\n}"
                    },
                    {
                        "type": "update"
                    },
                    "\t[魔王,redKing]完蛋了 我被封印了 功力只剩一成"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:494",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,3": [
            {
                "type": "if",
                "condition": "flag:494==3",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:495",
                        "value": "1"
                    },
                    {
                        "type": "function",
                        "function": "function(){\nif (core.hasFlag('495')) { \t\tcore.material.enemys.redKing.hp = 800; \t\tcore.material.enemys.redKing.atk = 500; \t\tcore.material.enemys.redKing.def = 100; \t} else { \t\tcore.material.enemys.redKing.hp = 8000; \t\tcore.material.enemys.redKing.atk = 5000; \t\tcore.material.enemys.redKing.def = 1000; \t}\n}"
                    },
                    {
                        "type": "update"
                    },
                    "\t[魔王,redKing]完蛋了 我被封印了 功力只剩一成"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:494",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,3": [
            "\t[魔王,redKing]很好嘛 你通过了我的面试 你是个合格的勇士",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ],
                    [
                        5,
                        3
                    ],
                    [
                        7,
                        3
                    ],
                    [
                        5,
                        4
                    ],
                    [
                        6,
                        4
                    ],
                    [
                        7,
                        4
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "23",
                "loc": [
                    5,
                    2
                ]
            },
            {
                "type": "setBlock",
                "number": "62",
                "loc": [
                    7,
                    2
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    2,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    3,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    4,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    8,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    9,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    10,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    5,
                    5
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    6,
                    5
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    7,
                    5
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        2
                    ],
                    [
                        7,
                        2
                    ]
                ],
                "time": 0
            },
            {
                "type": "if",
                "condition": "flag:493",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    }
                ],
                "false": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [

],
    "fgmap": [

],
    "downFloor": [
        2,
        11
    ],
    "autoEvent": {}
}