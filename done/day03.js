const map = ['.##.............##......#.....#',
'.#.#................#..........',
'...#..#.##..#.#......#.#.#.#..#',
'..#......#........#..#..#.#.#..',
'.......#....#..#..#.......#....',
'..#..#..##.#...#........#.###..',
'..#...#..#.....#.##....#.......',
'....#..###.#......#.##..#...##.',
'..#..........#.##.#...#........',
'#...#............##....#..##...',
'.......##....#.....##..#.#..#.#',
'..#..#..#...#....#....#....#...',
'.#...#.##........#####........#',
'..#..#......#.....##...#.......',
'....#......##....#.#....#.#..##',
'#.#.##....##..#.........#.###..',
'##..###..#..#.......###.......#',
'...#.#......#.........#....#...',
'.....#..........#.....##..#.#..',
'....##......#.#..#....#.#......',
'..#.....#..##.......##......#..',
'.........##.##.#..##...........',
'....#...#.....#....#.#.###....#',
'.##.#..#...##..#.......#......#',
'##..#..#..####..#.#..#...#.....',
'..###..#..#..#.###..#....#.##..',
'......#...###.#.#.....#........',
'.....#...#.#...#.......#.....#.',
'#........#..##...........#..#..',
'.#.##.##...#.....#.#....#..#...',
'..##.##....#.....#....#....##..',
'#.........##...##..#.....#..#..',
'........#.####....#...##.....#.',
'.#.#...#..#..#.#......##.....#.',
'..#..........##..#.#.#....#...#',
'#.......#...#...#.....#.##.#...',
'..#.....#..#.....####.#..#.#.##',
'...#.#..#...#.....#...#.#.#.#.#',
'.#..##....##.....#..#....###...',
'....#......##.#.#.....#......#.',
'..#.#...#......#.....##.......#',
'..#...###...#..#.#...#..#.....#',
'#..............#.....#....##..#',
'.#...#.......#.............#...',
'..###....#.##........#.#.......',
'#.##.......#..#............###.',
'#...#..##.#.#............######',
'..##..#....#.#.###...#..##.##..',
'.#...#.###.#....#...#....#...#.',
'#...#.......#...........#...##.',
'##.#......#####.............#..',
'....#..#......##..#..........#.',
'#.....#.....#.#.......#...#...#',
'....#...#.#..##........#.#..##.',
'..##.....##............#.#.###.',
'#.........#........#..###......',
'............#..................',
'.#.###...####...#.#..#......#..',
'...##.###.#....##.#..####..#.##',
'..#####.#.##...#.#...##.##....#',
'........##...#...#....##.....##',
'#...........###...#.#...##.#...',
'##......#...#.......###........',
'..#..#.##.#..###....#..#.###.#.',
'...#.#.#...#....#.##..#...#....',
'........#.##...##.#.....##...##',
'.#..........##..#..#..#.#...#..',
'#.#...#.##.#....#.##..#........',
'.#.#.#....##..##.####.....###..',
'..#....##....#..#..#..##.......',
'..##...#.......#...##.#....#...',
'...####.#.#...........#.#...#..',
'....####.....#.#.....#....##.##',
'..#.....#.#.............##....#',
'#.#....#####.##..####.#...#.#..',
'#.#....#.##.#.#.##..#.#...#....',
'......#.......#.......#.....#..',
'..#.....#....###.###..#..#..#..',
'#..#....##.###...##.....#......',
'..#..#...#..#.##..........#....',
'...#.#.#......#....#.##..#..##.',
'....##.#....#..#...##....###...',
'##.#.###.....#..#.#.#..#.....##',
'##..#.#........#...#..#.#......',
'....#.#.......##.#...........#.',
'.......##...#...#...#.....#....',
'.....#....#..#..###.#...#......',
'............#.#..#......#.#....',
'...##..#.##....##..##.#......#.',
'#.#.#......#.#.....#.#.#..#.#.#',
'...###..........#..#..#.##.....',
'......#......#......###..##....',
'#...##...#....#....#..#...#.#..',
'.......#..#......##.......#....',
'...#..#..#.....#.....#......##.',
'..#....###..........##..#...#..',
'..........#..#.#...#......#..#.',
'#...#....#.##.........#.#.#...#',
'.#.#.#...#.#...#.#..#..#....#.#',
'#.##....#..#.........#.##.##..#',
'..#.#..##.#....#.###.#...#....#',
'.#.......#...#.#.........#....#',
'.......#...#..........#.#..#...',
'...#.....##..#....#...###...#.#',
'#....##.##..........#.......#..',
'.##..##......#...#....#.##....#',
'....#.....##...##.#..#.........',
'...#.#..##.#.#..#.......#....#.',
'.#...#.#.#.#..#..#.##.......#..',
'..#..##...#.#..#.......#.#####.',
'.......#.#...........#....#.#..',
'.#.###..........#...#..#...#...',
'..#.#............##......##....',
'...##..#...###...##....#.#.##..',
'....#.##...#..#.#.#...........#',
'....#..#....##.....#.##.#.....#',
'..##......##.#.........#....#.#',
'###...#...#..#.#...#...........',
'.####.....#.....#.#....#..#....',
'.#....#..#..#..#...##.....###.#',
'#....##.#....#.##..#......##..#',
'.........#..#.#.....#.#....##.#',
'.....#.#...#....#.#...#....#..#',
'.#...#.#.....#.#......#.#......',
'#....##.......#.............#..',
'#..#...#........##..#..#......#',
'####..##.#..##..#.........####.',
'.#.##..#.#..#.#.#.##...#..#.#.#',
'.##.#..#............#......#...',
'###....#.##....#..#...#........',
'.....#..###..........#..#......',
'.##..##.....#..##....#...#.....',
'#...##...........#..#...###..#.',
'#..##....#...#.##.##....#......',
'...#...#..#.#.......##.......##',
'....#.....#..#...#.........#.#.',
'.#...##.#......#.#..#..#...##..',
'...##...##.##...##...#..#......',
'#..##.#..#..#............#...#.',
'..#.....#.........#........#.#.',
'#.#...#...#......#.#......#....',
'.##.....##.#.#....#.##...##.#..',
'.##..##.#.#....#.##............',
'.#.##.....##.#...#...###....#..',
'.#..............#.#....###.###.',
'....#..#...#.#.#..........#.#.#',
'.#.#..#.#.#...###..#...##......',
'.#.#.....###......#..........#.',
'........#.##...............#.#.',
'...#.#.#......#..#..##........#',
'..#.##......#.......#..#......#',
'...#...#...#...#..#..#........#',
'..#....#.....#....#..##........',
'.....#..#...##....#......##....',
'...##..##..#..........##....#.#',
'..#....#..#...#.##..#.....##...',
'###...#.#....#........#.......#',
'......#...#..#....###.........#',
'..###.#...#...#...#.#..###.#...',
'.##.#.......#.#..#..#......#.#.',
'...##...........#.#..#.#..#....',
'.......#.....####.#.....#...#.#',
'......##......##.#.#.#...#.#..#',
'..###.#####..#....#.#...#..##..',
'.....#..#......#........#......',
'#..##....#.#.##....#....#......',
'.#....#.##.####.##..#..#......#',
'#...##...#.#...##.#.##.##...#..',
'........#.#........#.#...#..#..',
'.#....###..#......#.##.###..#..',
'.#..#..#..#..#...#.#.........##',
'....#...#..#..............#....',
'........#...##.....#.......#...',
'..#......#.#..#.#..#.#.#...###.',
'....#...####....###....#......#',
'#...#.#...................#.##.',
'..#.#.###...#....##....##......',
'#..##..#.........#....#....####',
'.#....###...#.#...#......#...#.',
'......#..#.#..#.##...#.#.#..#..',
'.#...#.#.....#..##......#..#...',
'##.#..##.....##.#.#.......##...',
'.##.##.##..#...#.#.##.##.......',
'.#.#......#.....#...#.#..#.....',
'...#...........#..#.##..##..#..',
'.....#...##......#........#.#..',
'....#..............##.........#',
'..####.#....##..##......##.#.#.',
'.#.#..#...#..........#...###..#',
'....#.#.##.....###.#..#.##.....',
'.......##.#.#..#...#...##.#....',
'...#.##.....#....#...#...#.....',
'##.#.##..#..#.#.....#.#..#.....',
'..#..##........#....###..#..#..',
'..#.........##.....#......#...#',
'...##..........##......#.#.#...',
'#.....#..#..#......#......#....',
'.##...#..##....#.......##..#.#.',
'.#...##...##......####.##.#....',
'.....#.........#.#.####......#.',
'...#.....#.#.........##..#.....',
'##.#.###.#..#.#..#............#',
'...##..#.#....#....#..#........',
'..#.###......#...#.#.....#...#.',
'....##.##..#.....#...#.#.#....#',
'.......#.#..#...........#.#....',
'.#.#..##.#.......#.#..#.....###',
'...#.#.....#.#..#.##..#...#.#..',
'...#......##....#..............',
'......#...#....................',
'..#........#...##.##.#..#.#.#..',
'.#.###.#.##..##..#....##....#..',
'.....#..#.#...#.#..#..#.......#',
'..........#.##.#..##..####.....',
'............#.#......#.........',
'.#....#..#......#.....##.......',
'.....#........#.....##.#..#.#..',
'#..#.##...#.#.....#...#.####...',
'......#...#....#.##..##.#...#..',
'.#.#.##......##....#.#....#.##.',
'#.#.#....#.###....##....##.....',
'.##..#...#.##......#..#..#...##',
'...#....###....#...........#.#.',
'#.#.##.##...##....#....##.#...#',
'.#.#######.......#......#......',
'#......#...#.#.#.###....#.##..#',
'......##..#..##.........##.#.##',
'....##...#.#....##.....#.....#.',
'..#.#........##........#.#..##.',
'.....#..#.##.....#.....#..#.#..',
'.#..............#.......#......',
'.............#..#..........#...',
'.#..#.##....##.#..#...##.......',
'...........#..#.......#.#....#.',
'.#..#..........##...#.#.#...#..',
'......#....#..###....#......#..',
'.#...#...##..#..#..##..#..#.#..',
'#.#.........#....#..........##.',
'...##..#..##...#....##...##.##.',
'..#....#.####.........#.....##.',
'.....#.#...#.#...#.##.#...##..#',
'#...#.....#..#.......#...#..#..',
'..#.......#..##.#.....#....#...',
'.#.....#..##.#.....#...#.#...#.',
'.....#.##..........##....#...#.',
'...#....#...#........##...#...#',
'....##...#....#..........#.....',
'...#....##..#..####..##.#...#.#',
'#...###.###..#....##.#.........',
'.#.......#......#.........#....',
'..#..##..#.........##..........',
'#......#.#.##...#...#####......',
'......#.....####......#....#...',
'.........#..#..#...#....#.#....',
'....#........#...##....#.......',
'...##.#...#..........#....#....',
'........#.......#.##..#..#...#.',
'....#..##...........#.....#..#.',
'#....#...............#.#....#..',
'.#........#....#.#...#.......#.',
'#.......##..........#.......#..',
'...#....#...##.#..#.......#....',
'#..#.##...#.#...#...#...#....#.',
'###...#...#....#....#....#...#.',
'##......#.#.......#....#..#....',
'......#......#....#.#.#..###..#',
'.#.#.##.....#..#..........#....',
'##...#.#.#..##....#.....#.#....',
'#.##...#...#.#...####..#.......',
'.....##..#.#.#....#..##..#.#...',
'....###.#.........##.....#.....',
'......##...........#........#.#',
'.#.........##..................',
'.........##...#.............#.#',
'......##...#...#.........#..##.',
'#..#.......#..##.......###.....',
'....#.#.....#............##....',
'.....#..#......#....#.....##...',
'##......##...................#.',
'#....#............#.#.###.##...',
'.#.....#........#.....#...#....',
'......##.......######......##..',
'.#....##....#..###....#.......#',
'..............##.#..#.......#.#',
'.#..#..........#..#.##.........',
'......##.#..#......#.#....##.#.',
'#.....#.##...#.....#...#..#...#',
'.#....#..##.....#.....#.#.#....',
'..#......#.##..#.........#.#.#.',
'.#..##...#...#.....#..#..#.#..#',
'#.#.##.##.................#.#.#',
'.#..#.#..##.#.......#.......##.',
'#...#...#..##...#...##...#...#.',
'....#......#..#...#.....##..#..',
'..............##......#...#.#..',
'..##..#.......#..#..###.#.#....',
'.#..#..#...#.......#...#...##.#',
'.#...#.......###..#.##.###.....',
'##.#...#......#.....#..#.......',
'##....##............#.....#..#.',
'.....#...##......##.....#....##',
'#...##..#....#..##....###.#...#',
'.....#..#.#.....#.##..##....#..',
'.#.....#.#........#...#.#......',
'......#....#.#........#.#......',
'.##..#...............###...##.#',
'.......###.#.#......###.....#..',
'.......#..##...#....#.##..#.##.',
'..#.......##.......#.....#....#',
'.#......#....#..##..#.#.#..##..',
'###......#...#..#.............#',
'.#....#..#.#......##...........',
'.#....#.##.....#..#.......#..##',
'....#...#...#..#.....#..##..#.#',
'#.#.#.......##.#..#.#....#.....',
'##.#.......#...#...#.#......##.',
'#....#.#...........#######.....',
'...#.#.##.#......##..###.......',
'..#.#....#..#.................#',
'........#..##..#.....#....#.##.',
'...#.#..#..#..#..............##',
'.##.......###.#......#....#..##',
'..##.##.#......#....#..#...#..#'];

