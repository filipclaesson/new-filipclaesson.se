insert into "Apartments"(published, published_week, published_month, sold_date, sold_week, sold_month, object_type, living_area, list_price, sqm_list_price, sold_price, sqm_sold_price, location_from_geo, "createdAt", "updatedAt") (
select
published::date as published
, date_trunc('week', published)::date as published_week
, date_trunc('month', published)::date as published_month
, sold_date
, date_trunc('week', sold_date)::date as sold_week
, date_trunc('month', sold_date)::date as sold_month
, object_type
, living_area
, list_price
, round((list_price/nullif(living_area,0))::numeric,4) sqm_list_price
, sold_price
, round((sold_price/nullif(living_area,0))::numeric,4) sqm_sold_price
, coalesce((select location_name from locations where ST_Contains(location_geom, ST_MakePoint(position_longitude, position_latitude))),'Odefinierad') area_from_geo
, now()
, now()
from sold
where published > '2017-01-01'
)


