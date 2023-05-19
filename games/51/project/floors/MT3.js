main.floors.MT3=
{
    "floorId": "MT3",
    "title": "魔塔 第03层",
    "name": "第 3 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21, 28,  1, 21, 32, 21,  1,  0,  1,  0, 31,  1],
    [  1,  0, 31,  1, 32, 21, 32,  1,  0, 81,205,  0,  1],
    [  1,217,  0,  1, 21, 22, 21,  1,  0,  1,  1,  1,  1],
    [  1, 81,  1,  1,  1,  0,  1,  1,  0,  1,  0,121,  1],
    [  1,  0,  0,205,  0,  0,  0,201,  0,  0,  0,  0,  1],
    [  1, 81,  1,  1,  0,  0,  0,  1,  0,  1,  1,  1,  1],
    [  1,209,  0,  1,  1,245,  1,  1,  0,  1,  0, 31,  1],
    [  1,  0, 21,  1,  0,126,  0,  1,  0, 81,217, 21,  1],
    [  1, 31, 27,  1,126,  0,126,  1,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,126,  1,  1,202,  1,  0,  0,  1],
    [  1, 88,  0,  0,  0,  0,  0,  1,  0, 81,  0, 87,  1],
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
        "4,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "5,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "5,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "5,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:03",
                "value": "1"
            },
            {
                "type": "playSound",
                "name": "3F.mp3"
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "time": 500
            },
            "\t[魔王,redKing]欢迎来到魔塔 你是第100位挑战者 你若能打败我所有的手下 我就与你一对一的决斗 现在你必须接受我的安排",
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        8
                    ],
                    [
                        4,
                        9
                    ],
                    [
                        6,
                        9
                    ],
                    [
                        5,
                        10
                    ]
                ],
                "time": 500
            },
            "\t[hero]什么",
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 1000,
                "async": true
            },
            {
                "type": "playSound",
                "name": "zone.mp3",
                "stop": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "playSound",
                "name": "zone.mp3"
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "playSound",
                "name": "zone.mp3"
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "playSound",
                "name": "zone.mp3"
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "playSound",
                "name": "zone.mp3"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "400"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "flag:03",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:nowWeapon",
                "value": "null"
            },
            {
                "type": "setValue",
                "name": "flag:nowShield",
                "value": "null"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ],
                    [
                        5,
                        8
                    ],
                    [
                        4,
                        9
                    ],
                    [
                        6,
                        9
                    ],
                    [
                        5,
                        10
                    ]
                ],
                "time": 0
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "changeFloor",
                "floorId": "MT2",
                "loc": [
                    3,
                    8
                ],
                "direction": "down",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "11,11": {
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
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        10,
        11
    ],
    "downFloor": [
        2,
        11
    ],
    "autoEvent": {}
}