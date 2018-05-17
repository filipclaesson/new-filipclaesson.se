npm init -y
#npm i webpack -g
npm i --save-dev webpack
npm i --save express
npm i --save babel-core babel-loader babel-preset-es2015 babel-preset-stage-1 babel-preset-react




# router
npm i --save react-router@3.0.2


# install express generator
# (backup package json file)
npm install express-generator -g 
express # this will generate folder structure and files

npm install # this installs the new dependencies
#copy paste the old dependencies
npm install
npm start

# nodemon
npm i nodemon -g
npm i --save-dev nodemon
nodemon

# ----------------------------
# Setup sequelize
# ----------------------------
#https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
npm install -g sequelize-cli
npm install --save sequelize pg pg-hstore
sequelize init
# postgres
createdb metrics-dev

# create models
sequelize model:generate --name Metric --attributes name:string,description:string,user:bigint,locations:string,group:string,aggrigation_type:string,aggrigation:string,low_sqm:double,high_sqm:double,low_date:date,high_date:date
sequelize model:create --name User --attributes user_name:string,email:string
# sequelize model:create --name Settings --locations:array,group:date,aggrigation_type:string,aggrigation:string,low_sqm:double,high_sqm:double,low_date:date,high_date:date
#sequelize model:create --name MetricSettings --attributes Metric:string,description:string,attributes:integer
sequelize model:create --name Apartment --attributes published:date,published_week:date,published_month:date,sold_date:date,sold_week:date,sold_month:date,object_type:string,living_area:double,list_price:double,sqm_list_price:double,sold_price:double,sqm_sold_price:double,location_from_geo:string

sequelize db:migrate


## alter existing model sequelize CLI:
# https://gist.github.com/JoeKarlsson/ebb1c714466ae3de88ae565fa9ba4779
sequelize db:migrate:undo:all # removes all tables
 # remove all migration files
 # re-run the generate model commands
sequelize db:migrate


#create new model from cli command
sequelize db:migrate


## generate seeds (initial data setup)
sequelize seed:generate --name settings-demo
# update the file generated and fix the down function as well
# insert the data in the table:
sequelize db:seed:all
# if undo: 
sequelize db:seed:undo:all	




## install charts
install --save react-chartjs
install --save chart.js@^1.1.1 react react-dom



# ------------- INSTALL LEAFLET MAP ------------- #
# https://blog.sightlinemaps.com/setting-up-mapbox-and-leaflet-with-react-and-webpack-f4253cc696c8
npm install --save react-leaflet leaflet
# added link in index - <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />

