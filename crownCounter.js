var allMice = [
    { id: 1, name: "Abominable Snow" },
    { id: 2, name: "Acolyte" },
    { id: 3, name: "Aged" },
    { id: 4, name: "Alchemist" },
    { id: 5, name: "Alnilam" },
    { id: 6, name: "Alnitak" },
    { id: 7, name: "Aquos" },
    { id: 8, name: "Archer" },
    { id: 9, name: "Assassin" },
    { id: 10, name: "Balack the Banished" },
    { id: 11, name: "Bandit" },
    { id: 12, name: "Bat" },
    { id: 13, name: "Bear" },
    { id: 14, name: "Beast Tamer" },
    { id: 15, name: "Berserker" },
    { id: 16, name: "Big Bad Burroughs" },
    { id: 17, name: "Bionic" },
    { id: 18, name: "Birthday" },
    { id: 19, name: "Black Mage" },
    { id: 20, name: "Black Widow" },
    { id: 21, name: "Bottled" },
    { id: 22, name: "Briegull" },
    { id: 23, name: "Brimstone" },
    { id: 24, name: "Brown" },
    { id: 25, name: "Buccaneer" },
    { id: 26, name: "Burglar" },
    { id: 27, name: "Candy Cane" },
    { id: 28, name: "Captain" },
    { id: 29, name: "Caretaker" },
    { id: 30, name: "Hapless Marionette" },
    { id: 31, name: "Cavalier" },
    { id: 32, name: "Centaur" },
    { id: 33, name: "Chameleon" },
    { id: 34, name: "Champion" },
    { id: 35, name: "Chitinous" },
    { id: 36, name: "Christmas Tree" },
    { id: 37, name: "Clockwork Samurai" },
    { id: 38, name: "Conjurer" },
    { id: 39, name: "Conqueror" },
    { id: 40, name: "Cook" },
    { id: 41, name: "Core Sample" },
    { id: 42, name: "Costumed Tiger" },
    { id: 43, name: "Cowbell" },
    { id: 44, name: "Cupid" },
    { id: 45, name: "Curious Chemist" },
    { id: 46, name: "Cyclops" },
    { id: 47, name: "Dancer" },
    { id: 48, name: "Davy Jones" },
    { id: 49, name: "Defender" },
    { id: 50, name: "Demolitions" },
    { id: 51, name: "Derr Chieftain" },
    { id: 52, name: "Derr Lich" },
    { id: 53, name: "Diamond" },
    { id: 54, name: "Dojo Sensei" },
    { id: 55, name: "Draconic Warden" },
    { id: 56, name: "Dragon" },
    { id: 57, name: "Drummer" },
    { id: 58, name: "Dumpling Chef" },
    { id: 59, name: "Dwarf" },
    { id: 60, name: "Eagle Owl" },
    { id: 61, name: "Eclipse" },
    { id: 62, name: "Elder" },
    { id: 63, name: "Elf" },
    { id: 64, name: "Elub Chieftain" },
    { id: 65, name: "Elub Lich" },
    { id: 66, name: "Elven Princess" },
    { id: 67, name: "Enslaved Spirit" },
    { id: 68, name: "Escape Artist" },
    { id: 69, name: "Fairy" },
    { id: 70, name: "Fencer" },
    { id: 71, name: "Fetid Swamp" },
    { id: 72, name: "Fiddler" },
    { id: 73, name: "Fiend" },
    { id: 74, name: "Finder" },
    { id: 75, name: "Flying" },
    { id: 76, name: "Foxy" },
    { id: 77, name: "Frog" },
    { id: 78, name: "Frosty Snow" },
    { id: 79, name: "Frozen" },
    { id: 80, name: "Gargoyle" },
    { id: 81, name: "Gate Guardian" },
    { id: 82, name: "Ghost" },
    { id: 83, name: "Giant Snail" },
    { id: 84, name: "Gladiator" },
    { id: 85, name: "Glitchpaw" },
    { id: 86, name: "Goblin" },
    { id: 87, name: "Gold" },
    { id: 88, name: "Golem" },
    { id: 89, name: "Gorgon" },
    { id: 90, name: "Grandfather" },
    { id: 91, name: "Granite" },
    { id: 92, name: "Grey" },
    { id: 93, name: "Grunt" },
    { id: 94, name: "Guardian" },
    { id: 95, name: "Guqin Player" },
    { id: 96, name: "Hapless" },
    { id: 97, name: "Harpy" },
    { id: 98, name: "Healer" },
    { id: 99, name: "Hollowhead" },
    { id: 100, name: "Hope" },
    { id: 101, name: "Hydra" },
    { id: 102, name: "Ignis" },
    { id: 103, name: "Impersonator" },
    { id: 104, name: "Industrious Digger" },
    { id: 105, name: "Itty-Bitty Burroughs" },
    { id: 106, name: "Rockstar" },
    { id: 107, name: "Jurassic" },
    { id: 108, name: "Keeper" },
    { id: 109, name: "Keeper's Assistant" },
    { id: 110, name: "Knight" },
    { id: 111, name: "Kung Fu" },
    { id: 112, name: "Lambent Crystal" },
    { id: 113, name: "Leprechaun" },
    { id: 114, name: "Leviathan" },
    { id: 115, name: "Lich" },
    { id: 116, name: "Lockpick" },
    { id: 117, name: "Longtail" },
    { id: 118, name: "Lycan" },
    { id: 119, name: "Magma Carrier" },
    { id: 120, name: "Master Burglar" },
    { id: 121, name: "Master of the Cheese Belt" },
    { id: 122, name: "Master of the Cheese Claw" },
    { id: 123, name: "Master of the Cheese Fang" },
    { id: 124, name: "Master of the Dojo" },
    { id: 125, name: "Mermouse" },
    { id: 126, name: "Miner" },
    { id: 127, name: "Mintaka" },
    { id: 128, name: "Mobster" },
    { id: 129, name: "Mole" },
    { id: 130, name: "Monk" },
    { id: 131, name: "Monster" },
    { id: 132, name: "Moosker" },
    { id: 133, name: "Mummy" },
    { id: 134, name: "Mutated Grey" },
    { id: 135, name: "Mutated White" },
    { id: 136, name: "Mystic" },
    { id: 137, name: "Narrator" },
    { id: 138, name: "Necromancer" },
    { id: 139, name: "Nerg Chieftain" },
    { id: 140, name: "Nerg Lich" },
    { id: 141, name: "New Year's" },
    { id: 142, name: "Nibbler" },
    { id: 143, name: "Ninja" },
    { id: 144, name: "Nomad" },
    { id: 145, name: "Nugget" },
    { id: 146, name: "Nutcracker" },
    { id: 147, name: "Ooze" },
    { id: 148, name: "Ornament" },
    { id: 149, name: "Pack" },
    { id: 150, name: "Page" },
    { id: 151, name: "Paladin" },
    { id: 152, name: "Pathfinder" },
    { id: 153, name: "Phalanx" },
    { id: 154, name: "Swarm of Pygmy Mice" },
    { id: 155, name: "Pinchy" },
    { id: 156, name: "Pirate" },
    { id: 157, name: "Present" },
    { id: 158, name: "Primal" },
    { id: 159, name: "Protector" },
    { id: 160, name: "Puppet Master" },
    { id: 161, name: "Ravenous Zombie" },
    { id: 162, name: "Reaper" },
    { id: 163, name: "Red Envelope" },
    { id: 164, name: "Renegade" },
    { id: 165, name: "Riptide" },
    { id: 166, name: "Rock Muncher" },
    { id: 167, name: "Rogue" },
    { id: 168, name: "Romeno" },
    { id: 169, name: "Romeo" },
    { id: 170, name: "Sacred Shrine" },
    { id: 171, name: "Salt Water Snapper" },
    { id: 172, name: "Samurai" },
    { id: 173, name: "Scavenger" },
    { id: 174, name: "Scout" },
    { id: 175, name: "Scrooge" },
    { id: 176, name: "Seer" },
    { id: 177, name: "Shaman" },
    { id: 178, name: "Shelder" },
    { id: 179, name: "Shipwrecked" },
    { id: 180, name: "Silth" },
    { id: 181, name: "Siren" },
    { id: 182, name: "Skeleton" },
    { id: 183, name: "Slayer" },
    { id: 184, name: "Sock Puppet Ghost" },
    { id: 185, name: "Soothsayer" },
    { id: 186, name: "Sorcerer" },
    { id: 187, name: "Spectre" },
    { id: 188, name: "Spellbinder" },
    { id: 189, name: "Spider" },
    { id: 190, name: "Squeaken" },
    { id: 191, name: "Stealth" },
    { id: 192, name: "Steel" },
    { id: 193, name: "Stocking" },
    { id: 194, name: "Stone Cutter" },
    { id: 195, name: "Stonework Warrior" },
    { id: 196, name: "Student of the Cheese Belt" },
    { id: 197, name: "Student of the Cheese Claw" },
    { id: 198, name: "Student of the Cheese Fang" },
    { id: 199, name: "Subterranean" },
    { id: 200, name: "Swabbie" },
    { id: 201, name: "Sylvan" },
    { id: 202, name: "Taleweaver" },
    { id: 203, name: "Terra" },
    { id: 204, name: "Terrible Twos" },
    { id: 205, name: "Terror Knight" },
    { id: 206, name: "Tiger" },
    { id: 207, name: "Toy" },
    { id: 208, name: "Toy Sylvan" },
    { id: 209, name: "Trailblazer" },
    { id: 210, name: "Treant" },
    { id: 211, name: "Troll" },
    { id: 212, name: "Twisted Fiend" },
    { id: 213, name: "Vampire" },
    { id: 214, name: "Vanquisher" },
    { id: 215, name: "Water Nymph" },
    { id: 216, name: "Whelpling" },
    { id: 217, name: "White" },
    { id: 218, name: "White Mage" },
    { id: 219, name: "Wicked Witch of Whisker Woods" },
    { id: 220, name: "Wiggler" },
    { id: 221, name: "Wight" },
    { id: 222, name: "Wordsmith" },
    { id: 223, name: "Worker" },
    { id: 224, name: "Wound Up White" },
    { id: 225, name: "Zephyr" },
    { id: 226, name: "Zombie" },
    { id: 227, name: "Cowardly" },
    { id: 228, name: "Farmhand" },
    { id: 229, name: "Speedy" },
    { id: 230, name: "Field" },
    { id: 231, name: "Fog" },
    { id: 232, name: "Lightning Rod" },
    { id: 233, name: "Magic" },
    { id: 234, name: "Pebble" },
    { id: 235, name: "Pugilist" },
    { id: 236, name: "Scruffy" },
    { id: 237, name: "Silvertail" },
    { id: 238, name: "Spud" },
    { id: 239, name: "Tiny" },
    { id: 240, name: "Cherry" },
    { id: 241, name: "Spotted" },
    { id: 242, name: "Derpicorn" },
    { id: 243, name: "Fall Familiar" },
    { id: 244, name: "Firebreather" },
    { id: 245, name: "Firefly" },
    { id: 246, name: "Frostbite" },
    { id: 247, name: "Harvest Harrier" },
    { id: 248, name: "Harvester" },
    { id: 249, name: "Hot Head" },
    { id: 250, name: "Hydrophobe" },
    { id: 251, name: "Icicle" },
    { id: 252, name: "Monarch" },
    { id: 253, name: "Mystic Bishop" },
    { id: 254, name: "Mystic King" },
    { id: 255, name: "Mystic Knight" },
    { id: 256, name: "Mystic Pawn" },
    { id: 257, name: "Mystic Queen" },
    { id: 258, name: "Mystic Rook" },
    { id: 259, name: "Over-Prepared" },
    { id: 260, name: "Penguin" },
    { id: 261, name: "Puddlemancer" },
    { id: 262, name: "Pumpkin Head" },
    { id: 263, name: "Scarecrow" },
    { id: 264, name: "Spring Familiar" },
    { id: 265, name: "Stinger" },
    { id: 266, name: "Summer Mage" },
    { id: 267, name: "Tanglefoot" },
    { id: 268, name: "Technic Bishop" },
    { id: 269, name: "Technic King" },
    { id: 270, name: "Technic Knight" },
    { id: 271, name: "Technic Pawn" },
    { id: 272, name: "Technic Queen" },
    { id: 273, name: "Technic Rook" },
    { id: 274, name: "Vinetail" },
    { id: 275, name: "Whirleygig" },
    { id: 276, name: "Winter Mage" },
    { id: 277, name: "Bruticle" },
    { id: 278, name: "Chess Master" },
    { id: 279, name: "Realm Ripper" },
    { id: 280, name: "Tidal Fisher" },
    { id: 281, name: "Gourdborg" },
    { id: 282, name: "Treat" },
    { id: 283, name: "Trick" },
    { id: 284, name: "Zombot Unipire" },
    { id: 285, name: "High Roller" },
    { id: 286, name: "Snooty" },
    { id: 287, name: "Treasurer" },
    { id: 288, name: "Missile Toe" },
    { id: 289, name: "Slay Ride" },
    { id: 290, name: "Snow Fort" },
    { id: 291, name: "Squeaker Claws" },
    { id: 292, name: "Wreath Thief" },
    { id: 293, name: "Mouse of Winter Future" },
    { id: 294, name: "Mouse of Winter Past" },
    { id: 295, name: "Mouse of Winter Present" },
    { id: 296, name: "Costumed Rabbit" },
    { id: 297, name: "Juliyes" },
    { id: 298, name: "Buckethead" },
    { id: 299, name: "Pintail" },
    { id: 300, name: "Sleepwalker" },
    { id: 301, name: "Flame Archer" },
    { id: 302, name: "Crimson Ranger" },
    { id: 303, name: "Desert Archer" },
    { id: 304, name: "Flame Ordnance" },
    { id: 305, name: "Gargantuamouse" },
    { id: 306, name: "Warmonger" },
    { id: 307, name: "Sand Cavalry" },
    { id: 308, name: "Sandwing Cavalry" },
    { id: 309, name: "Theurgy Warden" },
    { id: 310, name: "Crimson Commander" },
    { id: 311, name: "Inferno Mage" },
    { id: 312, name: "Magmarage" },
    { id: 313, name: "Sentinel" },
    { id: 314, name: "Crimson Watch" },
    { id: 315, name: "Vanguard" },
    { id: 316, name: "Caravan Guard" },
    { id: 317, name: "Flame Warrior" },
    { id: 318, name: "Crimson Titan" },
    { id: 319, name: "Desert Soldier" },
    { id: 320, name: "Coco Commander" },
    { id: 321, name: "Egg Painter" },
    { id: 322, name: "Eggsplosive Scientist" },
    { id: 323, name: "Hare Razer" },
    { id: 324, name: "Blacksmith" },
    { id: 325, name: "Lumberjack" },
    { id: 326, name: "Desert Nomad" },
    { id: 327, name: "Desert Architect" },
    { id: 328, name: "Falling Carpet" },
    { id: 329, name: "Glass Blower" },
    { id: 330, name: "Limestone Miner" },
    { id: 331, name: "Mage Weaver" },
    { id: 332, name: "Market Guard" },
    { id: 333, name: "Market Thief" },
    { id: 334, name: "Pie Thief" },
    { id: 335, name: "Snake Charmer" },
    { id: 336, name: "Spice Merchant" },
    { id: 337, name: "Grave Robber" },
    { id: 338, name: "Aether" },
    { id: 339, name: "Bookborn" },
    { id: 340, name: "Effervescent" },
    { id: 341, name: "Explorator" },
    { id: 342, name: "Flutterby" },
    { id: 343, name: "Infiltrator" },
    { id: 344, name: "Zurreal the Eternal" },
    { id: 345, name: "Pocketwatch" },
    { id: 346, name: "Scribe" },
    { id: 347, name: "Steam Grip" },
    { id: 348, name: "Tome Sprite" },
    { id: 349, name: "Walker" },
    { id: 350, name: "Crown Collector" },
    { id: 351, name: "Mousevina von Vermin" },
    { id: 352, name: "Cobweb" },
    { id: 353, name: "Pumpkin Hoarder" },
    { id: 354, name: "Destructoy" },
    { id: 355, name: "Snowflake" },
    { id: 356, name: "Snow Scavenger" },
    { id: 357, name: "Toy Tinkerer" },
    { id: 358, name: "Mad Elf" },
    { id: 359, name: "Party Head" },
    { id: 360, name: "Calligraphy" },
    { id: 361, name: "Costumed Dragon" },
    { id: 362, name: "Forever Alone" },
    { id: 363, name: "Pygmy Wrangler" },
    { id: 364, name: "Dinosuit" },
    { id: 365, name: "Eggscavator" },
    { id: 366, name: "Sinister Egg Painter" },
    { id: 367, name: "Incompetent Ice Climber" },
    { id: 368, name: "Polar Bear" },
    { id: 369, name: "Snow Soldier" },
    { id: 370, name: "Wolfskie" },
    { id: 371, name: "Chipper" },
    { id: 372, name: "Snow Bowler" },
    { id: 373, name: "Snow Slinger" },
    { id: 374, name: "Icebreaker" },
    { id: 375, name: "Saboteur" },
    { id: 376, name: "Snow Sniper" },
    { id: 377, name: "Yeti" },
    { id: 378, name: "Living Ice" },
    { id: 379, name: "General Drheller" },
    { id: 380, name: "Frostlance Guard" },
    { id: 381, name: "Frostwing Commander" },
    { id: 382, name: "Heavy Blaster" },
    { id: 383, name: "Iceblade" },
    { id: 384, name: "Iceblock" },
    { id: 385, name: "Icewing" },
    { id: 386, name: "Lady Coldsnap" },
    { id: 387, name: "Lord Splodington" },
    { id: 388, name: "Mammoth" },
    { id: 389, name: "Princess Fist" },
    { id: 390, name: "Snowblind" },
    { id: 391, name: "Stickybomber" },
    { id: 392, name: "Water Wielder" },
    { id: 393, name: "Living Salt" },
    { id: 394, name: "Deep" },
    { id: 395, name: "Lucky" },
    { id: 396, name: "Chrono" },
    { id: 397, name: "Hurdle" },
    { id: 398, name: "Extreme Everysports" },
    { id: 399, name: "Trampoline" },
    { id: 400, name: "Goldleaf" },
    { id: 401, name: "Relic Hunter" },
    { id: 402, name: "Wild Chainsaw" },
    { id: 403, name: "Swamp Thang" },
    { id: 404, name: "Spirit Light" },
    { id: 405, name: "Bark" },
    { id: 406, name: "Barkshell" },
    { id: 407, name: "Calalilly" },
    { id: 408, name: "Camoflower" },
    { id: 409, name: "Camofusion" },
    { id: 410, name: "Carmine the Apothecary" },
    { id: 411, name: "Corrupt" },
    { id: 412, name: "Cursed" },
    { id: 413, name: "Cursed Enchanter" },
    { id: 414, name: "Cursed Engineer" },
    { id: 415, name: "Cursed Librarian" },
    { id: 416, name: "Cursed Thief" },
    { id: 417, name: "Dehydrated" },
    { id: 418, name: "Dunehopper" },
    { id: 419, name: "Essence Collector" },
    { id: 420, name: "Essence Guardian" },
    { id: 421, name: "Ethereal Enchanter" },
    { id: 422, name: "Ethereal Engineer" },
    { id: 423, name: "Ethereal Librarian" },
    { id: 424, name: "Ethereal Thief" },
    { id: 425, name: "Fungal Spore" },
    { id: 426, name: "Grubling" },
    { id: 427, name: "Grubling Herder" },
    { id: 428, name: "King Grub" },
    { id: 429, name: "Quesodillo" },
    { id: 430, name: "Sand Colossus" },
    { id: 431, name: "Sand Pilgrim" },
    { id: 432, name: "Sarcophamouse" },
    { id: 433, name: "Scarab" },
    { id: 434, name: "Serpentine" },
    { id: 435, name: "Shroom" },
    { id: 436, name: "Spiky Devil" },
    { id: 437, name: "Strawberry Hotcakes" },
    { id: 438, name: "Thirsty" },
    { id: 439, name: "Thistle" },
    { id: 440, name: "Thorn" },
    { id: 441, name: "Twisted Carmine" },
    { id: 442, name: "Twisted Hotcakes" },
    { id: 443, name: "Twisted Lilly" },
    { id: 444, name: "Confused Courier" },
    { id: 445, name: "Gingerbread" },
    { id: 446, name: "Greedy Al" },
    { id: 447, name: "Ribbon" },
    { id: 448, name: "Ridiculous Sweater" },
    { id: 449, name: "Snowblower" },
    { id: 450, name: "Snowglobe" },
    { id: 451, name: "Triple Lutz" },
    { id: 452, name: "Dark Magi" },
    { id: 453, name: "King Scarab" },
    { id: 454, name: "Shattered Carmine" },
    { id: 455, name: "Costumed Snake" },
    { id: 456, name: "Totally Not Bitter" },
    { id: 457, name: "Force Fighter Blue" },
    { id: 458, name: "Force Fighter Green" },
    { id: 459, name: "Force Fighter Pink" },
    { id: 460, name: "Force Fighter Red" },
    { id: 461, name: "Force Fighter Yellow" },
    { id: 462, name: "Super FighterBot MegaSupreme" },
    { id: 463, name: "Chocolate Overload" },
    { id: 464, name: "Egg Scrambler" },
    { id: 465, name: "Hardboiled" },
    { id: 466, name: "Bartender" },
    { id: 467, name: "Bounty Hunter" },
    { id: 468, name: "Cardshark" },
    { id: 469, name: "Circuit Judge" },
    { id: 470, name: "Coal Shoveler" },
    { id: 471, name: "Desperado" },
    { id: 472, name: "Farrier" },
    { id: 473, name: "Lasso Cowgirl" },
    { id: 474, name: "Outlaw" },
    { id: 475, name: "Parlour Player" },
    { id: 476, name: "Prospector" },
    { id: 477, name: "Pyrite" },
    { id: 478, name: "Ruffian" },
    { id: 479, name: "Saloon Gal" },
    { id: 480, name: "Shopkeeper" },
    { id: 481, name: "Stagecoach Driver" },
    { id: 482, name: "Stuffy Banker" },
    { id: 483, name: "Tonic Salesman" },
    { id: 484, name: "Tumbleweed" },
    { id: 485, name: "Undertaker" },
    { id: 486, name: "Upper Class Lady" },
    { id: 487, name: "Angry Train Staff" },
    { id: 488, name: "Automorat" },
    { id: 489, name: "Black Powder Thief" },
    { id: 490, name: "Cannonball" },
    { id: 491, name: "Crate Camo" },
    { id: 492, name: "Cute Crate Carrier" },
    { id: 493, name: "Fuel" },
    { id: 495, name: "Hookshot" },
    { id: 496, name: "Magmatic Crystal Thief" },
    { id: 497, name: "Magmatic Golem" },
    { id: 498, name: "Mouse With No Name" },
    { id: 499, name: "Mysterious Traveller" },
    { id: 500, name: "Passenger" },
    { id: 501, name: "Photographer" },
    { id: 502, name: "Sharpshooter" },
    { id: 503, name: "Steel Horse Rider" },
    { id: 504, name: "Stoutgear" },
    { id: 505, name: "Stowaway" },
    { id: 506, name: "Supply Hoarder" },
    { id: 507, name: "Dangerous Duo" },
    { id: 508, name: "Train Conductor" },
    { id: 509, name: "Train Engineer" },
    { id: 510, name: "Travelling Barber" },
    { id: 511, name: "Warehouse Manager" },
    { id: 512, name: "Gluttonous Zombie" },
    { id: 513, name: "Titanic Brain-Taker" },
    { id: 514, name: "Mutated Brown" },
    { id: 515, name: "Sugar Rush" },
    { id: 516, name: "S.N.O.W. Golem" },
    { id: 517, name: "Snow Boulder" },
    { id: 518, name: "Snow Sorceress" },
    { id: 519, name: "Reinbo" },
    { id: 520, name: "Snowball Hoarder" },
    { id: 521, name: "Mutated Behemoth" },
    { id: 522, name: "Biohazard" },
    { id: 523, name: "Bog Beast" },
    { id: 524, name: "Gelatinous Octahedron" },
    { id: 525, name: "Hazmat" },
    { id: 526, name: "Lab Technician" },
    { id: 527, name: "The Menace" },
    { id: 528, name: "Monster Tail" },
    { id: 529, name: "Mutant Mongrel" },
    { id: 530, name: "Mutant Ninja" },
    { id: 531, name: "Mutated Siblings" },
    { id: 532, name: "Outbreak Assassin" },
    { id: 533, name: "Plague Hag" },
    { id: 534, name: "Scrap Metal Monster" },
    { id: 535, name: "Slimefist" },
    { id: 536, name: "Sludge" },
    { id: 537, name: "Sludge Soaker" },
    { id: 538, name: "Sludge Swimmer" },
    { id: 539, name: "Spore" },
    { id: 540, name: "Swamp Runner" },
    { id: 541, name: "Telekinetic Mutant" },
    { id: 542, name: "Tentacle" },
    { id: 543, name: "Toxic Warrior" },
    { id: 544, name: "Costumed Horse" },
    { id: 545, name: "Lovely Sports" },
    { id: 546, name: "Winter Games" },
    { id: 547, name: "M400" },
    { id: 548, name: "Breakdancer" },
    { id: 549, name: "El Flamenco" },
    { id: 550, name: "Dance Party" },
    { id: 551, name: "Para Para Dancer" },
    { id: 552, name: "Moussile" },
    { id: 553, name: "Cyborg" },
    { id: 554, name: "Riftweaver" },
    { id: 555, name: "Agitated Gentle Giant" },
    { id: 556, name: "Raw Diamond" },
    { id: 557, name: "Rift Guardian" },
    { id: 558, name: "Goliath Field" },
    { id: 559, name: "Dream Drifter" },
    { id: 560, name: "Wealth" },
    { id: 561, name: "Shard Centurion" },
    { id: 562, name: "Greyrun" },
    { id: 563, name: "Excitable Electric" },
    { id: 564, name: "Mighty Mole" },
    { id: 565, name: "Supernatural" },
    { id: 566, name: "Spiritual Steel" },
    { id: 567, name: "Micro" },
    { id: 568, name: "Brawny" },
    { id: 569, name: "Carefree Cook" },
    { id: 570, name: "Onion Chopper" },
    { id: 571, name: "Pan Slammer" },
    { id: 572, name: "Ancient of the Deep" },
    { id: 573, name: "Angelfish" },
    { id: 574, name: "Angler" },
    { id: 575, name: "Barnacle Beautician" },
    { id: 576, name: "Barracuda" },
    { id: 577, name: "Betta" },
    { id: 578, name: "Bottom Feeder" },
    { id: 579, name: "Carnivore" },
    { id: 580, name: "City Noble" },
    { id: 581, name: "City Worker" },
    { id: 582, name: "Clownfish" },
    { id: 583, name: "Clumsy Carrier" },
    { id: 584, name: "Coral" },
    { id: 585, name: "Coral Cuddler" },
    { id: 586, name: "Coral Dragon" },
    { id: 587, name: "Coral Gardener" },
    { id: 588, name: "Coral Guard" },
    { id: 589, name: "Coral Harvester" },
    { id: 590, name: "Coral Queen" },
    { id: 591, name: "Crabolia" },
    { id: 592, name: "Cuttle" },
    { id: 593, name: "Deep Sea Diver" },
    { id: 594, name: "Deranged Deckhand" },
    { id: 595, name: "Derpshark" },
    { id: 596, name: "Dread Pirate Mousert" },
    { id: 597, name: "Eel" },
    { id: 598, name: "Elite Guardian" },
    { id: 599, name: "Enginseer" },
    { id: 600, name: "Guppy" },
    { id: 601, name: "Hydrologist" },
    { id: 602, name: "Jellyfish" },
    { id: 603, name: "Koimaid" },
    { id: 604, name: "Manatee" },
    { id: 605, name: "Mermousette" },
    { id: 606, name: "Mershark" },
    { id: 607, name: "Mlounder Flounder" },
    { id: 608, name: "Octomermaid" },
    { id: 609, name: "Old One" },
    { id: 610, name: "Oxygen Baron" },
    { id: 611, name: "Pearl" },
    { id: 612, name: "Pearl Diver" },
    { id: 613, name: "Pirate Anchor" },
    { id: 614, name: "Puffer" },
    { id: 615, name: "Saltwater Axolotl" },
    { id: 616, name: "Sand Dollar Diver" },
    { id: 617, name: "Sand Dollar Queen" },
    { id: 618, name: "School of Mish" },
    { id: 619, name: "Seadragon" },
    { id: 620, name: "Serpent Monster" },
    { id: 621, name: "Spear Fisher" },
    { id: 622, name: "Stingray" },
    { id: 623, name: "Sunken Banshee" },
    { id: 624, name: "Sunken Citizen" },
    { id: 625, name: "Swashblade" },
    { id: 626, name: "Tadpole" },
    { id: 627, name: "Treasure Hoarder" },
    { id: 628, name: "Treasure Keeper" },
    { id: 629, name: "Tritus" },
    { id: 630, name: "Turret Guard" },
    { id: 631, name: "Urchin King" },
    { id: 632, name: "Captain Croissant" },
    { id: 633, name: "Amplified Brown" },
    { id: 634, name: "Amplified Grey" },
    { id: 635, name: "Amplified White" },
    { id: 636, name: "Assassin Beast" },
    { id: 637, name: "Automated Sentry" },
    { id: 638, name: "Big Bad Behemoth Burroughs" },
    { id: 639, name: "Rift Bio Engineer" },
    { id: 640, name: "Boulder Biter" },
    { id: 641, name: "Clump" },
    { id: 642, name: "Count Vampire" },
    { id: 643, name: "Cyber Miner" },
    { id: 644, name: "Cybernetic Specialist" },
    { id: 645, name: "Doktor" },
    { id: 646, name: "Evil Scientist" },
    { id: 647, name: "Itty Bitty Rifty Burroughs" },
    { id: 648, name: "Lambent" },
    { id: 649, name: "Lycanoid" },
    { id: 650, name: "Master Exploder" },
    { id: 651, name: "Mecha Tail" },
    { id: 652, name: "The Menace of the Rift" },
    { id: 653, name: "Monstrous Abomination" },
    { id: 654, name: "Phase Zombie" },
    { id: 655, name: "Plutonium Tentacle" },
    { id: 656, name: "Pneumatic Dirt Displacement" },
    { id: 657, name: "Portable Generator" },
    { id: 658, name: "Prototype" },
    { id: 659, name: "Super Mega Mecha Ultra RoboGold" },
    { id: 660, name: "Rancid Bog Beast" },
    { id: 661, name: "Revenant" },
    { id: 662, name: "Rifterranian" },
    { id: 663, name: "Robat" },
    { id: 664, name: "Radioactive Ooze" },
    { id: 665, name: "Surgeon Bot" },
    { id: 666, name: "Tech Ravenous Zombie" },
    { id: 667, name: "Toxic Avenger" },
    { id: 668, name: "Toxikinetic" },
    { id: 669, name: "Zombot Unipire the Third" },
    { id: 670, name: "Candy Cat" },
    { id: 671, name: "Candy Goblin" },
    { id: 672, name: "Grey Recluse" },
    { id: 673, name: "Hollowed" },
    { id: 674, name: "Mousataur Priestess" },
    { id: 675, name: "Shortcut" },
    { id: 676, name: "Tricky Witch" },
    { id: 677, name: "Builder" },
    { id: 678, name: "Frigid Foreman" },
    { id: 679, name: "Glacia Ice Fist" },
    { id: 680, name: "Hoarder" },
    { id: 681, name: "Miser" },
    { id: 682, name: "Stuck Snowball" },
    { id: 683, name: "Tundra Huntress" },
    { id: 684, name: "Borean Commander" },
    { id: 686, name: "Red Coat Bear" },
    { id: 687, name: "Monstrous Black Widow" },
    { id: 688, name: "Centaur Ranger" },
    { id: 689, name: "Karmachameleon" },
    { id: 690, name: "Cherry Sprite" },
    { id: 691, name: "Naturalist" },
    { id: 692, name: "Cyclops Barbarian" },
    { id: 693, name: "Red-Eyed Watcher Owl" },
    { id: 694, name: "Treant Queen" },
    { id: 695, name: "Spirit of Balance" },
    { id: 696, name: "Spirit Fox" },
    { id: 697, name: "Fungal Frog" },
    { id: 698, name: "Crazed Goblin" },
    { id: 699, name: "Gilded Leaf" },
    { id: 700, name: "Winged Harpy" },
    { id: 701, name: "Tri-dra" },
    { id: 702, name: "Mossy Moosker" },
    { id: 703, name: "Nomadic Warrior" },
    { id: 705, name: "Medicine" },
    { id: 706, name: "Grizzled Silth" },
    { id: 707, name: "Bloomed Sylvan" },
    { id: 708, name: "Rift Tiger" },
    { id: 709, name: "Twisted Treant" },
    { id: 710, name: "Tree Troll" },
    { id: 711, name: "Water Sprite" },
    { id: 712, name: "Cranky Caterpillar" },
    { id: 713, name: "Gentleman Caller" },
    { id: 714, name: "Costumed Sheep" },
    { id: 715, name: "Cupcake Cutie" },
    { id: 716, name: "Cupcake Runner" },
    { id: 717, name: "Chocolate Gold Foil" },
    { id: 718, name: "Bitter Root" },
    { id: 719, name: "Cavern Crumbler" },
    { id: 720, name: "Crag Elder" },
    { id: 721, name: "Crystal Behemoth" },
    { id: 722, name: "Crystal Cave Worm" },
    { id: 723, name: "Crystal Controller" },
    { id: 724, name: "Crystal Golem" },
    { id: 725, name: "Crystal Lurker" },
    { id: 726, name: "Crystal Observer" },
    { id: 727, name: "Crystal Queen" },
    { id: 728, name: "Crystalback" },
    { id: 729, name: "Crystalline Slasher" },
    { id: 730, name: "Diamondhide" },
    { id: 731, name: "Dirt Thing" },
    { id: 732, name: "Floating Spore" },
    { id: 733, name: "Funglore" },
    { id: 734, name: "Gemorpher" },
    { id: 735, name: "Gemstone Worshipper" },
    { id: 736, name: "Huntereater" },
    { id: 737, name: "Lumahead" },
    { id: 738, name: "Mouldy Mole" },
    { id: 739, name: "Mush" },
    { id: 740, name: "Mushroom Sprite" },
    { id: 741, name: "Nightshade Masquerade" },
    { id: 742, name: "Quillback" },
    { id: 743, name: "Shattered Obsidian" },
    { id: 744, name: "Spiked Burrower" },
    { id: 745, name: "Splintered Stone Sentry" },
    { id: 746, name: "Spore Muncher" },
    { id: 747, name: "Sporeticus" },
    { id: 748, name: "Stalagmite" },
    { id: 749, name: "Stone Maiden" },
    { id: 750, name: "Ancient Scribe" },
    { id: 751, name: "Ash Golem" },
    { id: 752, name: "Automated Stone Sentry" },
    { id: 753, name: "Battle Cleric" },
    { id: 754, name: "Corridor Bruiser" },
    { id: 755, name: "Dark Templar" },
    { id: 756, name: "Decrepit Tentacle Terror" },
    { id: 757, name: "Drudge" },
    { id: 758, name: "Ethereal Guardian" },
    { id: 759, name: "Exo-Tech" },
    { id: 760, name: "Sir Fleekio" },
    { id: 761, name: "Fungal Technomorph" },
    { id: 762, name: "Hired Eidolon" },
    { id: 763, name: "Lost" },
    { id: 764, name: "Lost Legionnaire" },
    { id: 765, name: "Manaforge Smith" },
    { id: 766, name: "Paladin Weapon Master" },
    { id: 767, name: "Masked Pikeman" },
    { id: 768, name: "Matron of Machinery" },
    { id: 769, name: "Matron of Wealth" },
    { id: 770, name: "Mimic" },
    { id: 771, name: "Mind Tearer" },
    { id: 772, name: "Shadow Stalker" },
    { id: 773, name: "Molten Midas" },
    { id: 774, name: "Mush Monster" },
    { id: 775, name: "Mushroom Harvester" },
    { id: 776, name: "Mystic Guardian" },
    { id: 777, name: "Mystic Herald" },
    { id: 778, name: "Mystic Scholar" },
    { id: 779, name: "Nightshade Fungalmancer" },
    { id: 780, name: "Nightshade Nanny" },
    { id: 781, name: "Reanimated Carver" },
    { id: 782, name: "Retired Minotaur" },
    { id: 783, name: "RR-8" },
    { id: 784, name: "Sanguinarian" },
    { id: 785, name: "Solemn Soldier" },
    { id: 786, name: "Soul Binder" },
    { id: 787, name: "Summoning Scholar" },
    { id: 788, name: "Tech Golem" },
    { id: 789, name: "Treasure Brawler" },
    { id: 790, name: "Dire Lycan" },
    { id: 791, name: "Gourd Ghoul" },
    { id: 792, name: "Hollowed Minion" },
    { id: 793, name: "Bonbon Gummy Globlin" },
    { id: 794, name: "Maize Harvester" },
    { id: 795, name: "Spectral Butler" },
    { id: 796, name: "Teenage Vampire" },
    { id: 797, name: "Black Diamond Racer" },
    { id: 798, name: "Double Black Diamond Racer" },
    { id: 799, name: "Free Skiing" },
    { id: 800, name: "Young Prodigy Racer" },
    { id: 801, name: "Nitro Racer" },
    { id: 802, name: "Sporty Ski Instructor" },
    { id: 803, name: "Toboggan Technician" },
    { id: 804, name: "Rainbow Racer" },
    { id: 805, name: "Costumed Monkey" },
    { id: 806, name: "Cupcake Camo" },
    { id: 807, name: "Cupcake Candle Thief" },
    { id: 808, name: "Armored Archer" },
    { id: 809, name: "Dancing Assassin" },
    { id: 810, name: "Master of the Chi Belt" },
    { id: 811, name: "Student of the Chi Belt" },
    { id: 812, name: "Master of the Chi Claw" },
    { id: 813, name: "Student of the Chi Claw" },
    { id: 814, name: "Grand Master of the Dojo" },
    { id: 815, name: "Supreme Sensei" },
    { id: 816, name: "Dumpling Delivery" },
    { id: 817, name: "Master of the Chi Fang" },
    { id: 818, name: "Student of the Chi Fang" },
    { id: 819, name: "Ascended Elder" },
    { id: 820, name: "Shaolin Kung Fu" },
    { id: 821, name: "Wandering Monk" },
    { id: 822, name: "Shinobi" },
    { id: 823, name: "Militant Samurai" },
    { id: 824, name: "Enlightened Labourer" },
    { id: 825, name: "Wave Racer" },
    { id: 826, name: "Creepy Marionette" },
    { id: 827, name: "Sandmouse" },
    { id: 828, name: "Arcane Summoner" },
    { id: 829, name: "Meteorite Mover" },
    { id: 830, name: "Battering Ram" },
    { id: 831, name: "Cursed Taskmaster" },
    { id: 832, name: "Dawn Guardian" },
    { id: 833, name: "Mining Materials Manager" },
    { id: 834, name: "Night Shift Materials Manager" },
    { id: 835, name: "Hardworking Hauler" },
    { id: 836, name: "Mischievous Meteorite Miner" },
    { id: 837, name: "Mischievous Wereminer" },
    { id: 838, name: "Monster of the Meteor" },
    { id: 839, name: "Meteorite Golem" },
    { id: 840, name: "Meteorite Miner" },
    { id: 841, name: "Meteorite Mystic" },
    { id: 842, name: "Hypnotized Gunslinger" },
    { id: 843, name: "Meteorite Snacker" },
    { id: 844, name: "Night Watcher" },
    { id: 845, name: "Nightfire" },
    { id: 846, name: "Nightmancer" },
    { id: 847, name: "Reveling Lycanthrope" },
    { id: 848, name: "Wealthy Werewarrior" },
    { id: 849, name: "Alpha Weremouse" },
    { id: 850, name: "Werehauler" },
    { id: 851, name: "Wereminer" },
    { id: 852, name: "Joy" },
    { id: 853, name: "Great Winter Hunt Impostor" },
    { id: 854, name: "Frightened Flying Fireworks" },
    { id: 855, name: "Costumed Rooster" },
    { id: 856, name: "Sprinkly Sweet Cupcake Cook" },
    { id: 857, name: "Heart of the Meteor" },
    { id: 858, name: "Barmy Gunner" },
    { id: 859, name: "Bilged Boatswain" },
    { id: 860, name: "Cabin Boy" },
    { id: 861, name: "Corrupt Commodore" },
    { id: 862, name: "Dashing Buccaneer" },
    { id: 863, name: "Eggsquisite Entertainer" },
    { id: 864, name: "Tomb Exhumer" },
    { id: 865, name: "Absolute Acolyte" },
    { id: 866, name: "Chronomaster" },
    { id: 867, name: "Vigilant Ward" },
    { id: 868, name: "Portal Paladin" },
    { id: 869, name: "Epoch Golem" },
    { id: 870, name: "Timeslither Pythoness" },
    { id: 871, name: "Record Keeper" },
    { id: 872, name: "Record Keeper's Assistant" },
    { id: 873, name: "Timeless Lich" },
    { id: 874, name: "Sentient Slime" },
    { id: 875, name: "Chamber Cleaver" },
    { id: 876, name: "Harbinger of Death" },
    { id: 877, name: "Portal Plunderer" },
    { id: 878, name: "Skeletal Champion" },
    { id: 879, name: "Timelost Thaumaturge" },
    { id: 880, name: "Shackled Servant" },
    { id: 881, name: "Clockwork Timespinner" },
    { id: 882, name: "Portal Pursuer" },
    { id: 883, name: "Dread Knight" },
    { id: 884, name: "Carrion Medium" },
    { id: 885, name: "Artillery Commander" },
    { id: 886, name: "Charming Chimer" },
    { id: 887, name: "Cloud Collector" },
    { id: 888, name: "Cycloness" },
    { id: 889, name: "Dragoon" },
    { id: 890, name: "Fluttering Flutist" },
    { id: 891, name: "Ful'Mina, The Mountain Queen" },
    { id: 892, name: "Homeopathic Apothecary" },
    { id: 893, name: "Monsoon Maker" },
    { id: 894, name: "Nightshade Flower Girl" },
    { id: 895, name: "Nightshade Maiden" },
    { id: 896, name: "Rain Collector" },
    { id: 897, name: "Rainwater Purifier" },
    { id: 898, name: "Rain Wallower" },
    { id: 899, name: "Rainmancer" },
    { id: 900, name: "Spore Salesman" },
    { id: 901, name: "Rain Summoner" },
    { id: 902, name: "Thundering Watcher" },
    { id: 903, name: "Thunderlord" },
    { id: 904, name: "Thunder Strike" },
    { id: 905, name: "Violet Stormchild" },
    { id: 906, name: "Breeze Borrower" },
    { id: 907, name: "Windy Farmer" },
    { id: 908, name: "Wind Warrior" },
    { id: 909, name: "Wind Watcher" },
    { id: 910, name: "Captain Cannonball" },
    { id: 911, name: "Ghost Pirate Queen" },
    { id: 912, name: "Scorned Pirate" },
    { id: 913, name: "Spectral Swashbuckler" },
    { id: 914, name: "Craggy Ore" },
    { id: 915, name: "Mountain" },
    { id: 916, name: "Slope Swimmer" },
    { id: 917, name: "Snow Golem Jockey" },
    { id: 918, name: "Nice Knitting" },
    { id: 919, name: "Snow Golem Architect" },
    { id: 920, name: "Naughty Nougat" },
];

