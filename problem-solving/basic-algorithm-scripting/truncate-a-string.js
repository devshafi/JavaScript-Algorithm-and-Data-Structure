function truncateString(str, num = 0) {

    if (str.length <= num) return str;

    let truncateStr = str.substring(0, num);
    console.log(`${truncateStr}...`);
    return `${truncateStr}...`;

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);