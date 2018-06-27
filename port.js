import detect from 'get-port';

detect().then(port => {
    export default port;
});