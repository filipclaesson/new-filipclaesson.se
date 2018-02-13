const Apartment = require('../models').Apartment;
const Sequelize = require('sequelize');
module.exports = {
  list(req, res) {
    return Apartment
    .findAll({where:{id:1}})
    .then(metric => res.status(200).send(metric))
    .catch(error => res.status(400).send(error));
  }
  ,groupby(req, res){
    query = {}
    location_array = [] 
    if(req.body.locations){
        location_array = req.body.locations.split(",")
        console.log(req.body.locations)
        query.where = {location_from_geo: {
            [Sequelize.Op.in]: location_array}
        };
    }
    sqm_array = [0,10000]
    if(req.body.high_sqm){
        sqm_array[1] = req.body.high_sqm
        query.where["living_area"] = {[Sequelize.Op.between]:sqm_array}
    }
    if(req.body.low_sqm){
        sqm_array[0] = req.body.low_sqm
        query.where["living_area"] = {[Sequelize.Op.between]:sqm_array}
    }
    date_array = ['2000-01-01','2060-01-01']
    if(req.body.high_date){
        date_array[1] = req.body.high_date
        query.where["sold_date"] = {[Sequelize.Op.between]:date_array}
    }
    if(req.body.low_date){
        date_array[0] = req.body.low_date
        query.where["sold_date"] = {[Sequelize.Op.between]:date_array}
    }

    if(req.body.group){
        query.group = [req.body.group];
    query["attributes"] = [
        req.body.group
        , [Sequelize.fn(req.body.aggrigation_type, Sequelize.col(req.body.aggrigation)), 'aggrigation']
        , [Sequelize.fn('COUNT', Sequelize.col(req.body.aggrigation)), 'count']
        // , [sequelize.fn('COUNT', sequelize.col(req.body.aggrigation)), 'no_apt']
        ] 
    }
    query.order = [req.body.group];
    console.log(query)
    // console.log(req.body)

    return Apartment
    .findAll( query
        )
    .then(metric => res.status(200).send(metric))
    .catch(error => res.status(400).send(error));
    }
};

// example of how the query looks like
// { where: { location_from_geo: 'Södermalm' },
// group: [Sequelize.fn('date_trunc', 'month', Sequelize.col('sold_date'))],
// attributes: [ [Sequelize.fn('date_trunc', 'month', Sequelize.col('sold_date')), 'month'], [Sequelize.fn('COUNT', Sequelize.col('object_type')), 'Count']] 
// }

//exapmle of grouping and function (date trunc)
// if(req.body.group){
//     query.group = [Sequelize.fn('date_trunc', 'month', Sequelize.col(req.body.group))];
// }
// query["attributes"] = [ [Sequelize.fn('date_trunc', 'month', Sequelize.col(req.body.group)), 'month'], [Sequelize.fn(req.body.aggrigation, Sequelize.col('sold_price')), 'Sum']] 