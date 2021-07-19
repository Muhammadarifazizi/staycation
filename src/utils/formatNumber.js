/* eslint-disable import/no-anonymous-default-export */
// using international number API browser to change number format
export default (number) => {
    const FormatNumbering = new Intl.NumberFormat("id-ID");
    return FormatNumbering.format(number);
}