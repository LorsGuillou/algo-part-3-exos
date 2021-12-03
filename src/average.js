/*
 * Retourner la moyenne des valeurs du tableau
 * ex: [4, 8] => 6 car (4+8)/2
 * ex: [6, 8, 10] => 8 car (6+8+10)/3
 */
function average(scores) {
    let total = 0;
    let count = 0;

    scores.forEach(function(item) {
        total += item;
        count++;
    });

    return total / count
        
    // CODE HERE
}

export { average };