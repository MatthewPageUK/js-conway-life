// Source - http://www.conwaylife.com/wiki/Main_Page

const lifeformData = [
`#N Hivenudger
#O Hartmut Holzwart
#C A period 4 c/2 orthogonal spaceship.
#C www.conwaylife.com/wiki/index.php?title=Hivenudger
x = 13, y = 13, rule = B3/S23
4o5bo2bo$o3bo3bo4b$o7bo3bo$bo2bo3b4ob2$5b2o6b$5b2o6b$5b2o6b2$bo2bo3b4o
b$o7bo3bo$o3bo3bo4b$4o5bo2bo!`, 

`#N Lidka
#O Andrzej Okrasinski and David Bell
#C A methuselah with lifespan 29055.
#C www.conwaylife.com/wiki/index.php?title=Lidka
x = 9, y = 15, rule = B3/S23
bo7b$obo6b$bo7b8$8bo$6bobo$5b2obo2$4b3o!`,

`#N Queen bee
#C A pattern that lays a beehive on either side of itself before exploding.
#C www.conwaylife.com/wiki/index.php?title=Queen_bee
x = 7, y = 5, rule = b3/s23
3bo3b$2bobo2b$bo3bob$2b3o2b$2o3b2o!`,

`#N Beacon maker
#C A diagonal period 8 lightspeed fuse that creates beacons as its burns.
#C www.conwaylife.com/wiki/index.php?title=Beacon_maker
x = 16, y = 15, rule = B3/S23
14b2o$13bobo$12bo3b$11bo4b$10bo5b$9bo6b$8bo7b$7bo8b$6bo9b$5bo10b$4bo
11b$3bo12b$3o13b$2bo13b$2bo!`,

`#N Ants
#C An orthogonal period 5 lightspeed wick.
#C www.conwaylife.com/wiki/index.php?title=Ants
x = 44, y = 4, rule = B3/S23
2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o2b$2b2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o
3b2o$2b2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o$2o3b2o3b2o3b2o3b2o3b2o3b2o3b
2o3b2o!`,

`#N New gun 2
#O Bill Gosper
#C A true period 144 glider gun that consists of a block factory whose output is converted into gliders by a period 72 oscillator.
#C www.conwaylife.com/wiki/index.php?title=New_gun_2
x = 51, y = 24, rule = B3/S23
23b2o24b2o$23b2o24b2o$41b2o8b$40bo2bo7b$41b2o8b2$36b3o12b$36bobo12b$9b
2o25b3o12b$9b2o25b2o13b$8bo2bo23b3o13b$8bo2bob2o20bobo13b$8bo4b2o20b3o
13b$10b2ob2o36b$31b2o18b$21b2o7bo2bo17b$21b2o8b2o18b$49b2o$49b2o2$4b2o
18bo26b$2o4b4o10b2o2b2ob3o21b$2o2b2ob3o10b2o4b4o21b$4bo19b2o!`,

`#N B-52 bomber
#O Noam Elkies
#C A true period 104 double-barrelled glider gun. It uses a B-heptomino and
#C emits one glider every 52 generations.
#C www.conwaylife.com/wiki/index.php?title=B-52_bomber
x = 39, y = 21, rule = B3/S23
b2o36b$b2o17bo18b$19bobo12bobo2b$20bo12bo5b$2o7b2o23bo2bob$2obo5b2o23b
obobo$3bo23bo7bo2bo$3bo23b2o7b2ob$o2bo17b2o5bo10b$b2o18bo17b$21b3o15b$
36b2ob$36b2ob$b2o36b$o2bo35b$obobo16bobo4b2o5b2o2b$bo2bo17b2o4b2o5b2ob
o$5bo12bo3bo15bo$2bobo12bobo18bo$18bo16bo2bo$36b2o!`,

`#N Vacuum (gun)
#O Dieter Leithner
#C A true period 46 double-barreled gun found on February 21, 1997.
#C www.conwaylife.com/wiki/index.php?title=Vacuum_(gun)
x = 49, y = 43, rule = b3/s23
b2o23b2o21b$b2o23bo22b$24bobo22b$15b2o7b2o23b$2o13bobo31b$2o13bob2o30b
$16b2o31b$16bo32b$44b2o3b$16bo27b2o3b$16b2o31b$2o13bob2o13bo3bo12b$2o
13bobo13bo5bo7b2o2b$15b2o14bo13b2o2b$31b2o3bo12b$b2o30b3o13b$b2o46b$
33b3o13b$31b2o3bo12b$31bo13b2o2b$31bo5bo7b2o2b$32bo3bo12b2$44b2o3b$44b
2o3b5$37b2o10b$37bobo7b2o$39bo7b2o$37b3o9b$22bobo24b$21b3o25b$21b3o25b
$21bo15b3o9b$25bobo11bo9b$21b2o4bo9bobo9b$16b2o4bo3b2o9b2o10b$15bobo6b
o24b$15bo33b$14b2o!`,


`#N 3-engine Cordership gun
#O Paul Tooke
#C A gun that fires 3-engine Corderships.
#C www.conwaylife.com/wiki/index.php?title=3-engine_Cordership_gun
x = 279, y = 258, rule = b3/s23
115bo163b$106bo8b2o162b$105bobo2b2o4b2o161b$105bobo2b2o4b3o7b2o151b$
106bo3b2o4b2o8b2o151b$115b2o62b2o98b$115bo63b2o98b$23b2o78b2o3b2o169b$
23b2o78b2o3b2o169b2$105b3o116b2o53b$24bo80b3o115bobo53b$23bobo80bo23b
2o90bo6b2o48b$22bo3bo86b2o14b2ob2o6b2o80bo2bo2bo2bob2o44b$22b5o86b2o
15bo2bo6b2o37bo42bo6b2o2b2o44b$21b2o3b2o102bo2bo44b3o31b3o8bobo28b2o
23b$22b5o73bobo28b2o44b5o42b2o28b2o23b$23b3o74bo3bo71b2o3b2o29bobo64b$
24bo65b2o12bo9b3ob3o10b2o78b5o63b$90b2o8bo4bo7bob2ob2obo8bo2bo27b2o47b
2o3b2o62b$104bo7b2o7b2o7bo2bo6b2o2b2o14b2ob2o6b2o37b2o3b2o62b$41b2o57b
o3bo8bob2ob2obo7b2ob2o6b2o2b2o15bo2bo6b2o5b3o73bo24b$31b2o7bobo15b2o
40bobo11b3ob3o9b2o29bo2bo13b3o46b2o2bobo20bo24b$31b2o6b2obo15b2o102b2o
19b2o28bo6b2o4b3obo3bo12b2o4bobo23b$40b2o141b2o26b2o7b2o3b2o6bo13b2o3b
2ob2o22b$17b2o22bo120b2o14b2o6b2o6b2o30bob5o18bo5bo21b$17bobo141bo2bo
12bo2bo5b3o5b2o11bo2bo16b3o24bo24b$8b3ob2o4b3o20bo102b2o15bo2bo13b2o6b
2o17bobo2bo40b2o3b2o21b$8b4o2bo4b3o18b2o102b2o14b2ob2o18b2o12b2o4b2o9b
o12b3o33b2o14b$12b2o4b3o18b2obo15b2o101b2o20b2o12b2o4b2o6bo14bob5o30bo
bo13b$17bobo20bobo15b2o143b2o8b2o10b2o6bo13b2o5bo3b2o4b3o12b$17b2o22b
2o162bobo18b3obo3bo12b2o4bob3o2bo4b3o11b$207bo19b2o2bobo19bob2ob2o4b3o
12b$186b2o66bo8bobo13b$186b2o75b2o14b$53b2o224b$54bo224b$54bobo8b2o
119b3o90b$20b2o5b2o26b2o6bo2bo7bo111b3o70b2o18b$20b2o5b2o33bo7b2o3bo
177bo5b2o18b$62bo6bo5bo176b3o24b$62bo7b5o176bo3bo14bo8b$63bo2bo117b2o
3b2o60b2ob2o13b3o7b$65b2o118b5o78b5o6b$76b2o108b3o63b3o12b2o3b2o5b$77b
o109bo64b3o13b5o6b$77bobo8b2o84bo93bo3bo6b$78b2o7b3o83bobo93bobo7b$84b
ob2o9b2o73bob2o94bo8b$84bo2bo4bo5bo67b2o3b2ob2o103b$84bob2o5bo72b2o4bo
b2o103b$87b3o3bo3bo75bobo70bo7b2ob2o10b2o8b$88b2o5bo78bo48b2o19b3o7b2o
b2o10b2o8b$223bo19bo10b2ob2o20b$210bo10bobo19b2o7bob2ob2obo18b$19b2obo
3bob2o66b2o111bobo9b2o29b3o3b3o18b$19bo2bo3bo2bo67bo83b2o19b2o3b2o3bo
40bo5bo19b$20b3o3b3o68bobo10bo69bo2bo18b2o3b2o3bo27b3o36b$98b2o9b4o67b
o7bo18b2o3bo27b3o36b$108b2obobo3b2o61bo2bo3bobo19bobo27bo3bo35b$107b3o
bo2bo2b2o61b2ob2ob2ob2o19bo27bo5bo34b$108b2obobo70bobo52bo3bo35b$109b
4o70b2ob2o52b3o36b$110bo168b$130bo148b$20b2o108b3o119b2o5b2o18b$20b2o
111bo118b2o5b2o18b$132b2o47b3o3b3o89b$180bo9bo88b$180bo3bobo3bo88b$14b
2o165b3o3b3o89b$14bobo165bo5bo90b$9b2o6bo223b2o36b$5b2obo2bo2bo2bo116b
3o104b2o36b$5b2o2b2o6bo115bo3bo141b$14bobo8b3o251b$14b2o116bo5bo140b$
25bobo104b2o3b2o140b$24b5o250b$23b2o3b2o249b$23b2o3b2o105bo92bo50b$
134bobo89b3o50b$134bobo88bo53b$26bo109bo44b2o5b2o35b2o52b$27b2o107bo
44b2o5b2o89b$133bo2bo86bo55b$29bo104b2o86b3o54b$221bo3bo53b$25bo2bo
194bo55b$25b2o193bo5bo52b$220bo5bo52b$221bo3bo53b$222b3o54b4$228bo2bo
47b$231bo7b3o23bo13b$227bo9bo4bo21bobo12b$227b2o8bo5bo19bob2o12b$233bo
8bo19b2ob2o10b2o$52b2o14bo7b2o145b2o5b2o8b2o21bob2o10b2o$51bobo13b2o6b
o2bo12b2o130b2o39bobo12b$50bo6b2o7bo8bo2b2o11b2o137b2o8b2o23bo13b$41b
2o7bo2bo2bo2bo7b2obo4bo2bo154bo8bo36b$41b2o7bo6b2o9b3o6bo149b2o8bo5bo
10b2o23b$51bobo173bo9bo4bo11b2o23b$52b2o14b3o6bo153bo7b3o19b3o15b$65bo
b2obo4bo2bo18b2o129bo2bo28b2ob2o14b$56b3o5bo10bo2b2o11b2o4bobo160b2ob
2o14b$56b3o5bo3bo6bo2bo12b2o5b3o159b5o14b$11b2o42bo3bo5b4o7b2o21b2o
158b2o3b2o13b$10bobo13b3o5b4o12b2o2bo5bo38b2o178b$9b3o4b2o8bo7b2obo12b
2o3bo3bo37bobo179b$2o6b3o4bo2bo7b2obo7bo18b3o39bo180b$2o7b3o4b2o10b2o
5b2o242b$10bobo247b2o17b$11b2o15b2o5b2o58b2o3b2o177b$16bo9b2obo7bo57b
2o3b2o177b$15bobo5b4o7b2obo12b2o227b$14bo3bo4b6o5b4o12b2o45b3o162b2o
15b$14b5o67bo10b3o162b2o15b$13b2o3b2o66b2o10bo180b$14b5o58b2o2b2o4b2o
190b$15b3o38b2o19b2o2b2o4b3o189b$16bo39b2o23b2o4b2o190b$86b2o191b$86bo
192b4$92b2o185b$74b2o16b2o185b$74b2o203b$15b2o262b$15b2o262b2$93bo5bo
179b$92b3o3b3o178b$91bo2b2ob2o2bo177b$91bo3bobo3bo177b$93bobobobo179b$
72b2obob2o200b$90b2ob2o3b2ob2o176b$72bo5bo13bo7bo178b$63b2o214b$63b2o
8b2ob2o201b$54b2o3bo6b2o7bo203b$54bobo3bo5b3o210b$55b5o6b2o211b$56b3o
4b2o214b$63b2o214b4$51b2o16b2o208b$51b2o16b2o208b$75b3o201b$74bo3bo13b
2o5b2o178b$74b2ob2o13b2o5b2o178b2$74b2ob2o200b$76bo202b$148bo130b$147b
obo129b$147b2obo128b$69bo7bo69b2ob2o3b2o122b$49b2o3b2o12bo2bo3bo2bo68b
2obo4b2o122b$40bobo8b3o18bobo61b2o9bobo129b$40bo2bo6bo3bo17bobo60bobo
10bo130b$31b2o10b2o6bobo18bobo60bo143b$31b2o8bo3b2o5bo15bo2bo3bo2bo55b
2o143b$36b2o5b2o24b3o3b3o201b$35bo4bo2bo235b$40bobo236b4$46b2o5bo225b$
27b2o17b2o4b3o224b$27b2o22b2ob2o223b2$50bobobobo12b2o5b2o201b$69b2o5b
2o201b$51b2ob2o61bo161b$51b2ob2o60bobo160b$53bo60b2o3bo159b$114b2o3bo
9b2o148b$28bo85b2o3bo9b2o148b$27b3o80b2o4bobo160b$26b5o78bobo5bo161b$
25b2o3b2o77bo169b$20bo87b2o169b$19bobo257b$7b2o10b2obo256b$7b2o10b2ob
2o3b3o15b2obo3bob2o223b$19b2obo4b3o15bo2bo3bo2bo223b$19bobo24b3o3b3o
224b$20bo258b4$22b2o4b3o248b$22b2o3bo3bo247b$27b2ob2o247b$28bobo15b2o
5b2o39bo184b$46b2o5b2o39b4o181b$28bobo64b4o180b$27b2ob2o63bo2bo5b2o
173b$27bo3bo63b4o5b2o173b$28b3o54b2o7b4o181b$84bobo7bo184b$84bo194b$
83b2o194b6$21b3o5b3o247b$21bo2b2ob2o2bo247b$22b3o3b3o248b$23bo5bo249b$
63bobo213b$63bo2bo212b$66b2o211b$64bo3b2o4b2o203b$66b2o6b2o203b$55b2o
6bo2bo212b$22b2o5b2o23bobo6bobo213b$22b2o5b2o23bo224b$53b2o224b3$37bo
3bo237b$21b2o13bobobobo8b4o224b$21bobo10b2o2bobo2b2o6bo2b2o6b2o215b$
16b2o6bo9b2o7b2o7bo2b2o5b2o215b$12b2obo2bo2bo2bo9b2o2bobo2b2o7bo2bo
223b$12b2o2b2o6bo11bobobobo10b2o224b$21bobo13bo3bo237b$21b2o30b2o224b$
52bo2bo223b$35b2o15bo2b2o5b2o215b$35b2o14bo2b2o6b2o215b$51b4o224b4$27b
3o249b$26bo3bo248b$25bo5bo5bobo239b$26bo3bo4bo3bo239b$27b3o5bo12b2o
229b$27b3o4bo4bo8b2o229b$35bo243b$35bo3bo239b$37bobo!`,

`#N Gosper glider gun
#O Bill Gosper
#C A true period 30 glider gun.
#C The first known gun and the first known finite pattern with unbounded growth.
x = 36, y = 9, rule = B3/S23
24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8b
o3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!`,

`#N Glider
#O Richard K. Guy
#C The smallest, most common, and first discovered spaceship. Diagonal, has period 4 and speed c/4.
x = 3, y = 3, rule = B3/S23
bob$2bo$3o!`,

`#N Circle of fire
#O Unknown
#C http://conwaylife.com/wiki/Circle_of_fire
#C http://conwaylife.com/patterns/circleoffire.rle
x = 11, y = 11, rule = B3/S23
4bobo$2bo2bo2bo$3bobobo$b3obob3o$5bo$5ob5o$5bo$b3obob3o$3bobobo$2bo2bo
2bo$4bobo!`,

`#N Clock
#O Simon Norton
#C A period 2 oscillator that was found in May 1970. This is the fifth or sixth most common oscillator, being about as frequent as the pentadecathlon, but much less frequent than the blinker, toad, beacon or pulsar.
#C www.conwaylife.com/wiki/index.php?title=Clock
x = 4, y = 4, rule = B3/S23
2bob$obob$bobo$bo!`,

`#N Very long clock
#O Unknown
#C http://conwaylife.com/wiki/Very_long_clock
#C http://conwaylife.com/patterns/verylongclock.rle
x = 12, y = 8, rule = B3/S23
6bo$4bobobo$2bobobobobo$obobobobobo$bobobobobobo$bobobobobo$3bobobo$5b
o!`,

`#N Tripole
#C The barberpole of length 3 and thus a period 2 oscillator.
#C www.conwaylife.com/wiki/index.php?title=Tripole
x = 6, y = 6, rule = B3/S23
2o4b$obo3b2$2bobob$5bo$4b2o!`,

`#N Glider emulator
#O Gabriel Nivasch
#C P4 tagalong for two big gliders, discovered in January 1999.
x = 30, y = 28, rule = B3/S23
14b2o$13b2o3bo$15bob2o$11bo5b3o$10b2o5bo$10bobo6b2o$20b3o$12b3o5bo3bo$
11b3o7bo2bo$5bo7bobo6b2ob2o$4b5o6b3o7b2o$4bo2b2o7bobo4bo2bo$6b2obo6bo
2bo6bob2o$b2o16bobo2b3o$2o7bobo5b2o4bo$bobo6b2o7b2o2bo$b3o6b3o6b5o$b2o
10b2o$3bobo9bo6bo$6b2o7bo6bo$5b3o5b2o2b2o$7bo6bob3o4b2o$8bo2bo3bo6b3o$
8bo2b2o5bo2b3o$9b2o2bo$12bo$11b2o$11b2obo!`,

`#N Dart
#O David Bell
#C An orthogonal period 3 spaceship with speed c/3 that was found in May 1992.
x = 15, y = 10, rule = B3/S23
7bo7b$6bobo6b$5bo3bo5b$6b3o6b2$4b2o3b2o4b$2bo3bobo3bo2b$b2o3bobo3b2ob$
o5bobo5bo$bob2obobob2obo!`,

`#N Fireship
#O Simon Ekström
x = 12, y = 21, rule = B3/S23
4bo2bo$4bo2bo$3bo4bo$3bo4bo$3bo4bo$3bo4bo$2b3o2b3o$2bob4obo$3bo4bo3$5b
2o$5b2o$5b2o$3bo4bo$b3o4b3o$3o6b3o$2o8b2o$b10o$2b8o$4b4o!`,

`#N Simkin glider gun
#O Michael Simkin
#C A true period 120 glider gun, found on April 28, 2015.
x = 33, y = 21, rule = B3/S23
2o5b2o$2o5b2o2$4b2o$4b2o5$22b2ob2o$21bo5bo$21bo6bo2b2o$21b3o3bo3b2o$
26bo4$20b2o$20bo$21b3o$23bo!`,

`#N Bi-gun
#O Bill Gosper
#C A true period 46 double-barreled glider gun.
x = 50, y = 15, rule = b3/s23
11bo38b$10b2o38b$9b2o39b$10b2o2b2o34b$38bo11b$38b2o8b2o$39b2o7b2o$10b
2o2b2o18b2o2b2o10b$2o7b2o39b$2o8b2o38b$11bo38b$34b2o2b2o10b$39b2o9b$
38b2o10b$38bo!`,

`#N AK-94
#O Mike Playle
#C The smallest known true p94 gun, found in May 2013.
#C www.conwaylife.com/wiki/AK-94
x = 38, y = 25, rule = B3/S23
7bo7bo7b2o$7b3o5b3o5b2o$10bo7bo$9b2o6b2o16b2o$30b2o2bo2bo$30bobo2b2o$
33b2o$5bo28bo$5b3o26bob2o$8bo22b2obo2bo$7b2o22b2ob2o3$17bo$2b2ob2o9bob
o10b2o$o2bob2o8bo3bo9bo$2obo11bo3bo10b3o$3bo11bo3bo12bo$3b2o11bobo$b2o
2bobo9bo$o2bo2b2o$b2o16b2o$19bo$13b2o5b3o$13b2o7bo!`,

`#N Blinker puffer 1
#O Robert Wainwright
#C An orthogonal period 8 c/2 blinker puffer. The first blinker puffer to be found.
x = 9, y = 18, rule = B3/S23
3bo5b$bo3bo3b$o8b$o4bo3b$5o4b4$b2o6b$2ob3o3b$b4o4b$2b2o5b2$5b2o2b$3bo
4bo$2bo6b$2bo5bo$2b6o!`,

`#N Slow puffer 2
#O David Bell
#C An orthogonal period 240 c/2 puffer that moves fast but creates relatively little debris.
x = 22, y = 21, rule = 23/3
3bo9b2o7b$bo3bo6b2ob3o4b$o12b5o4b$o4bo8b3o5b$5o17b3$20bob$b2o10b2obo2b
obo$2ob3o6bobob4obo$b4o3b3obo9b$2b2o8bobob4obo$13b2obo2bobo$5b2o13bob$
3bo4bo13b$2bo19b$2bo5bo13b$2b6o6b3o5b$13b5o4b$12b2ob3o4b$13b2o!`,

`#N Cross
#O Robert Wainwright
#C A period 3 oscillator found in October 1989.
x = 8, y = 8, rule = B3/S23
2b4o2b$2bo2bo2b$3o2b3o$o6bo$o6bo$3o2b3o$2bo2bo2b$2b4o!`,

`#N Pentadecathlon
#O John Conway
#C 10 cells placed in a row evolve into this object, which is the most natural oscillator of period greater than 3. In fact, it is the fifth or sixth most common oscillator overall, being about as frequent as the clock, but much less frequent than the blinker, toad, beacon or pulsar.
x = 10, y = 3, rule = B3/S23
2bo4bo2b$2ob4ob2o$2bo4bo!`,

`#N Double caterer
#O Dean Hickerson
#C A period 3 oscillator found in October 1989.
x = 19, y = 12, rule = B3/S23
5b2o3bo8b$4bo2bo2b3o6b$4b2obo5bo5b$6bob4obo5b$2b3obobo3bob2o3b$bo2bo2b
o3bo2bobo2b$obo2bo3bob2o4bob$bo10b2ob3ob$2b2ob2ob2o3bo5b$3bo3bo5bob3ob
$3bo3bo6b2o2bo$17b2o!`

];
