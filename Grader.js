function grader(score) {
  if (score >= 0.9) {
    return "A";
} else if (score >= 0.8) {
    return "B";
} else if (score >= 0.7) {
    return "C";
} else if (score >= 0.6) {
    return "D";
} else {
    return "F";
}
}

console.log(grader(1.1))