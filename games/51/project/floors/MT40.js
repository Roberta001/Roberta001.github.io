main.floors.MT40=
{
    "floorId": "MT40",
    "title": "魔塔 第40层",
    "name": "第 40 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,226,  0,  0,  0,  0,  0,  1],
    [  1,  0,224,224,224,  0,  0,  0,227,227,227,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,212,212,212,  0,225,225,225,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1,  1],
    [  1, 28, 21,  0,  1,216,  0,216,  1, 31,224,  0,  1],
    [  1, 32,  0,  0,  1,  0,  0,  0,  1,225,  0,  0,  1],
    [  1, 27,  0,227, 82,  0,  0,  0, 81,  0,  0, 88,  1],
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
    "events": {
        "6,7": [
            {
                "type": "if",
                "condition": "core.getBlockId(6,8)=='redDoor'",
                "true": [],
                "false": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            8
                        ]
                    }
                ]
            },
            {
                "type": "playBgm",
                "name": "boss4.mp3"
            },
            {
                "type": "function",
                "function": "function(){\ncore.material.enemys.ghostSkeleton.special = 1;\ncore.material.enemys.soldier.special = 1;\ncore.material.enemys.swordsman.special = 1;\ncore.material.enemys.redKnight.special = 1;\ncore.material.enemys.yellowKnight.special = 1;\ncore.insertAction([\n\t{ \"type\": \"update\" },\n]);\n}"
            },
            "\t[骑士队长,yellowKnight]我还在担心你不能来了。我确信这次我一定能杀了你。给我上！",
            {
                "type": "function",
                "function": "function(){\nvar a = new Array([3, 4], [4, 4], [5, 4], [7, 4], [8, 4], [9, 4], [2, 2], [3, 2], [4, 2], [8, 2], [9, 2], [10, 2]);\nfor (var i = 11; i > -1; i--) {\n\tif (core.getBlockId(a[i][0], a[i][1]) == null) {\n\t\tcontinue;\n\t}\n\tcore.insertAction([{ \"type\": \"sleep\", \"time\": 300 }, ]);\n\tcore.insertAction([{\n\t\t\"type\": \"battle\",\n\t\t\"loc\": [\n\t\t\ta[i][0], a[i][1]\n\t\t]\n\t}, ]);\n}\n}"
            },
            "\t[骑士队长,yellowKnight]你怎会击败我所有的手下？我和你誓不两立我决不认输。",
            {
                "type": "battle",
                "loc": [6, 1]
            },
            {
                "type": "function",
                "function": "function(){\ncore.material.enemys.ghostSkeleton.special = 0;\ncore.material.enemys.soldier.special = 0;\ncore.material.enemys.swordsman.special = 0;\ncore.material.enemys.redKnight.special = 0;\ncore.material.enemys.yellowKnight.special = 0;\ncore.insertAction([\n\t{ \"type\": \"update\" },\n]);\n}"
            },
            {
                "type": "if",
                "condition": "core.getBlockId(6,8)=='redDoor'",
                "true": [],
                "false": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            8
                        ]
                    }
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "time": 0
            }
        ],
        "0,7": [
            {
                "type": "if",
                "condition": "flag:402",
                "true": [],
                "false": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            [
                                2,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            [
                                3,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "21",
                        "loc": [
                            [
                                4,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "27",
                        "loc": [
                            [
                                8,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "27",
                        "loc": [
                            [
                                9,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "27",
                        "loc": [
                            [
                                10,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "32",
                        "loc": [
                            [
                                3,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "32",
                        "loc": [
                            [
                                4,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "32",
                        "loc": [
                            [
                                5,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "28",
                        "loc": [
                            [
                                7,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "28",
                        "loc": [
                            [
                                8,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "28",
                        "loc": [
                            [
                                9,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "87",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setValue",
                        "name": "flag:402",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "flag:402",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT41",
                        "loc": [
                            6,
                            2
                        ],
                        "direction": "down",
                        "time": 0
                    }
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "2,2": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,2": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "4,2": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,2": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,2": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,2": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "4,4": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,4": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "flag:40==12",
                "true": [
                    "\t[骑士队长,yellowKnight]这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:40",
                        "value": "1"
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
    "upFloor": [
        6,
        2
    ],
    "downFloor": [
        10,
        11
    ],
    "autoEvent": {}
}