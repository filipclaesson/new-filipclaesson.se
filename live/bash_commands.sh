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
sequelize model:create --name Metric --attributes name:string,description:string,settings:integer,user:bigint
sequelize model:create --name User --attributes user_name:string,email:string
#sequelize model:create --name MetricSettings --attributes Metric:string,description:string,attributes:integer




