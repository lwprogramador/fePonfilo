import Swal from 'sweetalert2'

export const iconos = {
    WARNING: 'warning',
    ERROR: 'error',
    SUCCESS: 'success',
    INFO: 'info',
    QUESTION: 'question'
}

export const mensajeInformativo = function (icono: any, titulo: string) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    Toast.fire({
        icon: icono,
        title: titulo
    });
}