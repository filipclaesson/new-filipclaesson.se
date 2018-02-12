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


# setup sequelize
#https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
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
sequelize db:migrate:undo
sequelize db:migrate:undo:all # removes all tables
#create new model from cli command
sequelize db:migrate


## generate seeds (initial data setup)