function traverse(map, shiftRight){
  let index = 0;
  let add = shiftRight;
  let limit = 30; // 0-30 which is 31 chars
  let position = 0;
  let treeCount = 0;

  map.forEach(line => {
    //console.log('char: ', line[index], ' index: ',index);
    //if value at line[index] is # , count
    if (line[index] == '#'){
      treeCount++;
    }
    index += add;
  
    if(index > limit) {
      index = index-31;
    }
  });
  return treeCount;
}

function altTraverse(map, shiftRight, shiftDown){
  let index = 0;
  let add = shiftRight;
  let skip = shiftDown;
  let limit = 30; // 0-30 which is 31 chars
  let position = 0;
  let treeCount = 0;

  for (let i = 0; i < map.length; i+=shiftDown) {
    if (map[i].charAt(index) == '#'){
      treeCount++;
    }
    index += add;
  
    if(index > limit){
      index = index-31;
    }
  }
  return treeCount;
}

function product(a, b, c, d, e){
  let total = a * b * c * d * e;
  return total;
}

console.log(product( traverse(map, 1), traverse(map, 3), traverse(map, 5), traverse(map, 7), altTraverse(map, 1, 2)));

//console.log('the tree count R1: ', traverse(map, 1)); //  85
//console.log('the tree count R3: ', traverse(map, 3)); // 176
//console.log('the tree count R5: ', traverse(map, 5)); //  96
//console.log('the tree count R7: ', traverse(map, 7)); //  87
//console.log('the tree count R1D2: ', altTraverse(map, 1, 2 )); //47

