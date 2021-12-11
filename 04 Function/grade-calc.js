//Challenge area it will take two arguments student score + total possible score (15/20)
//15/20 => You got a C (75%)
// A 90 - 100, B 80-89, C 70-80, D 60-69, F 0-50

const studentScore = function (studentScore, totalScore) {

    if (typeof studentScore !== `number` || typeof totalScore !== `number`) {
        throw Error('Argument must be a number')
    } else {
        let letterGrade = "";

        const percentScored = (studentScore / totalScore) * 100;
        if (percentScored >= 90) {
            letterGrade = "A";
        } else if (percentScored >= 80) {
            letterGrade = 'B'
        } else if (percentScored >= 70) {
            letterGrade = 'C';
        } else if (percentScored >= 60) {
            letterGrade = 'D';
        } else {
            letterGrade = 'F'
        }

        return `You got a ${letterGrade} (${percentScored}%)`
    }


}
try {
    const result = studentScore(false, 20);
    console.log(result);

} catch (e) {
    console.log('Catch block is running')
}