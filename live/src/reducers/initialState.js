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
				,Settings:[
					{id: 1, key: "locations", value: "Gärdet,Östermalm,Vasastan,Kungsholmen,Södermalm", createdAt: "2018-04-13T15:32:10.927Z", updatedAt: "2018-04-13T15:32:10.927Z"}
					,{id: 2, key: "group", value: "sold_week", createdAt: "2018-04-13T15:32:10.927Z", updatedAt: "2018-04-13T15:32:10.927Z"}
					,{id: 3, key: "aggrigation_type", value: "AVG", createdAt: "2018-04-13T15:32:10.927Z", updatedAt: "2018-04-13T15:32:10.927Z"}
					,{id: 4, key: "aggrigation", value: "sqm_sold_price", createdAt: "2018-04-13T15:32:10.927Z", updatedAt: "2018-04-13T15:32:10.927Z"}
					,{id: 5, key: "sqm_low", value: "0", createdAt: "2018-04-13T15:32:10.927Z", updatedAt: "2018-04-13T15:32:10.927Z"}
					,{id: 6, key: "sqm_high", value: "100", createdAt: "2018-04-13T15:32:10.927Z", updatedAt: "2018-04-13T15:32:10.927Z"}
					,{id: 7, key: "range", value: "3 months", createdAt: "2018-04-13T15:32:10.927Z", updatedAt: "2018-04-13T15:32:10.927Z"}
				],
				current_metric_data:[]
			}]
		}]
		
	},
	itemData:{
		dashboardItemsData:[]
	},
	createItemData:{
		createItemData:[]
		, graphSettings:{
          locations: "Gärdet,Östermalm,Vasastan,Kungsholmen,Södermalm"
          , group: "sold_month"
          , aggrigation_type: "AVG"
          , aggrigation: "sqm_sold_price"
          , sqm_low: "0"}
	}
	// metrics:{
	// 	metrics:[],
	// 	current_metric:{},
	// 	current_metric_data:{}
	// }
}

export default initialState;
