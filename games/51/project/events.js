var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1表示当前应该的加点数值"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"value": "status:atk+1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${2*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"value": "status:def+2*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${200*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"value": "status:hp+200*flag:arg1"
							}
						]
					}
				]
			}
		],
		"毒衰咒处理": [
			{
				"type": "comment",
				"text": "获得毒衰咒效果，flag:arg1为要获得的类型"
			},
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "0",
						"action": [
							{
								"type": "comment",
								"text": "获得毒效果"
							},
							{
								"type": "if",
								"condition": "!flag:poison",
								"true": [
									{
										"type": "setValue",
										"name": "flag:poison",
										"value": "true"
									}
								],
								"false": []
							}
						]
					},
					{
						"case": "1",
						"action": [
							{
								"type": "comment",
								"text": "获得衰效果"
							},
							{
								"type": "if",
								"condition": "!flag:weak",
								"true": [
									{
										"type": "setValue",
										"name": "flag:weak",
										"value": "true"
									},
									{
										"type": "if",
										"condition": "core.values.weakValue>=1",
										"true": [
											{
												"type": "comment",
												"text": ">=1：直接扣数值"
											},
											{
												"type": "addValue",
												"name": "status:atk",
												"value": "-core.values.weakValue"
											},
											{
												"type": "addValue",
												"name": "status:def",
												"value": "-core.values.weakValue"
											}
										],
										"false": [
											{
												"type": "comment",
												"text": "<1：扣比例"
											},
											{
												"type": "function",
												"function": "function(){\ncore.addBuff('atk', -core.values.weakValue);\n}"
											},
											{
												"type": "function",
												"function": "function(){\ncore.addBuff('def', -core.values.weakValue);\n}"
											}
										]
									}
								],
								"false": []
							}
						]
					},
					{
						"case": "2",
						"action": [
							{
								"type": "comment",
								"text": "获得咒效果"
							},
							{
								"type": "if",
								"condition": "!flag:curse",
								"true": [
									{
										"type": "setValue",
										"name": "flag:curse",
										"value": "true"
									}
								],
								"false": []
							}
						]
					}
				]
			}
		],
		"滑冰事件": [
			{
				"type": "comment",
				"text": "公共事件：滑冰事件"
			},
			{
				"type": "if",
				"condition": "core.canMoveHero()",
				"true": [
					{
						"type": "comment",
						"text": "检测下一个点是否可通行"
					},
					{
						"type": "setValue",
						"name": "flag:nx",
						"value": "core.nextX()"
					},
					{
						"type": "setValue",
						"name": "flag:ny",
						"value": "core.nextY()"
					},
					{
						"type": "if",
						"condition": "core.noPass(flag:nx, flag:ny)",
						"true": [
							{
								"type": "comment",
								"text": "不可通行，触发下一个点的事件"
							},
							{
								"type": "trigger",
								"loc": [
									"flag:nx",
									"flag:ny"
								]
							}
						],
						"false": [
							{
								"type": "comment",
								"text": "可通行，先移动到下个点，然后检查阻激夹域，并尝试触发该点事件"
							},
							{
								"type": "moveHero",
								"time": 80,
								"steps": [
									"forward"
								]
							},
							{
								"type": "function",
								"function": "function(){\ncore.checkBlock();\n}"
							},
							{
								"type": "comment",
								"text": "【触发事件】如果该点存在事件则会立刻结束当前事件"
							},
							{
								"type": "trigger",
								"loc": [
									"flag:nx",
									"flag:ny"
								]
							},
							{
								"type": "comment",
								"text": "如果该点不存在事件，则继续检测该点是否是滑冰点"
							},
							{
								"type": "if",
								"condition": "core.getBgNumber() == 167",
								"true": [
									{
										"type": "function",
										"function": "function(){\ncore.insertAction(\"滑冰事件\",null,null,null,true)\n}"
									}
								],
								"false": []
							}
						]
					}
				],
				"false": []
			}
		],
		"回收钥匙商店": [
			{
				"type": "choices",
				"choices": [
					{
						"text": "游戏简介",
						"action": [
							"h5版本是按照flash版复刻，其中部分对话使用的魔塔盛宴的版本。",
							"地图复制：数码宝贝51、641\n部分事件复制：小艾\n默认背景音乐：无；可在切换音乐处设置\n游戏音乐、怪物显伤等开关可以在系统设置里打开和关闭",
							"想要获得更详细的介绍，可以在菜单——游戏信息——游戏主页中进入本塔的评论区，查看置顶评论。",
							{
								"type": "insert",
								"name": "回收钥匙商店"
							}
						]
					},
					{
						"text": "游戏结局",
						"action": [
							{
								"type": "if",
								"condition": "flag:addhp",
								"true": [
									"疯狂加血模式下，本塔有且仅有一个专属结局。",
									{
										"type": "insert",
										"name": "回收钥匙商店"
									}
								],
								"false": [
									"本塔共有四个结局。\n在原版魔塔中，使用下楼器和破墙镐（或下楼器和地震卷轴）可以封印魔王，因此，这个版本如保留下楼器和破墙镐（或下楼器和地震卷轴）击败魔王，即可打出True End，否则为Normal End。",
									"不论是Normal End还是True End，都分为穿墙结局和不穿墙结局，如果从未使用对话穿墙，可以打出不穿墙结局。",
									{
										"type": "insert",
										"name": "回收钥匙商店"
									}
								]
							}
						]
					},
					{
						"text": "对话穿墙",
						"action": [
							"在与老人对话后，或购买商人的物品并再次对话后，可以立即清除，或走一步再清除身边的某一堵墙（不必是暗墙）。",
							"这期间不能瞬移、打怪、开门和使用道具，否则穿墙会失败。",
							{
								"type": "insert",
								"name": "回收钥匙商店"
							}
						]
					},
					{
						"text": "切换音乐",
						"action": [
							{
								"type": "choices",
								"choices": [
									{
										"text": "精灵石 3个小萝莉在一起",
										"action": [
											{
												"type": "setValue",
												"name": "flag:bgm",
												"value": "1"
											},
											{
												"type": "playBgm",
												"name": "xiaoluoli.mp3"
											}
										]
									},
									{
										"text": "精灵石 晚上家里和镇子",
										"action": [
											{
												"type": "setValue",
												"name": "flag:bgm",
												"value": "2"
											},
											{
												"type": "playBgm",
												"name": "wan.mp3"
											}
										]
									},
									{
										"text": "精灵石 黄昏的镇子",
										"action": [
											{
												"type": "setValue",
												"name": "flag:bgm",
												"value": "3"
											},
											{
												"type": "playBgm",
												"name": "huang.mp3"
											}
										]
									},
									{
										"text": "仙境传说-守候永恒的爱",
										"action": [
											{
												"type": "setValue",
												"name": "flag:bgm",
												"value": "4"
											},
											{
												"type": "playBgm",
												"name": "xian.mp3"
											}
										]
									},
									{
										"text": "精灵石 精灵石传说",
										"action": [
											{
												"type": "setValue",
												"name": "flag:bgm",
												"value": "5"
											},
											{
												"type": "playBgm",
												"name": "chuanshuo.mp3"
											}
										]
									},
									{
										"text": "精灵石 ed【神曲】",
										"action": [
											{
												"type": "setValue",
												"name": "flag:bgm",
												"value": "6"
											},
											{
												"type": "playBgm",
												"name": "ed.mp3"
											}
										]
									},
									{
										"text": "精灵石 幸福之花",
										"action": [
											{
												"type": "setValue",
												"name": "flag:bgm",
												"value": "7"
											},
											{
												"type": "playBgm",
												"name": "hua.mp3"
											}
										]
									},
									{
										"text": "精灵石 迷宫",
										"action": [
											{
												"type": "setValue",
												"name": "flag:bgm",
												"value": "8"
											},
											{
												"type": "playBgm",
												"name": "migong.mp3"
											}
										]
									},
									{
										"text": "离开",
										"action": []
									}
								]
							},
							{
								"type": "insert",
								"name": "回收钥匙商店"
							}
						]
					},
					{
						"text": "返回游戏",
						"action": []
					}
				]
			}
		],
		"对话": [
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "2",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'谢谢你救了我，为了感谢你的帮助请收下这些礼物。'"
							},
							{
								"type": "setValue",
								"name": "flag:对话2",
								"value": "1"
							}
						]
					},
					{
						"case": "3",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'我给你怪物手册<快捷键x> 它能预测出当前楼层各类怪物对你的伤害'"
							},
							{
								"type": "setValue",
								"name": "flag:对话3",
								"value": "1"
							}
						]
					},
					{
						"case": "4",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'你是否发现每次对话之后你都有一种神秘的能力'"
							},
							{
								"type": "setValue",
								"name": "flag:对话4",
								"value": "1"
							}
						]
					},
					{
						"case": "6",
						"action": [
							{
								"type": "if",
								"condition": "flag:arg2 == 4",
								"true": [
									{
										"type": "setValue",
										"name": "flag:content",
										"value": "'购买物品之后再与商人对话，他会告诉你一些重要的消息。'"
									},
									{
										"type": "setValue",
										"name": "flag:对话6",
										"value": "1"
									}
								],
								"false": [
									{
										"type": "setValue",
										"name": "flag:content",
										"value": "'魔塔共有50层，每10层为一个区域。如果不打败此区域的头目就不能到更高的地方。'"
									},
									{
										"type": "setValue",
										"name": "flag:对话602",
										"value": "1"
									}
								]
							}
						]
					},
					{
						"case": "7",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'你的攻击比敌人防御高时就能对他造成伤害 你防御比敌人攻击高或一样时就能无伤'"
							},
							{
								"type": "setValue",
								"name": "flag:对话7",
								"value": "1"
							}
						]
					},
					{
						"case": "12",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'本塔有很多暗墙 比如5 9 12 14 16 18层 你都找到了吗'"
							},
							{
								"type": "setValue",
								"name": "flag:对话12",
								"value": "1"
							}
						]
					},
					{
						"case": "15",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'十字架对兽人和吸血鬼是神器 它被藏在这之上的某层中'"
							},
							{
								"type": "setValue",
								"name": "flag:对话15",
								"value": "1"
							}
						]
					},
					{
						"case": "16",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'整个魔塔有2把藏在墙里的红钥匙'"
							},
							{
								"type": "setValue",
								"name": "flag:对话16",
								"value": "1"
							}
						]
					},
					{
						"case": "18",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'在这区域不多次提升攻击力 就不能打败石头人 切记前人教训'"
							},
							{
								"type": "setValue",
								"name": "flag:对话18",
								"value": "1"
							}
						]
					},
					{
						"case": "21",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'大法师住在25楼 他是魔塔的主人 以你现在的状态去攻击他简直就是自杀 你应当在取得更高级别的道具后再去打败他'"
							},
							{
								"type": "setValue",
								"name": "flag:对话21",
								"value": "1"
							}
						]
					},
					{
						"case": "23",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'我没有什么可说的，但有一个确切的消息藏在这个楼层'"
							},
							{
								"type": "setValue",
								"name": "flag:对话23",
								"value": "1"
							}
						]
					},
					{
						"case": "27",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'如果你没有使用过4层的祭坛 在12层供奉不超过4次 那么祝贺你 你的前期是比较成功的'"
							},
							{
								"type": "setValue",
								"name": "flag:对话27",
								"value": "1"
							}
						]
					},
					{
						"case": "31",
						"action": [
							{
								"type": "if",
								"condition": "flag:arg2 == 1",
								"true": [
									{
										"type": "setValue",
										"name": "flag:content",
										"value": "'你居然买了我的钥匙 那我就告诉你一个秘密 魔塔里有个幸运金币 拥有它在打败敌人后能获得2倍的金币'"
									},
									{
										"type": "setValue",
										"name": "flag:对话3102",
										"value": "1"
									}
								],
								"false": [
									{
										"type": "setValue",
										"name": "flag:content",
										"value": "'双手剑士的攻击力太高了 你最好到能对他一击必杀时再与他战斗, 但是如果他主动攻击你, 你仍然会受到一次伤害'"
									},
									{
										"type": "setValue",
										"name": "flag:对话31",
										"value": "1"
									}
								]
							}
						]
					},
					{
						"case": "33",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'别匆忙, 放慢速度'"
							},
							{
								"type": "setValue",
								"name": "flag:对话33",
								"value": "1"
							}
						]
					},
					{
						"case": "36",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'不用找了 本层没有暗道, 但是如果你能用好移动宝物 可以省很多血'"
							},
							{
								"type": "setValue",
								"name": "flag:对话36",
								"value": "1"
							}
						]
					},
					{
						"case": "37",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'你需要用地震卷轴才能取走这里的所有宝物 当然你也可以不取 51层魔塔最好玩的地方就是道具有多种用法'"
							},
							{
								"type": "setValue",
								"name": "flag:对话37",
								"value": "1"
							}
						]
					},
					{
						"case": "38",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'存放圣剑的房间的门坏了 你只能用其他方法进去'"
							},
							{
								"type": "setValue",
								"name": "flag:对话38",
								"value": "1"
							}
						]
					},
					{
						"case": "39",
						"action": [
							{
								"type": "if",
								"condition": "flag:arg2 == 1",
								"true": [
									{
										"type": "setValue",
										"name": "flag:content",
										"value": "'谜题 在3点 拥有传送功能的密宝 就会出现'"
									},
									{
										"type": "setValue",
										"name": "flag:对话39",
										"value": "1"
									}
								],
								"false": [
									{
										"type": "setValue",
										"name": "flag:content",
										"value": "'你居然买了我的钥匙 那我就告诉你一个秘密 神圣剑有3种方法可以得到 不同的方法路线也会不同'"
									},
									{
										"type": "setValue",
										"name": "flag:对话3902",
										"value": "1"
									}
								]
							}
						]
					},
					{
						"case": "42",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'巫师会用魔法攻击路过的人 在2个魔法警卫间通过会使你的生命减少一半'"
							},
							{
								"type": "setValue",
								"name": "flag:对话42",
								"value": "1"
							}
						]
					},
					{
						"case": "45",
						"action": [
							{
								"type": "if",
								"condition": "flag:arg3 == 3",
								"true": [
									{
										"type": "setValue",
										"name": "flag:content",
										"value": "'神圣盾能防御魔法攻击 但它被藏在异空间的楼层内'"
									},
									{
										"type": "setValue",
										"name": "flag:对话45",
										"value": "1"
									}
								],
								"false": [
									{
										"type": "setValue",
										"name": "flag:content",
										"value": "'44楼被藏在异空间 你只能用移动宝物才能到达'"
									},
									{
										"type": "setValue",
										"name": "flag:对话4502",
										"value": "1"
									}
								]
							}
						]
					},
					{
						"case": "46",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'41层其实是左右对称的 你应该能发现 打怪时如果不和怪物重叠 可以规避一些魔法攻击'"
							},
							{
								"type": "setValue",
								"name": "flag:对话46",
								"value": "1"
							}
						]
					},
					{
						"case": "47",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'如果要打败魔龙你需要 圣剑 圣盾 屠龙匕 或更高等级的装备'"
							},
							{
								"type": "setValue",
								"name": "flag:对话47",
								"value": "1"
							}
						]
					},
					{
						"case": "48",
						"action": [
							{
								"type": "setValue",
								"name": "flag:content",
								"value": "'像骰子上5一样的形状是一种封印魔法 你最好记住 它在与魔王战斗时可能有用 什么 别说胡话了 这房间没有魔法警卫'"
							},
							{
								"type": "setValue",
								"name": "flag:对话48",
								"value": "1"
							}
						]
					},
					{
						"case": "default",
						"action": []
					}
				]
			},
			{
				"type": "if",
				"condition": "flag:arg4",
				"true": [
					"\t[商人,woman]${flag:content}"
				],
				"false": [
					"\t[老人,man]${flag:content}"
				]
			},
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "2",
						"action": [
							{
								"type": "playSound",
								"name": "item.mp3"
							},
							{
								"type": "addValue",
								"name": "status:money",
								"value": "1000"
							},
							{
								"type": "tip", 
								"text": "获得1000金币"
							},
						]
					},
					{
						"case": "3",
						"action": [
							{
								"type": "addValue",
								"name": "item:book",
								"value": "1"
							}
						]
					},
					{
						"case": "default",
						"action": []
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:talking",
				"value": "2"
			},
			{
				"type": "function",
				"function": "function(){\ncore.insertAction([{\n\t\"type\": \"hide\",\n\t\"loc\": [\n\t\t[core.nextX(), core.nextY()]\n\t],\n\t\"time\": 500\n}, ]);\n}"
			}
		],
		"商人": [
			{
				"type": "switch",
				"condition": "core.status.floorId.replace(/[^0-9]/ig, \"\")",
				"caseList": [
					{
						"case": "6",
						"action": [
							{
								"type": "setValue",
								"name": "flag:money",
								"value": "50"
							},
							{
								"type": "setValue",
								"name": "flag:item",
								"value": "'一把蓝钥匙'"
							}
						]
					},
					{
						"case": "7",
						"action": [
							{
								"type": "setValue",
								"name": "flag:money",
								"value": "50"
							},
							{
								"type": "setValue",
								"name": "flag:item",
								"value": "'五把黄钥匙'"
							}
						]
					},
					{
						"case": "12",
						"action": [
							{
								"type": "setValue",
								"name": "flag:money",
								"value": "800"
							},
							{
								"type": "setValue",
								"name": "flag:item",
								"value": "'一把红钥匙'"
							}
						]
					},
					{
						"case": "15",
						"action": [
							{
								"type": "setValue",
								"name": "flag:money",
								"value": "200"
							},
							{
								"type": "setValue",
								"name": "flag:item",
								"value": "'一把蓝钥匙'"
							}
						]
					},
					{
						"case": "31",
						"action": [
							{
								"type": "setValue",
								"name": "flag:money",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "flag:item",
								"value": "'一把蓝钥匙, 四把黄钥匙'"
							}
						]
					},
					{
						"case": "38",
						"action": [
							{
								"type": "setValue",
								"name": "flag:money",
								"value": "200"
							},
							{
								"type": "setValue",
								"name": "flag:alt",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:item",
								"value": "'大甩卖! 三把黄钥匙只要200金币, 先到先得!'"
							}
						]
					},
					{
						"case": "39",
						"action": [
							{
								"type": "setValue",
								"name": "flag:money",
								"value": "2000"
							},
							{
								"type": "setValue",
								"name": "flag:item",
								"value": "'三把蓝钥匙'"
							}
						]
					},
					{
						"case": "45",
						"action": [
							{
								"type": "setValue",
								"name": "flag:money",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "flag:alt",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:item",
								"value": "'你出1000金币, 我就帮你回复2000点生命值'"
							}
						]
					},
					{
						"case": "47",
						"action": [
							{
								"type": "setValue",
								"name": "flag:money",
								"value": "4000"
							},
							{
								"type": "setValue",
								"name": "flag:item",
								"value": "'地震卷轴'"
							}
						]
					},
					{
						"case": "default",
						"action": []
					}
				]
			},
			{
				"type": "choices",
				"text": "\t[商人,woman]${flag:alt ? flag:item : '我有'+flag:item+', 你出'+flag:money+'金币就卖给你'}",
				"choices": [
					{
						"text": "我太需要了",
						"action": [
							{
								"type": "if",
								"condition": "status:money >= flag:money",
								"true": [
									{
										"type": "addValue",
										"name": "status:money",
										"value": "-flag:money"
									},
									{
										"type": "switch",
										"condition": "core.status.floorId.replace(/[^0-9]/ig, \"\")",
										"caseList": [
											{
												"case": "6",
												"action": [
													{
														"type": "addValue",
														"name": "item:blueKey",
														"value": "1"
													}
												]
											},
											{
												"case": "7",
												"action": [
													{
														"type": "addValue",
														"name": "item:yellowKey",
														"value": "5"
													}
												]
											},
											{
												"case": "12",
												"action": [
													{
														"type": "addValue",
														"name": "item:redKey",
														"value": "1"
													}
												]
											},
											{
												"case": "15",
												"action": [
													{
														"type": "addValue",
														"name": "item:blueKey",
														"value": "1"
													}
												]
											},
											{
												"case": "31",
												"action": [
													{
														"type": "addValue",
														"name": "item:yellowKey",
														"value": "4"
													},
													{
														"type": "addValue",
														"name": "item:blueKey",
														"value": "1"
													}
												]
											},
											{
												"case": "38",
												"action": [
													{
														"type": "addValue",
														"name": "item:yellowKey",
														"value": "3"
													}
												]
											},
											{
												"case": "39",
												"action": [
													{
														"type": "addValue",
														"name": "item:blueKey",
														"value": "3"
													}
												]
											},
											{
												"case": "45",
												"action": [
													{
														"type": "playSound",
														"name": "item.mp3"
													},
													{
														"type": "addValue",
														"name": "status:hp",
														"value": "2000"
													}
												]
											},
											{
												"case": "47",
												"action": [
													{
														"type": "addValue",
														"name": "item:earthquake",
														"value": "1"
													}
												]
											},
											{
												"case": "default",
												"action": []
											}
										]
									},
									{
										"type": "function",
										"function": "function(){\nvar name = core.status.floorId + '@' + core.nextX() + '@' + core.nextY() + '@' + 'A';\ncore.setFlag(name, 1);\n}"
									}
								],
								"false": [
									"\t[商人,woman]你的金币不够${flag:money}枚，无法交易！"
								]
							}
						]
					},
					{
						"text": "下次再说",
						"action": []
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:alt",
				"value": "0"
			},
		],
		"开墙": [
			{
				"type": "playSound",
				"name": "door.mp3"
			},
			{
				"type": "function",
				"function": "function(){\ncore.insertAction([{\n\t\"type\": \"hide\",\n\t\"loc\": [\n\t\t[core.nextX(), core.nextY()]\n\t],\n\t\"time\": 0\n}, ]);\n}"
			}
		],
		"商店": [
			{
				"type": "if",
				"condition": "flag:times1>0",
				"true": [],
				"false": [
					{
						"type": "setValue",
						"name": "flag:times1",
						"value": "1"
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:money1",
				"value": "20+10*flag:times1*(flag:times1-1)"
			},
			{
				"type": "choices",
				"text": "\t[祭坛,blueShop]如果供奉${flag:money1}金币, 便可以增加你的力量, 你想要什么呢…",
				"choices": [
					{
						"text": "生命+${100*flag:times1}",
						"action": [
							{
								"type": "if",
								"condition": "status:money>=flag:money1",
								"true": [
									{
										"type": "playSound",
										"name": "item.mp3"
									},
									{
										"type": "addValue",
										"name": "status:hp",
										"value": "100*flag:times1"
									},
									{
										"type": "addValue",
										"name": "status:money",
										"value": "-flag:money1"
									},
									{
										"type": "addValue",
										"name": "flag:times1",
										"value": "1"
									},
									{
										"type": "insert",
										"name": "商店"
									}
								],
								"false": [
									{
										"type": "tip",
										"text": "你的金币不足${flag:money1}枚，无法供奉！"
									},
									{
										"type": "insert",
										"name": "商店"
									}
								]
							}
						]
					},
					{
						"text": "攻击+${2*flag:ratio}",
						"action": [
							{
								"type": "if",
								"condition": "status:money>=flag:money1",
								"true": [
									{
										"type": "playSound",
										"name": "item.mp3"
									},
									{
										"type": "addValue",
										"name": "status:atk",
										"value": "2*flag:ratio"
									},
									{
										"type": "addValue",
										"name": "status:money",
										"value": "-flag:money1"
									},
									{
										"type": "addValue",
										"name": "flag:times1",
										"value": "1"
									},
									{
										"type": "insert",
										"name": "商店"
									}
								],
								"false": [
									{
										"type": "tip",
										"text": "你的金币不足${flag:money1}枚，无法供奉！"
									},
									{
										"type": "insert",
										"name": "商店"
									}
								]
							}
						]
					},
					{
						"text": "防御+${4*flag:ratio}",
						"action": [
							{
								"type": "if",
								"condition": "status:money>=flag:money1",
								"true": [
									{
										"type": "playSound",
										"name": "item.mp3"
									},
									{
										"type": "addValue",
										"name": "status:def",
										"value": "4*flag:ratio"
									},
									{
										"type": "addValue",
										"name": "status:money",
										"value": "-flag:money1"
									},
									{
										"type": "addValue",
										"name": "flag:times1",
										"value": "1"
									},
									{
										"type": "insert",
										"name": "商店"
									}
								],
								"false": [
									{
										"type": "tip",
										"text": "你的金币不足${flag:money1}枚，无法供奉！"
									},
									{
										"type": "insert",
										"name": "商店"
									}
								]
							}
						]
					},
					{
						"text": "离开",
						"action": []
					}
				]
			}
		],
		"记事本": [
			{
				"type": "if",
				"condition": "flag:翻页==0",
				"true": [
					{
						"type": "setValue",
						"name": "flag:翻页",
						"value": "1"
					}
				],
				"false": []
			},
			{
				"type": "if",
				"condition": "flag:翻页==1",
				"true": [
					{
						"type": "while",
						"condition": "true",
						"data": [
							{
								"type": "choices",
								"text": "记事本（只显示对话过的）",
								"choices": [
									{
										"text": "2层老人",
										"condition": "flag:对话2==1",
										"action": [
											"谢谢你救了我，为了感谢你的帮助请收下这些礼物。"
										]
									},
									{
										"text": "3层老人",
										"condition": "flag:对话3==1",
										"action": [
											"我可以给你怪物手册<快捷键x> 它能预测出当前楼层各类怪物对你的伤害"
										]
									},
									{
										"text": "4层老人",
										"condition": "flag:对话4==1",
										"action": [
											"你是否发现每次对话之后你都有一种神秘的能力"
										]
									},
									{
										"text": "6层老人",
										"condition": "flag:对话6==1",
										"action": [
											"购买物品之后再与商人对话，他会告诉你一些重要的消息。"
										]
									},
									{
										"text": "6层商人",
										"condition": "flag:对话602==1",
										"action": [
											"魔塔共有50层，每10层为一个区域。如果不打败此区域的头目就不能到更高的地方。"
										]
									},
									{
										"text": "7层商人",
										"condition": "flag:对话7==1",
										"action": [
											"你的攻击比敌人防御高时就能对他造成伤害 你防御比敌人攻击高或一样时就能无伤"
										]
									},
									{
										"text": "12层商人",
										"condition": "flag:对话12==1",
										"action": [
											"本塔有很多暗墙 比如5 9 12 14 16 18层 你都找到了吗"
										]
									},
									{
										"text": "15层商人",
										"condition": "flag:对话15==1",
										"action": [
											"十字架对兽人和吸血鬼是神器 它被藏在这之上的某层中"
										]
									},
									{
										"text": "16层老人",
										"condition": "flag:对话16==1",
										"action": [
											"整座魔塔中有2把藏在墙里的红钥匙"
										]
									},
									{
										"text": "跳到尾页",
										"action": [
											{
												"type": "setValue",
												"name": "flag:翻页",
												"value": "3"
											},
											{
												"type": "insert",
												"name": "记事本"
											}
										]
									},
									{
										"text": "下一页",
										"action": [
											{
												"type": "setValue",
												"name": "flag:翻页",
												"value": "2"
											},
											{
												"type": "insert",
												"name": "记事本"
											}
										]
									},
									{
										"text": "离开",
										"action": [
											{
												"type": "setValue",
												"name": "flag:翻页",
												"value": "1"
											},
											{
												"type": "exit"
											}
										]
									}
								]
							}
						]
					}
				],
				"false": []
			},
			{
				"type": "if",
				"condition": "flag:翻页==2",
				"true": [
					{
						"type": "while",
						"condition": "true",
						"data": [
							{
								"type": "choices",
								"text": "记事本（只显示对话过的）",
								"choices": [
									{
										"text": "18层老人",
										"condition": "flag:对话18==1",
										"action": [
											"在这区域不多次提升攻击力 就不能打败石头人 切记前人教训"
										]
									},
									{
										"text": "21层老人",
										"condition": "flag:对话21==1",
										"action": [
											"大法师住在25楼 他是魔塔的主人 以你现在的状态去攻击他简直就是自杀 你应当在取得更高级别的道具后再去打败他"
										]
									},
									{
										"text": "23层老人",
										"condition": "flag:对话23==1",
										"action": [
											"我没有什么可说的，但有一个确切的消息藏在这个楼层"
										]
									},
									{
										"text": "27层老人",
										"condition": "flag:对话27==1",
										"action": [
											"如果你没有使用过4层的祭坛 在12层供奉不超过4次 那么祝贺你 你的前期是比较成功的"
										]
									},
									{
										"text": "31层商人",
										"condition": "flag:对话3102==1",
										"action": [
											"你居然买了我的钥匙 那我就告诉你一个秘密 魔塔里有个幸运金币 拥有它在打败敌人后能获得2倍的金币"
										]
									},
									{
										"text": "31层老人",
										"condition": "flag:对话31==1",
										"action": [
											"双手剑士的攻击力太高了 你最好到能对他一击必杀时再与他战斗 但是如果他主动攻击你, 你仍然会受到一次伤害"
										]
									},
									{
										"text": "33层老人",
										"condition": "flag:对话33==1",
										"action": [
											"别匆忙, 放慢速度"
										]
									},
									{
										"text": "36层老人",
										"condition": "flag:对话36==1",
										"action": [
											"不用找了 本层没有暗道, 如果你能用好移动宝物 就可以省很多血"
										]
									},
									{
										"text": "37层老人",
										"condition": "flag:对话37==1",
										"action": [
											"你需要用地震卷轴才能取走这里的所有宝物 当然你也可以不取 51层魔塔最好玩的地方就是道具有多种用法"
										]
									},
									{
										"text": "上一页",
										"action": [
											{
												"type": "setValue",
												"name": "flag:翻页",
												"value": "1"
											},
											{
												"type": "insert",
												"name": "记事本"
											}
										]
									},
									{
										"text": "下一页",
										"action": [
											{
												"type": "setValue",
												"name": "flag:翻页",
												"value": "3"
											},
											{
												"type": "insert",
												"name": "记事本"
											}
										]
									},
									{
										"text": "离开",
										"action": [
											{
												"type": "setValue",
												"name": "flag:翻页",
												"value": "1"
											},
											{
												"type": "exit"
											}
										]
									}
								]
							}
						]
					}
				],
				"false": []
			},
			{
				"type": "if",
				"condition": "flag:翻页==3",
				"true": [
					{
						"type": "while",
						"condition": "true",
						"data": [
							{
								"type": "choices",
								"text": "记事本（只显示对话过的）",
								"choices": [
									{
										"text": "38层商人",
										"condition": "flag:对话38==1",
										"action": [
											"存放圣剑的房间的门坏了 你只能用其他方法进去"
										]
									},
									{
										"text": "39层老人",
										"condition": "flag:对话39==1",
										"action": [
											"谜题 在3点 拥有传送功能的密宝 就会出现"
										]
									},
									{
										"text": "39层商人",
										"condition": "flag:对话3902==1",
										"action": [
											"你居然买了我的钥匙 那我就告诉你一个秘密 神圣剑有3种方法可以得到 不同的方法路线也会不同"
										]
									},
									{
										"text": "42层老人",
										"condition": "flag:对话42==1",
										"action": [
											"巫师会用魔法攻击路过的人 在2个魔法警卫间通过会使你的生命减少一半"
										]
									},
									{
										"text": "45层老人",
										"condition": "flag:对话45==1",
										"action": [
											"神圣盾能防御魔法攻击 但它被藏在异空间的楼层内"
										]
									},
									{
										"text": "45层商人",
										"condition": "flag:对话4502==1",
										"action": [
											"44层被藏在异空间 你只能用移动宝物才能到达"
										]
									},
									{
										"text": "46层老人",
										"condition": "flag:对话46==1",
										"action": [
											"41层其实是左右对称的\n还有, 打怪时如果不和怪物重叠 可以规避一些魔法攻击"
										]
									},
									{
										"text": "47层商人",
										"condition": "flag:对话47==1",
										"action": [
											"如果要打败魔龙你需要 圣剑 圣盾 屠龙匕 或更高等级的装备"
										]
									},
									{
										"text": "48层老人",
										"condition": "flag:对话48==1",
										"action": [
											"像骰子上5一样的形状是一种封印魔法 你最好记住 它在与魔王战斗时可能有用 什么 别说胡话了 这房间没有魔法警卫"
										]
									},
									{
										"text": "上一页",
										"action": [
											{
												"type": "setValue",
												"name": "flag:翻页",
												"value": "2"
											},
											{
												"type": "insert",
												"name": "记事本"
											}
										]
									},
									{
										"text": "跳到首页",
										"action": [
											{
												"type": "setValue",
												"name": "flag:翻页",
												"value": "1"
											},
											{
												"type": "insert",
												"name": "记事本"
											}
										]
									},
									{
										"text": "离开",
										"action": [
											{
												"type": "setValue",
												"name": "flag:翻页",
												"value": "1"
											},
											{
												"type": "exit"
											}
										]
									}
								]
							}
						]
					}
				],
				"false": []
			}
		]
	}
}