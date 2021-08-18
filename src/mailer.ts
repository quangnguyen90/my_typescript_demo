export const send = (email: string, subject: string, content: string): boolean => {
    console.log(email + "-" + subject + "-" + content);
    return true;
}
