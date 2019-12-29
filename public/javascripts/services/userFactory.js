
app.factory('userFactory',['$http','env',($http,env)=>{
    const getUser=()=>{

        return $http({
            url : env.SERVICES_URL+'/users/getUser',            
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
