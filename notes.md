saving time: 5 years in a row

stars = coins = gold coin = currency

YOU --> need to find 50 coins
Why --> to pay room deposit
due by --> december 25th
1 puzzle= 1 star
--------------
Day 01
Elves -> require you to fix Expense report 

expense report = (your puzzle input)
math ain't adding up
Find 2 entries == 2020
x = ?
y = ?
expense report = x + y = 2020
product = x * y = ?

TIL: 
- in vim `J` joins 2 or more lines
- TIR: `%s/somethingOld/somethingNew/gc`  changes with confirmation

holy shit. I can't believe I submitted it right at midnight
I can't believe my thing worked ahhh!
It's the worst thing ever but omg.

--------------
Day 02
Th OTCP making it difficult for the little man by changing psw allowed.
db now corrupted
must debug

perline = policy + password
policy = validity of letter use = lowest + highest letter use eg 1-3 a = a, aa, aaa

data sample:
7-8 d: sgmddfddjrtv

min = 7
max = 8
val = d
psw = sgmddfddjrtv

Main question: how do i set up the data??
... i've spent a lot of time trying to figure out how to format data

I am a fool who reset an accumulator at every iteration -_-

Part 2
policy = 1 means 1st char, 2 means 2nd char, etc.
no 0 index

Exactly ONE of these positions must contain the given letter. 
Other occurrences dont matter

444 too high
133 too low

---------------

dia tres

open squares (.)
trees (#)

pattern repeats many times to the right

(you opted for a cheaper model that prefers rational numbers)

start on (.) in top left corner
need to reach bottom-most row on map

toboggan (an ecological but inconvenient vehicle) that is, as you are, inclined
towards the rational

count all # (trees) of move -->3 and ↓1

start by counting all the trees you would encounter for the slope right 3, down 1:

O == open .
X == there was a tree #

How many trees will you encounter??

90 is wrong
another number is wrong but i forgot to note it.. dang it.
I now see what I am doing is wrong. dang it.
99 is also wrong
78 is also wrong...
100 is also wrong.. but i expected that.. because I DIDNT READ WHAT MY CHANGE
EVEN DID. 

83 is also wrong, but I could tell from the output.. Idk why i submitted
anyway.. hope in happenstance perhaps.

125? WRONG. output is looking much better tho.
omg. I forgot I changed the data to check something.. nooo!
Yes! This works.

Part deux.
Right 1, down 1.
Right 3, down 1.
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.

So. Is this how technical debt is acquired??

----------------------
Day 4

North Pole credentials instead of Passport

byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
cid (Country ID)

missing only cid: it's fine

how many valid passports?

So, a lot of this is formating data i see. cool.

It occurs to me that I should write down how i've gradually reformating the
data.. It looked something like this (wrong order, on probably some are the
wrong ones, but you get the gist)
%s/\n/}{/g
%s/{/{\r/g
%s/\n\n/},\r\r{/
%s/\r\r\r/\r/g 
%s/},/\r},/
%s/\s/\r/
%s/\n\n\n/\r/g

aaaanndd a whole lotta manual fixes.
I need to revist this. A better way to format data definitely exists..

Part 2

byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.

TIL: I need to get better at parsing data

-----------------

Day 5

FBFBBFFRLR, where F means "front", B means "back", L means "left", and R means "right".
F || B for first 7 char
128 rows (0-127)


oh! a binary tree. ok i see.

this. went well, i must say

Part 2

omg. okay so that's what map does?!! amazing. How have I not understood this
before?!

ok, this second half is taking it out of me. Why is it so hard for me to figure
out how to compare two arrays and get a new one with the difference??

.. i... i can't.
omg. i am an idiot.

ok so here's the thing about ids: they should be unique. Which of course, I
thought it was weird they weren't. But then the answer in part 1 worked..

---------

Day 09

Alright, got (busy/stressd) with work. Now on with it.

1000 numbers in input.

0-24 (first 25 numbers): preamble

after preamble:
25-999: each number SUM of any two of 25 immediately previous numbers

The 2 numbers are:
- different
- might be more than one pair
-

-----

Day 10

aww man. I thought I'd get it on first submit.
Oh well. It's not 2048 =(
It's too low.

Second try worked =))
