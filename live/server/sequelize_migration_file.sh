## --- USERS ---
sequelize model:generate --name User --attributes user_name:string,name:string,email:string
## --- DASHBOARDS ---
sequelize model:generate --name Dashboard --attributes name:string,description:string
## --- DASHBOARD_ITEMS ---
sequelize model:generate --name DashboardItem --attributes name:string,description:string,item_type:string
## --- SETTINGS ---
sequelize model:generate --name Setting --attributes key:string,value:string
## --- APARTMENT ---
sequelize model:create --name Apartment --attributes published:date,published_week:date,published_month:date,sold_date:date,sold_week:date,sold_month:date,object_type:string,living_area:double,list_price:double,sqm_list_price:double,sold_price:double,sqm_sold_price:double,location_from_geo:string


## test seeds
sequelize seed:generate --name apartments
sequelize seed:generate --name user
sequelize seed:generate --name dashboard
sequelize seed:generate --name dashboarditem
sequelize seed:generate --name setting
