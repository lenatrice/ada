const xicaras = Number(process.argv[2]);
const po = xicaras * 10; // gramas
const agua = xicaras * 150; // ml

console.log(`Pó: ${po} g, água: ${agua} ml`);

if (xicaras > 6) {
    console.log("Passar em duas vezes");
} else {
    console.log("Passar de uma vez");
}