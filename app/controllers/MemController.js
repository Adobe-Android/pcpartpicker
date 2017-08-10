'use strict';

app.controller("MemController", function($scope, $window, MemFactory, CompFactory, MoboFactory, $routeParams) {
 // Needs optionValue data from SocketController

  let comp_Id;

  // Trying to get mobo data like maxRAM and ramSlots
  let moboSortOptions = $routeParams.optionValue;
  console.log("MemController optionValue", $routeParams.optionValue);

  CPUFactory.getMem(moboSortOptions)
  .then((cpuData) => {
    $scope.cpuData = cpuData;
    console.log("cpuData from getCPUs", cpuData);
  })
  .catch((err) => {
    console.log("error from getCPUs", err);
  });

  $scope.addCPUToComp = (cpuData) => {
    CompFactory.setCompCPU(cpuData);
    console.log("cpuData from cpuPartial", cpuData);
      $window.location.href = '#!/comp/comp_Id';
  };
});










// // for viewing all todo items, deleting an item, updating completed status
//   function fetchMobo() {  
//     let todoArr = [];
//     console.log("Fetch called");
//     SocketFactory.getTodoList(currentUser)
//     .then( (todoList) => {
//       console.log("todo Data", todoList);
//       let todoData = todoList.data;
//       Object.keys(todoData).forEach( (key) => {
//         todoData[key].id = key;
//         todoArr.push(todoData[key]);
//       });
//       $scope.todos = todoArr;
//     })
//     .catch( (err) => {
//       console.log("error!", err);
//     });
//   }

//   $scope.deleteMobo = (taskId) => {
//     console.log("delete called", taskId);
//     SocketFactory.deleteTodoItem(taskId)
//     .then( (data) => { 
//       console.log("removed item", data);
//       fetchSocket(currentUser);
//     });
//   };

//   $scope.updateTaskStatus = (todoItem) => {
//     console.log("status update");
//     SocketFactory.updateTodoStatus(todoItem)
//     .then( (data) => {
//       console.log("Updated completed status");
//     });
//   };

// });