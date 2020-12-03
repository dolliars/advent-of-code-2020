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

function traverse(testMap){
  let index = 0;
  let add = 3;
  let limit = 30; // 0-30 which is 31 chars
  let position = 0;
  let treeCount = 0;

  testMap.forEach(line => {
    //console.log('char: ', line[index], ' index: ',index);
    //if value at line[index] is # , count
    if (line[index] == '#'){
      treeCount++;
    }
    index +=  add; // 0 3 6 9 12 15 18 21 24 27 30 0 3
  
    if(index > limit){
      index = index-31;
    }
  });
  console.log('the tree count: ', treeCount);
}

traverse(map);
