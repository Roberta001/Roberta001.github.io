main.floors.MT50=
{
    "floorId": "MT50",
    "title": "魔塔 第50层",
    "name": "第 50 层",
    "width": 13,
    "height": 13,
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,  1,  1,  1,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,  0,123,  0,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,  0,  0,  0,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,  0,  0,  0,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,  1,  1,  1,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "canFlyTo": false,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": null,
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": [
            "\t[hero]你怎会在这里！你到底是谁？",
            "\t[小偷,thief]我在这里只有一个理由，那就是…",
            {
                "type": "hide",
                "time": 500
            },
            {
                "type": "setBlock",
                "number": "249"
            },
            {
                "type": "show",
                "time": 500
            },
            "\t[hero]啊！你就是魔王！你怎么还活着？",
            "\t[redKing]我是不会死的。以前我只是对你的能力做测试而已。",
            "\t[hero]什么？你这是什么意思？你为什么要做这样的事情？",
            "\t[redKing]神圣剑 是你拥有的武器，智慧权杖 是我所拥有的武器。传说中说过无论谁使用它们都必需要有足够的智慧，且剑只能被真正的战士使用。",
            "\t[hero]如你所说我就是那个战士",
            "\t[redKing]是的，你是最合适的人选。但你刚到魔塔时，你的能力还不足以支配神圣剑。因此我在塔内安排了各类机关，让你通过战斗直到可以控制神圣剑。",
            "\t[hero]很好，那么外面传说有一个公主被困在魔塔，就是为了把我骗到这里。是这样的吗？",
            "\t[redKing]是的。现在如果我们能够合作那么闹剧就结束了。现在让我们一起用权杖破坏神圣剑，这样伟大的时代就要降临了。",
            "\t[hero]我不会让你毁了神圣剑, 让黑暗降临的。",
        ]
    },
    "changeFloor": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "if",
                "condition": "flag:addhp",
                "true": [
                    {
                        "type": "win",
                        "reason": "通关疯狂加血版魔塔"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(item:pickaxe>0 || item:earthquake>0) && item:downFly>0",
                        "true": [
                            {
                                "type": "animate",
                                "name": "zone",
                                "loc": "hero"
                            },
                            "\t[魔王,redKing]你是如此的强大…居然能打败我…什么…我居然被封印了…啊…",
                            {
                                "type": "if",
                                "condition": "flag:end==1",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "True End"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "True End（不穿墙通关）"
                                    }
                                ]
                            }
                        ],
                        "false": [
                            "\t[魔王,redKing]你是如此的强大…居然能打败我…但是你封印不了我…我还会复活的…哈哈哈哈…",
                            {
                                "type": "if",
                                "condition": "flag:end==1",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Normal End"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "Normal End（不穿墙通关）"
                                    }
                                ]
                            }
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
    "autoEvent": {}
}