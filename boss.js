module.exports = {
	// Entering the dungeon
	DungeonInfo : [
		{zone: 3023, string: 'Entering the dungeon <font color="#56B4E9">Akalath Quarantine (Verrak Fortress)</font>'}
	],
	// Akalath Quarantine (Verrak Fortress)
	AQ_BOSS_1 : [
		{id: 1104, msg: 'Jump Stun'},
		{id: 2104, msg: 'Jump Stun'},
		{id: 1110, msg: 'Front Stun'},
		{id: 2110, msg: 'Front Stun'},
		{id: 1111, msg: 'Left Slash'},
		{id: 1113, msg: 'Left Slash'}, // 1112 1113
		{id: 2111, msg: 'Left Slash'},
		{id: 2113, msg: 'Left Slash'}, // 2112 2113
		{id: 1112, msg: 'Right Slash'},
		{id: 1114, msg: 'Right Slash'}, // 1111 1114
		{id: 2112, msg: 'Right Slash'},
		{id: 2114, msg: 'Right Slash'}, // 2111 2114
		{id: 1115, msg: 'Backslash'},
		{id: 2115, msg: 'Backslash'},
		{id: 1116, msg: 'Explosion (Shield)!!'}, // 1117
		{id: 2116, msg: 'Explosion (Shield)!!'}, // 2117
		{id: 3107, msg: 'Forward Wave'},
		{id: 3115, msg: 'Spin'}, // 1106 2106
		{id: 3116, msg: 'Circles + Spin'}, // 1106 2106
		{id: 3119, msg: 'Debuff ', TIP: ["Get OUT", "Get IN"]}, // Red OUT | Blue IN
		{id: 3220, msg: 'Debuff ', TIP: ["Get IN", "Get OUT"]}  // Red IN | Blue OUT
	],
	AQ_BOSS_2 : [
		{id: 164, msg: 'Hold (Bleed)'},
		{id: 166, msg: 'Turn around'}, // 169 166 前搓 左购拳 右勾拳
		{id: 175, msg: 'Roar (iframe)'},
		{id: 181, msg: 'Rock'},
		// 214 Triple Rocks 181
		{id: 182, msg: 'Stomp (Knockdown)'}, // 183 184
		// 302 209 Stomp (Knockdown) 182 183 184
		{id: 185, msg: 'Explosion (Shield//Kaias)'},
		{id: 202, msg: 'Back + Front Stab'},  // 177
		{id: 207, msg: 'AimBack (Bleed)'}, // 204 206 205
		{id: 212, msg: 'Bait (Bleed)'}    // 180
	]
}
