CREATE TABLE projjetta.dim_estabelecimento
(
  num_cnpj DOUBLE PRECISION
, num_raiz_cnpj BIGINT
, nom_estabelecimento TEXT
, nom_fantasia TEXT
, nom_empresa VARCHAR(150)
, cod_natureza_juridica BIGINT
, des_natureza_juridica VARCHAR(72)
, cod_qualificacao_responsavel BIGINT
, des_qualificacao_responsavel VARCHAR(2000)
, cod_cnae DOUBLE PRECISION
, des_cnae VARCHAR(200)
, des_porte_empresa TEXT
, tip_pessoa TEXT
, tip_mercado TEXT
, val_capital_social NUMERIC(19, 2)
, des_capital_social TEXT
, cod_cidade VARCHAR(15)
, des_cidade VARCHAR(40)
, sig_estado VARCHAR(2)
, num_cep VARCHAR(15)
, cod_pais DOUBLE PRECISION
, des_pais VARCHAR(2000)
, nom_bairro VARCHAR(50)
, des_endereco VARCHAR(70)
, num_telefone TEXT
, num_telefone_2 TEXT
, des_endereco_complemento VARCHAR(160)
, des_email VARCHAR(200)
, ind_simples_nacional TEXT
, ind_micro_empreendedor TEXT
, num_cnpj_completo TEXT
)
;