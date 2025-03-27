import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10, // 10 usuarios virtuales
    duration: '10 seg', // Ejecutar la prueba durante 10 segundos
};

export default function (){
    let res = http.get('https://test-api.k6.io/public/crocodiles/')
    check(res, {
        'El estado es 200': (r) => r.status === 200,
        'Respuesta en mnos e500ms': (r) => r.timings.duration < 500,
    })
    sleep(1)
}