class Graph:

  def __init__(self, numOfNodes=0):
    self.numOfNodes = numOfNodes
    self.adjacencyList = {}

  def set_numOfNodes(self):
    self.numOfNodes = self.numOfNodes + 1

  def set_adjacencyList(self, node):
    self.set_numOfNodes()
    self.adjacencyList.update({node: []})

  def addVertex(self, node):
    self.set_adjacencyList(node)

  def addEdge(self, node1, node2):
    self.adjacencyList[node1].append(node2)
    #self.adjacencyList.update({node1: [node2]})


graph = Graph()

graph.addVertex(0)

graph.addVertex(1)

graph.addVertex(2)

graph.addVertex(3)

graph.addVertex(4)

graph.addVertex(5)

graph.addVertex(6)

print(graph.adjacencyList)

graph.addEdge(3, 1)

graph.addEdge(3, 4)

graph.addEdge(4, 2)

graph.addEdge(4, 5)

graph.addEdge(1, 2)

graph.addEdge(1, 0)

graph.addEdge(0, 2)

graph.addEdge(6, 5)

print(graph.adjacencyList)

