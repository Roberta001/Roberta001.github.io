main.floors.MT35=
{
    "floorId": "MT35",
    "title": "魔塔 第35层",
    "name": "第 35 层",
    "width": 13,
    "height": 13,
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
        "5,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[小偷,thief]你好 暗道已挖好 你可用它绕过魔龙 我听说骑士队长实力差又爱吹牛 所以被魔法警卫们讨厌 这魔塔太危险了 我可不想再次被抓 我要离塔回去了 再见",
                {
                    "type": "openDoor",
                    "loc": [
                        4,
                        10
                    ]
                },
                {
                    "type": "hide",
                    "time": 500
                }
            ]
        }
    },
    "changeFloor": {
        "11,1": {
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
                    2
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0, 87,  1],
    [  1,  2,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1,  2,  1,  2,  1, 32, 32, 32,  1,  1,  1,  1,  1],
    [  1,  2,  1,  2,  1,  0, 54,  0,  1,  1,  1,  1,  1],
    [  1,  2,  1,  2,  1,189,190,191,  1,  1,  1,  1,  1],
    [  1,  2,  1,  2,  1,192,193,194,  1,  1,  1,  1,  1],
    [  1,  2,  1,  2,  1,195,257,196,  1,  1,  1,  1,  1],
    [  1,  2,  1,  2,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  2,  1,  2,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  2,  1,  2,  1,123,  0,  0,  1,  1,  1,  1,  1],
    [  1,  2,  2,  2,  1,  0, 88,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "downFloor": [
        6,
        10
    ],
    "upFloor": [
        10,
        1
    ],
    "autoEvent": {}
}