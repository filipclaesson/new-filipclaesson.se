CREATE materialized view "Apartments" as (
select
row_number() over () as id
, published::date as published
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
, now() as "updatedAt"
, now() as "createdAt"
from sold
where published > '2017-01-01'
)

-- UPDATE public.sold with db link

-- CREATE EXTENSION dblink;
truncate public.sold;

insert into sold (
SELECT * FROM dblink(
    'dbname=postgres port=5432 host=192.168.0.5 user=filip password=imitthuvud'
    , 'select * from booli.sold where sold_date > ''2017-01-01'''
)
as table_def(
    booli_id bigint,
    published timestamp without time zone,
    sold_date timestamp without time zone,
    object_type text COLLATE pg_catalog."default",
    living_area numeric,
    rooms numeric,
    floor numeric,
    rent numeric,
    list_price numeric,
    sold_price numeric,
    sold_price_source text COLLATE pg_catalog."default",
    construction_year bigint,
    address_street_address text COLLATE pg_catalog."default",
    region_municipality_name text COLLATE pg_catalog."default",
    region_county_name text COLLATE pg_catalog."default",
    url text COLLATE pg_catalog."default",
    apartment_number text COLLATE pg_catalog."default",
    distance_ocean numeric,
    source_name text COLLATE pg_catalog."default",
    source_url text COLLATE pg_catalog."default",
    source_type text COLLATE pg_catalog."default",
    source_id bigint,
    position_longitude numeric,
    position_latitude numeric,
    additional_area numeric,
    location_named_areas text COLLATE pg_catalog."default",
    plot_area text COLLATE pg_catalog."default"
)
);

refresh materialized view "Apartments";

