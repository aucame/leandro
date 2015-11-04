angular.module('app', ['ui.grid', 'ui.grid.cellNav', 'ui.grid.resizeColumns', 'ui.grid.edit', 'ui.grid.selection']);

angular.module('app').controller('AppCtrl', function ($scope, $http) {

  $scope.gridOptions = {
    enableSorting: false,
      showGridFooter: true,
    enableRowSelection: true,
      enableSelectAll: false,
      enableColumnResizing: true,
      //enableCellEditOnFocus: true,

      columnDefs: [
          { field: 'nome', enableCellEdit: false, minWidth: 50, width: 90, displayName: 'Nome' },
          { field: 'email', enableCellEdit: false, minWidth: 120, width: 250, displayName: 'Email' },
          { field: 'telefone', enableCellEdit: false, minWidth: 120, width: 250, displayName: 'Telefone' },
          { field: 'empresa', enableCellEdit: false, minWidth: 100, width: 150, displayName: 'Empresa' },
          { field: 'site', enableCellEdit: false, minWidth: 50, width: 100, displayName: 'Site' },
          { name: 'Editar/Deletar', enableCellEdit: false, width: 200,
            cellTemplate:'<button class="btn btn-primary" ng-click="grid.appScope.editcliente(row)">Editar</button>  <button class="btn btn-primary" ng-click="grid.appScope.delcliente(row)">Deletar</button>'  }
      ],

      data: [
        { 'nome': "", "email": "", "telefone": "", "empresa": "", "site": "" }
      ]

    };

$scope.gridOptions.onRegisterApi = function(gridApi){
      $scope.gridApi = gridApi;
  };

  $scope.getcliente = function() {
//			$http.get("insert.php?action=get_cliente")
    $http.get("http://127.0.0.1:8080/rotinas.php?action=get_cliente")
    .then(function(response){
      $scope.gridOptions.data = response.data;
    }, function(error){
      console.log("Error = " + error);
    });
  };

		//$scope.getcliente();


});
