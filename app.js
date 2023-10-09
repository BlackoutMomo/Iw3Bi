function mostrar() {
    //Armaznamento de dados
    var valor = document.getElementById("valor1")
    var resposta = document.getElementById("resposta")
    var senha = document.getElementById("senha").value
    var Curso = document.getElementsByName("Curso")
    //Pontos de outras salas
    var PontosPri_Info = [1, 1, 1]
    var PontosSeg_Info = [1, 1, 1]
    var PontosTer_Info = [1, 0, 0]
    //pontos totais
    var Pri_info_total = PontosPri_Info[0] + PontosPri_Info[1] + PontosPri_Info[2]
    var Seg_Info_total = PontosSeg_Info[0] + PontosSeg_Info[1] + PontosSeg_Info[2]
    var Ter_Info_total = PontosTer_Info[0] + PontosTer_Info[1] + PontosTer_Info[2]

    //colocando os pontos inseridas na tabela


    //mostrando os pontos no html
    for (let i = 0; i < 3; i++) {
        document.getElementsByName("Pontos_1info")[i].innerHTML = `${PontosPri_Info[i]}`
        document.getElementsByName("Pontos_2info")[i].innerHTML = `${PontosSeg_Info[i]}`
        document.getElementsByName("Pontos_3info")[i].innerHTML = `${PontosTer_Info[i]}`
    }//senha e começo do processamento
    if (senha == "etec" && Number(valor.value) > 0) {

        if (Curso[0].checked) {
            PontosPri_Info[2] = PontosPri_Info[2] + Number(valor.value)
            Pri_info_total = Pri_info_total + Number(valor.value)
            resposta.innerHTML = `Pontos adicionados ao 1 info <br> O antigo numero de pontos era de ${Pri_info_total - Number(valor.value)},
         agora é de ${Pri_info_total}`


        }
        if (Curso[1].checked) {
            PontosSeg_Info[2] = PontosSeg_Info[2] + Number(valor.value)
            Seg_Info_total = Seg_Info_total + Number(valor.value)
            resposta.innerHTML = `Pontos adicionados ao 2 info <br> O antigo numero de pontos era de ${Seg_Info_total - Number(valor.value)},
         agora é de ${Seg_Info_total}`

        }
        if (Curso[2].checked) {
            PontosTer_Info[2] = PontosTer_Info[2] + Number(valor.value)
            Ter_Info_total = Ter_Info_total + Number(valor.value)
            resposta.innerHTML = `Pontos adicionados ao 3 info <br> O antigo numero de pontos era de ${Ter_Info_total - Number(valor.value)},
         agora é de ${Ter_Info_total}`

        }

        //mostrando os pontos no html
        for (let i = 0; i < 3; i++) {
            document.getElementsByName("Pontos_1info")[i].innerHTML = `${PontosPri_Info[i]}`
            document.getElementsByName("Pontos_2info")[i].innerHTML = `${PontosSeg_Info[i]}`
            document.getElementsByName("Pontos_3info")[i].innerHTML = `${PontosTer_Info[i]}`
        }

        if (Pri_info_total > Seg_Info_total && Pri_info_total > Ter_Info_total && Seg_Info_total > Ter_Info_total) {
            document.getElementsByName("posicao")[0].innerText = `Primeiro info:${Pri_info_total}`
            document.getElementsByName("posicao")[1].innerText = `Segundo info:${Seg_Info_total}`
            document.getElementsByName("posicao")[2].innerText = `Terceiro info:${Ter_Info_total}`
        }
        else if (Pri_info_total > Seg_Info_total && Pri_info_total > Ter_Info_total && Seg_Info_total < Ter_Info_total) {
            document.getElementsByName("posicao")[0].innerText = `Primeiro info:${Pri_info_total}`
            document.getElementsByName("posicao")[2].innerText = `Segundo info:${Seg_Info_total}`
            document.getElementsByName("posicao")[1].innerText = `Terceiro info:${Ter_Info_total}`

        }
        if (Seg_Info_total > Pri_info_total && Seg_Info_total > Ter_Info_total && Pri_info_total > Ter_Info_total) {
            document.getElementsByName("posicao")[1].innerText = `Primeiro info:${Pri_info_total}`
            document.getElementsByName("posicao")[0].innerText = `Segundo info:${Seg_Info_total}`
            document.getElementsByName("posicao")[2].innerText = `Terceiro info:${Ter_Info_total}`
        }
        else if (Seg_Info_total > Pri_info_total && Seg_Info_total > Ter_Info_total && Pri_info_total < Ter_Info_total) {
            document.getElementsByName("posicao")[2].innerText = `Primeiro info:${Pri_info_total}`
            document.getElementsByName("posicao")[0].innerText = `Segundo info:${Seg_Info_total}`
            document.getElementsByName("posicao")[1].innerText = `Terceiro info:${Ter_Info_total}`
        }

        if (Ter_Info_total > Pri_info_total && Ter_Info_total > Seg_Info_total && Pri_info_total > Seg_Info_total) {
            document.getElementsByName("posicao")[1].innerText = `Primeiro info:${Pri_info_total}`
            document.getElementsByName("posicao")[2].innerText = `Segundo info:${Seg_Info_total}`
            document.getElementsByName("posicao")[0].innerText = `Terceiro info:${Ter_Info_total}`

        }
        else if (Ter_Info_total > Pri_info_total && Ter_Info_total > Seg_Info_total && Pri_info_total < Seg_Info_total) {
            document.getElementsByName("posicao")[2].innerText = `Primeiro info:${Pri_info_total}`
            document.getElementsByName("posicao")[1].innerText = `Segundo info:${Seg_Info_total}`
            document.getElementsByName("posicao")[0].innerText = `Terceiro info:${Ter_Info_total}`

        }

        if (Pri_info_total == Seg_Info_total) {
            document.getElementsByName("posicao")[1].innerText = `Terceiro Info:${Ter_Info_total}`
            document.getElementsByName("posicao")[0].innerText = `Primeiro e Segundo Info empatados:`
        }

        else if (Pri_info_total == Ter_Info_total) {
            document.getElementsByName("posicao")[1].innerText = `Segundo Info:${Ter_Info_total}`
            document.getElementsByName("posicao")[0].innerText = `Primeiro e Terceiro Info empatados:`
        }

        else if (Seg_Info_total == Ter_Info_total) {
            document.getElementsByName("posicao")[1].innerText = `Primeiro Info:${Pri_info_total}`
            document.getElementsByName("posicao")[0].innerText = `Primeiro e Segundo Info empatados`
        }



    }

    else {

        window.alert("Reveja os seus dados")

    }
}