var mice = []

function crownType(node) {
    if (node.hasClass('gold')) { return 'gold'; }
    if (node.hasClass('silver')) { return 'silver'; }
    if (node.hasClass('bronze')) { return 'bronze'; }

    return 'none';
}

function addMouse(mouse) {
    var encountered = false;

    for (var i = 0; i < mice.length; i++) {
        var toCheck = mice[i];

        if (toCheck.id == mouse.id) {
            encountered = true;
        }
    }

    if (!encountered) {
        if (mouse.name.indexOf('Mousert') < 0) {
            mouse.name = mouse.name.replace(' Mouse', '')
        }
        mice.push(mouse)
    }
}

$('.mousebox').each(function(i, node) {
    var mouse = {
        name: $(node).find('img').attr('title'),
        catches: $(node).find('.numcatches').text(),
        crownType: crownType($(node).find('.numcatches'))
    }

    var parent = $(node).parent('.favoriteCrownToggle');

    if (parent.length > 0) {
        mouse.id = parent.data('mouse-id');
    } else {
        var uniq = $(node).find('img').attr('title');

        if (uniq == "Keeper Mouse") {
            mouse.id = 108;
        } else if (uniq == "Keeper") {
            mouse.id = 109;
        } else {
            allMice.forEach(function(m) {
                var mouseName = m.unique || m.name;
                if (mouseName == uniq || mouseName + " Mouse" == uniq) {
                    mouse.id = m.id;
                }
            });
        }

    }

    addMouse(mouse);
});

