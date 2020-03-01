module.exports = {
	// Entering the dungeon
	DungeonInfo : [
		{zone: 3020, string: 'Welcome to <font color="#56B4E9">Sea of Honor</font>'},
	],

	// 金麟號 (Sailing Instance)
	SOH_BOSS_1 : [
		{id: 104, msg: 'Suction (Dodge)'}
	],
	SOH_BOSS_2 : [
		{id: 103, msg: 'Suction (Dodge)'}
	],
	SOH_BOSS_3 : [
		{id: 108, msg: 'Front Stun'},
		{id: 128, msg: 'Upper cut (Knock up)'},
		{id: 129, msg: 'Hammer Toss ~ Skull'},
		{id: 135, msg: "Puddles Inc (Jump)"},
		{id: 204, msg: "30% Warning"},
		{id: 137, msg: 'Outward Pluse'},
		{id: 139, msg: 'Inward Succ'},  //Lol the work Suck is censored...
		{id: 133, msg: 'Secondary Aggro Jump -> Outward Donuts'},
		{id: 127, msg: 'Jump ->', TIP: ["In Safe", "Out Safe"]},

		{id: 121, msg: ''},         // Smash Forward (Out)| Turn (Inside) (Green)_Go In  +No.1 buff
		{id: 122, msg: ''},         // Circle (Inside) | Smashing(Outside) (Purple)_Get Out  +No.1 buff
	//  {id: 124, msg: 'Hammer'},     // 1st Strike, 2nd Strike
	//  {id: 125, msg: 'Circle'},     // 1st Strike, 2nd Strike
		{id: 123, msg: ''},         // Charge Hammer | ↓(Out)↓ (Green)_Explosion  +No.2 buff
		{id: 120, msg: ''},         // Charged Circle | ↑(In)↑ (Purple)_Abyss  +No.2 buff
	//  {id: 126, msg: '大前砸'},  // 3rd Strike
	//  {id: 134, msg: '大转圈'},  // 3rd Strike
	],
	//           121+120=241 122+120=242           121+123=244 122+123=245
	SOH_TipMsg : ["Out - In - In", "In - Out - In","Dodge!", "Out - In - Out", "In - Out - Out"],
}
