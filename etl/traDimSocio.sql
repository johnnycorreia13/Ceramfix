CREATE TABLE projjetta.dim_socio
(
  num_raiz_cnpj BIGINT
, tip_pessoa TEXT
, nom_socio VARCHAR(160)
, cod_qualificacao_socio BIGINT
, des_qualificacao_socio VARCHAR(2000)
, cod_pais BIGINT
, des_pais VARCHAR(2000)
, nom_representante VARCHAR(60)
, cod_qualificacao_representante BIGINT
, des_qualificacao_representante VARCHAR(2000)
)
;