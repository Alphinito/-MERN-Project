import { apiGET } from "../hooks/methods"

export const VisitasRealizadas = async(group, time) => {

    const currentDate = new Date();
    const response = await apiGET('charts-web/num-visitas-reales-main')
    let responseFilter

    if(group || time){//------------------------------|SI EXISTE ALGUNO DE LOS PARAMETROS|

        if(group){//-----------------------|ONLY GROUP|

            if(group == 'equipo'){
                responseFilter = response.filter(res => res.EMP_EQUIPO == group)

            }else if(group == 'ciudad'){

            }else if(group == 'zona'){

            }else if(group == 'individual'){

            }else{

            }
        }
        if(time){//-------------------------|ONLY TIME|

            if(time == 'historico'){

            }else if(time == 'anual'){

            }else if(time == 'mensual'){

            }else if(time == 'hoy'){

            }else{
                
            }

        }
        if(group && time){

        }

    }else{//------------------------------------------|GLOBAL (si no existen parametros)|
        responseFilter = response.filter(res => new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
    }
    return responseFilter
}