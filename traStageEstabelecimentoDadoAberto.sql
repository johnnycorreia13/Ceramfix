CREATE TABLE projjetta.stg_dado_aberto_estabelecimento
(
  COD_CNPJ DOUBLE PRECISION
, DES_CLIENTE TEXT
, DES_CLIENTE_FANTASIA TEXT
, COD_CNAE DOUBLE PRECISION
, COD_TIPO_CLIENTE TEXT
, COD_TIPO_MERCADO TEXT
, COD_CNPJ_RAIZ BIGINT
, NUM_CEP VARCHAR(15)
, SIT_CLIENTE TEXT
, COD_PAIS DOUBLE PRECISION
, NOM_BAIRRO VARCHAR(50)
, DES_ENDERECO VARCHAR(70)
, DES_EMAIL VARCHAR(200)
, NUM_TELEFONE TEXT
, NUM_TELEFONE_2 TEXT
, DES_ENDERECO_COMPLEMENTO VARCHAR(160)
, COD_UF VARCHAR(2)
, COD_CIDADE VARCHAR(15)
, LST_CNAE TEXT
)
;