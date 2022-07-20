


export const validarCampoVacio = function (valCampo: any) {
    try {
        if (valCampo === undefined || valCampo === null || valCampo.length === 0)
            return false;
        else
            return true;
    } catch (Error) {
        return false;
    }
}