var remaining = $('select.remainingMouse option');

remaining.each(function(i, node) {
    var id = $(node).val();
    var text = $(node).text();

    if (id) {
        var mouse = {
            id: id,
            name: text.substring(0, text.lastIndexOf(' (')),
            catches: text.substring(text.lastIndexOf(' (') + 2, text.length - 1),
            crownType: 'none'
        }

        addMouse(mouse);
    }
});

allMice.forEach(function(allMouse) {
    var caught = false;

    mice.forEach(function(mouse) {
        if (mouse.id == allMouse.id) {
            caught = true;
            mouse.name = allMouse.name;
        }
    });

    if (!caught) {
        allMouse.catches = 0;
        addMouse(allMouse);
    }
});

//output


var mice = mice.sort(function(a, b) { return a.id - b.id; })

var label = "Found data for " + mice.length + " mice\n";
var output = "";


for (var i = 0; i < mice.length; i++) {
    var mouse = mice[i];
    output += mouse.id + "\t" + mouse.name + "\t" + mouse.catches + "\n";
}

var golds = mice.reduce(function(count, mouse) {
    return count + (mouse.crownType === "gold" ? 1 : 0);
}, 0);

var silvers = mice.reduce(function(count, mouse) {
    return count + (mouse.crownType === "silver" ? 1 : 0);
}, 0);

