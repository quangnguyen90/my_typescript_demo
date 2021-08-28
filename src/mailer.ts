export const send = (email: string, subject: string, content: string): Promise<boolean> => {
    console.log(email + "-" + subject + "-" + content);
    return Promise.resolve(true);
}
