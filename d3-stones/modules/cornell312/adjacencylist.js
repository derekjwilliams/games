/* SML VERSION
  from here https://www.cs.cornell.edu/courses/cs312/2004fa/lectures/lecture14.htm
  To install SML see instructions here https://www.smlnj.org/dist/working/110.99.1/index.html

  val g = [(1, [2, 4]), (2, [3]), (3, []), 
         (4, [3, 6]), (5, [4, 8]), (6, [5, 8]), 
         (7, []), (8, []), (9, [8])]


  Also of potential interest

  https://www.cs.cornell.edu/courses/cs3110/2014sp/lectures/11/red-black-trees.html
  
*/

// lets create a simple adjacency list of a graph of 9 vertices 1 to 9, see https://www.cs.cornell.edu/courses/cs312/2004fa/lectures/graph.png

/*
               (1)         (7)
               / \
              *   *
            (2)  (4)
             |   /*\
             |  / | \
             | /  |  \
              *   |   *
            (3)   |   (6)
                  |  / |
                  | *  |
                 (5)   |   (9)
                   \   |   /
                    \  |  /
                     \ | /
                       *
                      (8)

The * represent arrows 
Simple directed graph. 

In a matrix it would look like this (1 if there is an edge from j to i):

   1  2  3  4  5  6  7  8  9
1  0  1  0  1  0  0  0  0  0
2  0  0  1  0  0  0  0  0  0
3  0  0  0  0  0  0  0  0  0
4  0  0  1  0  0  1  0  0  0
5  0  0  0  1  0  0  0  1  0
6  0  0  0  0  1  0  0  1  0
7  0  0  0  0  0  0  0  0  0
8  0  0  0  0  0  0  0  0  0
9  0  0  0  0  0  0  0  1  0

See: https://thatdarndata.com/how-to-represent-a-directed-graph-as-an-adjacency-matrix/      

and https://www.youtube.com/watch?v=09_LlHjoEiY
*/

const adjacencyList = [
    {1: [2, 4]},
    {2: [3]},
    {3: []},
    {4: [3, 6]},
    {5: [4, 8]},
    {6: [5, 8]},
    {7: []},
    {8: []},
    {9: [8]}
];



