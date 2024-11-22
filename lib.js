/**
 * Contém funções js utilizadas nas aplicações Pentaho
 * Exemplo chamada:
 * var diretorioETL = getEnvironmentVar('Internal.Entry.Current.Directory');
 * LoadScriptFile(diretorioETL + "/lib.js");
 */

/**
 * Retornar verdadeiro se o valor está na lista
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
 * Arredondar um valor numérico conforme as casas decimais
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
 * @returns Data ajustada conforme limite do SQL Server, caso necessário.
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
 * @param {*} documento número do documento do cliente (CNPJ ou CPF) sem formatação
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
 * Retorna somente os caracteres da variável "s" especificados na variável "ls".
 * @param {*} s string 
 * @param {*} ls lista de caracteres válidos
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
 * @returns string sem caracteres especiais (acentuação).
 */
function removerCaracterEspecial(valor) {

    if (valor == undefined || valor == null) {
        return '';
    }

    var mapaCaracteres = {
		'Š': 'S',
		'š': 's',
		'Ž': 'Z',
		'ž': 'z',
		'À': 'A',
		'Á': 'A',
		'Â': 'A',
		'Ã': 'A',
		'Ä': 'A',
		'Å': 'A',
		'Æ': 'A',
		'Ç': 'C',
		'È': 'E',
		'É': 'E',
		'Ê': 'E',
		'Ë': 'E',
		'Ì': 'I',
		'Í': 'I',
		'Î': 'I',
		'Ï': 'I',
		'Ñ': 'N',
		'Ò': 'O',
		'Ó': 'O',
		'Ô': 'O',
		'Õ': 'O',
		'Ö': 'O',
		'Ø': 'O',
		'Ù': 'U',
		'Ú': 'U',
		'Û': 'U',
		'Ü': 'U',
		'Ý': 'Y',
		'Þ': 'B',
		'ß': 'B',
		'à': 'a',
		'á': 'a',
		'â': 'a',
		'ã': 'a',
		'ä': 'a',
		'å': 'a',
		'æ': 'a',
		'ç': 'c',
		'è': 'e',
		'é': 'e',
		'ê': 'e',
		'ë': 'e',
		'ì': 'i',
		'í': 'i',
		'î': 'i',
		'ï': 'i',
		'ð': 'o',
		'ñ': 'n',
		'ò': 'o',
		'ó': 'o',
		'ô': 'o',
		'õ': 'o',
		'ö': 'o',
		'ø': 'o',
		'ù': 'u',
		'ú': 'u',
		'û': 'u',
		'ý': 'y',
		'ý': 'y',
		'þ': 'b',
		'ÿ': 'y',
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
 * Converter as primeiras letras de cada palavra em MAIÚSCULO e as demais letras para MINÚSCULO.
 * @param {*} phrase string que contém o texto.
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