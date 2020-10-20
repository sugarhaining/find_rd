interface ResponseBody {
    code: number
    message: string
    data: object
}

export const genarateResponseBody = (code: number, message: string, data: {}): ResponseBody => {
    return {
        code,
        message,
        data
    }
}