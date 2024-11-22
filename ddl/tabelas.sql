CREATE TABLE projjetta.stg_dado_aberto_empresa
(
  NUM_RAIZ_CNPJ BIGINT
, NOM_RAZAO_SOCIAL VARCHAR(2000)
, COD_NATUREZA_JURIDICA BIGINT
, COD_QUALIFICACAO_RESPONSAVEL BIGINT
, VAL_CAPITAL_SOCIAL NUMERIC(20, 4)
, COD_PORTE_EMPRESA BIGINT
, DES_ENTE_FEDERATIVO TEXT
)
;

CREATE INDEX i01_stg_dado_aberto_empresa ON stg_dado_aberto_empresa (NUM_RAIZ_CNPJ)
;

CREATE TABLE projjetta.stg_dado_aberto_cnae
(
  COD_CNAE BIGINT
, DES_CNAE VARCHAR(200)
)
;

CREATE INDEX i01_stg_dado_aberto_cnae ON stg_dado_aberto_cnae (COD_CNAE)
;

CREATE TABLE projjetta.stg_dado_aberto_municipio
(
  COD_CIDADE VARCHAR(15)
, DES_CIDADE VARCHAR(2000)
)
;

CREATE INDEX i01_stg_dado_aberto_municipio ON stg_dado_aberto_municipio (COD_CIDADE)
;

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
, NOM_BAIRRO VARCHAR(2000)
, DES_ENDERECO VARCHAR(2000)
, DES_EMAIL VARCHAR(2000)
, NUM_TELEFONE TEXT
, NUM_TELEFONE_2 TEXT
, DES_ENDERECO_COMPLEMENTO VARCHAR(2000)
, COD_UF VARCHAR(2)
, COD_CIDADE VARCHAR(15)
, LST_CNAE TEXT
)
;

CREATE TABLE projjetta.stg_dado_aberto_motivo
(
  COD_MOTIVO BIGINT
, DES_MOTIVO VARCHAR(2000)
)
;

CREATE TABLE projjetta.stg_dado_aberto_natureza
(
  COD_NATUREZA BIGINT
, DES_NATUREZA VARCHAR(2000)
)
;

CREATE INDEX i01_stg_dado_aberto_natureza ON stg_dado_aberto_natureza (COD_NATUREZA)
;

CREATE TABLE projjetta.stg_dado_aberto_pais
(
  COD_PAIS BIGINT
, DES_PAIS VARCHAR(2000)
)
;

CREATE INDEX i01_stg_dado_aberto_pais ON stg_dado_aberto_pais (COD_PAIS)
;


CREATE TABLE projjetta.stg_dado_aberto_qualificacao
(
  COD_QUALIFICACAO BIGINT
, DES_QUALIFICACAO VARCHAR(2000)
)
;

CREATE INDEX i01_stg_dado_aberto_qualificacao ON stg_dado_aberto_qualificacao (COD_QUALIFICACAO)
;

CREATE TABLE projjetta.stg_dado_aberto_socio
(
  NUM_CNPJ_RAIZ BIGINT
, TIP_SOCIO BIGINT
, NOM_SOCIO VARCHAR(2000)
, NUM_CNPJ_CPF VARCHAR(14)
, COD_QUALIFICACAO BIGINT
, DAT_ENTRADA_SOCIEDADE TIMESTAMP
, COD_PAIS BIGINT
, NUM_CPF_REPRESENTANTE VARCHAR(11)
, NOM_REPRESENTANTE VARCHAR(2000)
, COD_QUALIFICACAO_REPRESENTANTE BIGINT
, COD_FAIXA_ETARIA BIGINT
)
;


CREATE TABLE projjetta.stg_dado_aberto_simples
(
  NUM_RAIZ_CNPJ BIGINT
, IND_SIMPLES VARCHAR(1)
, DAT_OPTANTE TIMESTAMP
, DAT_EXCLUSAO TIMESTAMP
, IND_MEI VARCHAR(1)
, DAT_OPTANTE_MEI TIMESTAMP
, DAT_EXCLUSAO_MEI TIMESTAMP
)
;

CREATE INDEX i01_stg_dado_aberto_simples ON projjetta.stg_dado_aberto_simples (num_raiz_cnpj)
;


CREATE TABLE projjetta.dim_estabelecimento
(
  num_cnpj DOUBLE PRECISION
, num_raiz_cnpj BIGINT
, nom_estabelecimento TEXT
, nom_fantasia TEXT
, nom_empresa VARCHAR(2000)
, cod_natureza_juridica BIGINT
, des_natureza_juridica VARCHAR(2000)
, cod_qualificacao_responsavel BIGINT
, des_qualificacao_responsavel VARCHAR(2000)
, cod_cnae DOUBLE PRECISION
, des_cnae VARCHAR(200)
, des_porte_empresa TEXT
, tip_pessoa TEXT
, tip_mercado TEXT
, val_capital_social NUMERIC(24, 4)
, des_capital_social TEXT
, cod_cidade VARCHAR(15)
, des_cidade VARCHAR(2000)
, sig_estado VARCHAR(2)
, num_cep VARCHAR(15)
, cod_pais DOUBLE PRECISION
, des_pais VARCHAR(2000)
, nom_bairro VARCHAR(2000)
, des_endereco VARCHAR(2000)
, num_telefone TEXT
, num_telefone_2 TEXT
, des_endereco_complemento VARCHAR(2000)
, des_email VARCHAR(2000)
, ind_simples_nacional TEXT
, ind_micro_empreendedor TEXT
)
;

CREATE INDEX i01_dim_estabelecimento ON dim_estabelecimento (num_raiz_cnpj)
;


CREATE TABLE projjetta.dim_socio
(
  num_raiz_cnpj BIGINT
, tip_pessoa TEXT
, nom_socio VARCHAR(2000)
, cod_qualificacao_socio BIGINT
, des_qualificacao_socio VARCHAR(2000)
, cod_pais BIGINT
, des_pais VARCHAR(2000)
, nom_representante VARCHAR(2000)
, cod_qualificacao_representante BIGINT
, des_qualificacao_representante VARCHAR(2000)
)
;

CREATE INDEX i01_dim_socio ON dim_socio (num_raiz_cnpj)
;
