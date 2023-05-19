main.floors.MT15=
{
    "floorId": "MT15",
    "title": "魔塔 第15层",
    "name": "第 15 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 28,214,  0, 81,  0, 87,  0,  1,123,  0,  0,  1],
    [  1,213,  0,  0,  1,  0,  0,  0,  1,  0,  0,203,  1],
    [  1,  0,  0,203,  1,  1, 85,  1,  1,  1,  1, 81,  1],
    [  1, 81,  1,  1,  1,  0, 47,  0,  1,206,  0,  0,  1],
    [  1,  0,  1, 21,  1,181,182,183,  1,  0,206,  0,  1],
    [  1,  0,  1, 22,  1,184,185,186,  1, 81,  1,218,  1],
    [  1,203,  1, 21,  1,187,258,188,  1,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,  0,  0,  0,  1,  0,  1, 32,  1],
    [  1,  0, 81,  0,  1,  1,  0,  1,  1, 81,  1,  1,  1],
    [  1,206,  1,206,  1,  0,  0,  0,  1,  0,205,  0,  1],
    [  1,  0,218,  0,  1,  0, 88,  0, 81,205,  0,122,  1],
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
        "11,11": [
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
        "9,1": [
            "\t[小偷,thief]阿哈 你还好吗 这大章鱼挡住了我前进的道路 现在暗道终于完工了 你现在最好也躲开它 我要走了 再见",
            {
                "type": "openDoor",
                "loc": [
                    8,
                    1
                ]
            },
            {
                "type": "move",
                "loc": [
                    9,
                    1
                ],
                "time": 200,
                "steps": [
                    "left",
                    "left",
                    "left"
                ]
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,7": [
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
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
        6,
        10
    ],
    "autoEvent": {}
}