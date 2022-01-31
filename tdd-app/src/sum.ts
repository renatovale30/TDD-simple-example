const sum = (numbers: number[]) => {
    return numbers.reduce((sum, num) => sum + num, 0);
}

export default sum;