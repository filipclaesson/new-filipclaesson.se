const initialState = {
	user:{
		name:"filip",
		id:1
	},
	dashboard:{
		dashboards:[{
			name: 'init dashboad name',
			description: 'my init dashboard description',
			DashboardItems:[{
				createdAt:"2018-04-13T15:32:10.910Z"
				,dashboard:1
				,description:"Metric which holds 3 months of innerstan apartment data"
				,id:1
				,item_type:"graph"
				,name:"Innerstan Prices"
				,updatedAt:"2018-04-13T15:32:10.910Z"
			}]
		}]
		
	},
	// metrics:{
	// 	metrics:[],
	// 	current_metric:{},
	// 	current_metric_data:{}
	// }
}

export default initialState;