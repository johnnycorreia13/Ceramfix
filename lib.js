/**
 * Cont�m fun��es js utilizadas nas aplica��es Pentaho
 * Exemplo chamada:
 * var diretorioETL = getEnvironmentVar('Internal.Entry.Current.Directory');
 * LoadScriptFile(diretorioETL + "/lib.js");
 */

/**
 * Retornar verdadeiro se o valor est� na lista
 * @param {*} valor 
 * @param {*} lista 
 */

function isNaLista(valor, lista) {
	var r = false;
	for (var i = 0; i < lista.length; i++) {
		if (lista[i] == valor) {
			r = true;
			break;
		}
	};
	return r;
}


/**
 * Arredondar um valor num�rico conforme as casas decimais
 * @param {*} valor 
 * @param {*} casas 
 * @returns Valor arredondado
 */
function arredondar(valor, casas) {
	if (isNaN(valor)) {
		valor = 0;
	}
	return (ceil(valor * Math.pow(10, casas)) / Math.pow(10, casas));
}


/**
 * Tratar limites do campo tipo "datetime" do SQL Server.
 * @param {*} data Data a ser validada
 * @returns Data ajustada conforme limite do SQL Server, caso necess�rio.
 */
function tratarCampoData(data) {
	var novaData = data;
	if (dateDiff(data, str2date("01.01.1753","dd.MM.yyyy"),"d") > 0) {
		novaData = str2date("01.01.1753","dd.MM.yyyy");
    } else if (dateDiff(data, str2date("31.12.9999","dd.MM.yyyy"),"d") < 0) {
		novaData = str2date("31.12.9999","dd.MM.yyyy");
	}
	return novaData;
}


/**
 * Retornar o documento formatado
 * @param {*} documento n�mero do documento do cliente (CNPJ ou CPF) sem formata��o
 * @returns Retorna o CNPJ/CPF formatado.
 */
function formataCNPJCPF(documento) {
    var r = '';

    if (documento == null || documento == undefined) {
        return '';
    }

    if (documento.length <= 11) {
        // CPF
        documento = rpad(documento, "0",11);
        r = documento.substring(0, 3) + "." + 
            documento.substring(3, 6) + "." + 
            documento.substring(6, 9) + "-" + 
            documento.substring(9, 11);

    } else if (documento.length <= 14) {
        // CNPJ
        documento = rpad(documento, "0",14);
        r = documento.substring(0, 2) + "." + 
            documento.substring(2, 5) + "." + 
            documento.substring(5, 8) + "/" + 
            documento.substring(8, 12) + "-" + 
            documento.substring(12, 14);        

    }

    return r;
}


/**
 * Retorna somente os caracteres da vari�vel "s" especificados na vari�vel "ls".
 * @param {*} s string 
 * @param {*} ls lista de caracteres v�lidos
 * @returns Somente os caracteres contidos na lista ls.
 */
function mantemSomenteCaracteres(s, ls) {
    if ((s == undefined || s == null) || (ls == undefined || ls == null)) {
        return '';
    }
    var r = '';
    for (var i = 0; i < s.length; i++) {
        if (ls.indexOf(s[i]) != -1) {
            r = r + s[i];
        }
    }
    return r;
}


/**
 * Remover caracteres especiais de uma string
 * @param {*} valor (campo string)
 * @returns string sem caracteres especiais (acentua��o).
 */
function removerCaracterEspecial(valor) {

    if (valor == undefined || valor == null) {
        return '';
    }

    var mapaCaracteres = {
		'�': 'S',
		'�': 's',
		'�': 'Z',
		'�': 'z',
		'�': 'A',
		'�': 'A',
		'�': 'A',
		'�': 'A',
		'�': 'A',
		'�': 'A',
		'�': 'A',
		'�': 'C',
		'�': 'E',
		'�': 'E',
		'�': 'E',
		'�': 'E',
		'�': 'I',
		'�': 'I',
		'�': 'I',
		'�': 'I',
		'�': 'N',
		'�': 'O',
		'�': 'O',
		'�': 'O',
		'�': 'O',
		'�': 'O',
		'�': 'O',
		'�': 'U',
		'�': 'U',
		'�': 'U',
		'�': 'U',
		'�': 'Y',
		'�': 'B',
		'�': 'B',
		'�': 'a',
		'�': 'a',
		'�': 'a',
		'�': 'a',
		'�': 'a',
		'�': 'a',
		'�': 'a',
		'�': 'c',
		'�': 'e',
		'�': 'e',
		'�': 'e',
		'�': 'e',
		'�': 'i',
		'�': 'i',
		'�': 'i',
		'�': 'i',
		'�': 'o',
		'�': 'n',
		'�': 'o',
		'�': 'o',
		'�': 'o',
		'�': 'o',
		'�': 'o',
		'�': 'o',
		'�': 'u',
		'�': 'u',
		'�': 'u',
		'�': 'y',
		'�': 'y',
		'�': 'b',
		'�': 'y',
		'?o': 'ao',
		'?O': 'AO',
        '\'': " " };

    var nc = valor;
    for (var i = 0; i < valor.length; i++) {
        var c = nc[i];
        if (mapaCaracteres[c] == undefined) {
            continue;
        }
        nc = nc.replace(c, mapaCaracteres[c]);
    }
    valor = nc;
    return valor;
}


/**
 * Converter as primeiras letras de cada palavra em MAI�SCULO e as demais letras para MIN�SCULO.
 * @param {*} phrase string que cont�m o texto.
 * @returns texto convertido
 */
function capitalize (phrase) {
    if (phrase == undefined || phrase == null) {
        return '';
    }
    return phrase
      .toLowerCase()
      .split(' ')
      .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1) })
      .join(' ');
}