var bronze = mice.reduce(function(count, mouse) {
    return count + (mouse.crownType === "bronze" ? 1 : 0);
}, 0);

var total = golds + silvers + bronze;
var perc = (total / allMice.length) * 100;
var percCC = ((golds + silvers) / (allMice.length-5)) * 100;
var perc90 = (total / (allMice.length-5)) * 100;

var crownStat = function(label, count) {
    return "   # of " + label + " Crowns: " + count + " (" + (count / allMice.length * 100).toFixed(2) + "%)";
}

var stats = "Total Crowns: " + total + "/" + allMice.length + " (" + (perc.toFixed(2)) + "%)";
stats += "\n" + crownStat("Gold", golds);
stats += "\n" + crownStat("Silver", silvers);
stats += "\n" + crownStat("Bronze", bronze);
stats += "\n\nExcluding 5 Prize mice:";
stats += "\n   Century Club " + (golds + silvers) + "/" + (allMice.length-5) + " (" + (percCC.toFixed(2)) + "%)";
stats += "\n   90% Club " + total + "/" + (allMice.length-5) + " (" + (perc90.toFixed(2)) + "%)";

$('.mhccOutput').remove();

var html = "<div class=\"mhccOutput\"><textarea style=\"width:48%;min-height: 250px;\">" + output + "</textarea><textarea style=\"width: 49%; min-height: 250px;\">" + stats + "</textarea></div>";


$('#overlayContainer .container #header').after($(html));
