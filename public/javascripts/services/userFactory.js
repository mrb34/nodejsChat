app.factory('userFactory',['$http','env',($http,env)=>{
    const getUser=()=>{
        return $http({
            //url:env.SERVİCES_URL+'/getUser',
            url: 'http://localhost:3000/getUser',
            method:'GET'

        }).then(response=>{
            return response.data;
        },(err)=>{
            console.error(err);
        })
    }
    return {
        getUser
    }
}]);
